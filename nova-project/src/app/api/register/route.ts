import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { registrationSchema } from "@/lib/validations/registration";
import clientPromise from "@/lib/mongodb";
import { sendRegistrationEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = registrationSchema.parse(body);

    const client = await clientPromise;
    const db = client.db("hackathon");
    const teamsCollection = db.collection("teams");

    // Check if team name already exists (case-insensitive)
    const existingTeam = await teamsCollection.findOne({
      teamName: { $regex: new RegExp(`^${validatedData.teamName}$`, "i") },
    });

    if (existingTeam) {
      return NextResponse.json(
        { error: "A team with this name is already registered." },
        { status: 400 }
      );
    }

    // Prepare document for insertion
    const newTeam = {
      ...validatedData,
      createdAt: new Date(),
    };

    const result = await teamsCollection.insertOne(newTeam);

    if (!result.insertedId) {
      throw new Error("Failed to insert team record into database.");
    }

    // Find the leader to send the email
    const leader = validatedData.members.find((m) => m.is_leader);
    if (leader && leader.email) {
      const memberNames = validatedData.members.map((m) => m.fullname);
      // Attempt to send email, but don't fail registration if it fails
      await sendRegistrationEmail(leader.email, validatedData.teamName, memberNames);
    }

    return NextResponse.json(
      { success: true, teamId: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failure", details: err.issues },
        { status: 422 }
      );
    }
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Registration Error:", message);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

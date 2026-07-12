import { MailtrapClient } from "mailtrap";

if (!process.env.MAILTRAP_TOKEN) {
  throw new Error("Missing environment variable: MAILTRAP_TOKEN");
}

if (!process.env.MAILTRAP_SENDER_EMAIL) {
  throw new Error("Missing environment variable: MAILTRAP_SENDER_EMAIL");
}

const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

const sender = {
  email: process.env.MAILTRAP_SENDER_EMAIL,
  name: "Nova Hackathon Team",
};

export async function sendRegistrationEmail(
  leaderEmail: string,
  teamName: string,
  memberNames: string[]
) {
  const htmlTemplate = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8b5cf6;">Registration Confirmed! 🎉</h2>
      <p>Hello,</p>
      <p>Thank you for registering your team <strong>${teamName}</strong> for the Nova Hackathon.</p>
      
      <p>Here are your registered team members:</p>
      <ul>
        ${memberNames.map((name) => `<li>${name}</li>`).join("")}
      </ul>

      <p>We will be sending more details regarding the hackathon schedule and rules closer to the event date.</p>
      
      <p>Best regards,<br>The Nova Hackathon Team</p>
    </div>
  `;

  try {
    const response = await client.send({
      from: sender,
      to: [{ email: leaderEmail }],
      subject: `Registration Confirmed: ${teamName}`,
      html: htmlTemplate,
    });
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Failed to send email via Mailtrap:", error);
    // Depending on requirements, we might want to throw here, but usually 
    // it's better to not fail the whole request if just the email fails.
    return null;
  }
}

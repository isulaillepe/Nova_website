# Project Nova: Landing Page & Hackathon Registration Portal

Welcome to **Project Nova**, a premium, high-performance cloud platform landing page integrated with a robust team registration system for the **Nova Hackathon**.

This project is built using a modern stack featuring **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **MongoDB**, **Upstash Redis**, and **Mailtrap**.

---

## 🚀 Key Features

- **Premium UI/UX**: A visually stunning, fully responsive landing page with rich aesthetics, glassmorphism, smooth hover transitions, and dark-theme focus.
- **Dynamic Sections**:
  - **Hero**: Engaging introduction with interactive CTAs.
  - **Stats**: Key performance indicators and platform scale.
  - **Features**: Grid showcase of platform capabilities.
  - **About**: Details about Nova's mission and architecture.
  - **Testimonials**: Interactive social proof.
  - **Partners**: Showcase of trusted companies.
  - **CTA**: Direct conversion sections.
- **Hackathon Registration**: An interactive multi-step team registration form with full schema validation.
- **MongoDB Database Integration**: Store team names, leader designations, and member information securely.
- **Upstash Redis Rate Limiting**: Protect registration endpoints from spam/abuse using IP-based sliding window rate-limiting middleware.
- **Mailtrap Integration**: Automated HTML registration confirmation emails sent instantly to team leaders.

---

## 🛠️ Tech Stack

- **Core Framework**: [Next.js 16](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
- **Styling & Icons**: [Tailwind CSS v4](https://tailwindcss.com/) & [Lucide React](https://lucide.dev/)
- **Database**: [MongoDB](https://www.mongodb.com/) (using native Driver)
- **Rate Limiting**: [Upstash Redis](https://upstash.com/) (via `@upstash/ratelimit` & `@upstash/redis`)
- **Email Delivery**: [Mailtrap SDK](https://mailtrap.io/)
- **Form & Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

---

## 📂 Repository Structure

The main codebase resides in the `nova-project` subdirectory:

```text
nova-project/
├── src/
│   ├── app/                 # Next.js App Router routes & API endpoints
│   │   ├── api/register/    # API route for handling team registration
│   │   ├── register/        # Registration page frontend
│   │   ├── layout.tsx       # Global layout & metadata configuration
│   │   └── page.tsx         # Interactive home page combining sections
│   ├── components/          # Reusable components
│   │   ├── layout/          # Global layout components (Header, Footer)
│   │   ├── sections/        # Section-specific components (Hero, Stats, About, RegistrationForm, etc.)
│   │   └── ui/              # Atom-level UI primitives (buttons, inputs, labels)
│   ├── lib/                 # Third-party configurations & helper libraries
│   │   ├── mailer.ts        # Mailtrap SMTP client and templates
│   │   ├── mongodb.ts       # MongoDB client configuration & promise-based pool
│   │   ├── utils.ts         # Utility helpers for styling classes (cn merge)
│   │   └── validations/     # Zod schemas (registration form validation)
│   └── utils/               # General utility functions
```

---

## ⚙️ Setup and Installation

### 1. Clone & Install Dependencies
First, navigate to the `nova-project` directory and install the project dependencies:

```bash
cd nova-project
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file inside the `nova-project` directory. You will need to supply credentials for MongoDB, Upstash Redis, and Mailtrap:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/hackathon?retryWrites=true&w=majority

# Mailtrap Credentials (for transactional emails)
MAILTRAP_TOKEN=your_mailtrap_api_token
MAILTRAP_SENDER_EMAIL=your_sender_email@yourdomain.com

# Upstash Redis Configuration (for sliding-window rate limiting)
UPSTASH_REDIS_REST_URL=https://your-database.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token
```

### 3. Run the Development Server
Run the local dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To build the application for deployment:

```bash
npm run build
npm start
```

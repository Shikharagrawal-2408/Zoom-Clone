# Zoom Clone

A modern video conferencing web application inspired by Zoom, built with **Next.js, TypeScript, Clerk, and Stream Video SDK**.

The application allows users to create and join meetings, schedule upcoming meetings, manage previous meetings, access recordings, and have personal meeting rooms.

## 🚀 Features

* 🔐 **Authentication** — Secure user authentication with Clerk
* 🎥 **Create Meetings** — Start instant video meetings
* 📅 **Schedule Meetings** — Schedule meetings for a future date and time
* 🔗 **Join Meetings** — Join meetings using a meeting link
* 🏠 **Personal Meeting Room** — Dedicated personal meeting room for each user
* 📋 **Upcoming Meetings** — View scheduled meetings
* 🕘 **Previous Meetings** — View previously completed meetings
* 🎬 **Recordings** — Access available meeting recordings
* 📱 **Responsive UI** — Works across desktop and mobile devices
* 🎨 **Modern UI** — Built using Tailwind CSS and reusable UI components

## 🛠️ Tech Stack

* **Next.js** — React framework for the application
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Styling and responsive design
* **Clerk** — Authentication and user management
* **Stream Video SDK** — Real-time video conferencing
* **Shadcn/UI** — Reusable UI components
* **Lucide / SVG Icons** — Interface icons

## 📁 Project Structure

```text
my-app/
├── actions/              # Server actions
├── app/                  # Next.js App Router pages
│   ├── (auth)/           # Authentication pages
│   ├── (root)/           # Main application pages
│   └── meeting/          # Meeting pages
├── components/           # Reusable React components
│   └── ui/               # UI components
├── constants/            # Application constants
├── lib/                  # Utility functions
├── providers/            # Context and provider components
├── public/               # Images and icons
├── middleware.ts         # Authentication middleware
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shikharagrawal-2408/Zoom-Clone.git
cd Zoom-Clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Add your own credentials for **Clerk** and **Stream**.

> Never commit `.env.local` or any file containing API keys or secrets to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🔑 Required Services

This project uses the following external services:

### Clerk

Used for authentication and user management.

Create an account and obtain your API keys from the Clerk dashboard.

### Stream

Used for real-time video calling, meetings, and recordings.

Create a Stream application and obtain the required API credentials.

## 📸 Application

The application provides a dashboard where users can:

* Create an instant meeting
* Schedule a meeting
* Join an existing meeting
* View upcoming meetings
* View previous meetings
* Access recordings
* Open their personal meeting room

## 🔒 Environment Variables

The following variables are required:

| Variable                            | Description               |
| ----------------------------------- | ------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key     |
| `CLERK_SECRET_KEY`                  | Clerk server-side secret  |
| `NEXT_PUBLIC_STREAM_API_KEY`        | Stream API key            |
| `STREAM_SECRET_KEY`                 | Stream server-side secret |

Keep all secret values private.

## 📦 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint.

## 🚀 Deployment

This application can be deployed using platforms such as **Vercel**.

When deploying, remember to add the required environment variables to your deployment platform.

## 👨‍💻 Author

**Shikhar Agrawal**

GitHub: [Shikharagrawal-2408](https://github.com/Shikharagrawal-2408)

## 📄 License

This project is created for learning and portfolio purposes.

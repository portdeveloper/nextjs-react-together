# React Together Workshop - Next.js Demo

A Next.js demonstration of [react-together](https://react-together.dev/) hooks for real-time collaboration features.

## What is React Together?

React Together is an AI-friendly library that makes it incredibly easy to add real-time collaboration to your React applications. You can simply paste documentation pages into your LLM chat (like Cursor) and it works seamlessly!

## Features Demonstrated

This example showcases two core react-together hooks:

### 🔄 useStateTogether
- **Shared Counter**: A real-time synchronized counter that updates across all connected users
- Any state changes are instantly reflected for everyone viewing the page
- Perfect for collaborative interactions like voting, counting, or shared form data

### 🖱️ useCursors  
- **Real-time Cursor Sharing**: See other users' mouse cursors moving in real-time
- Smooth cursor animations with customizable update rates
- Automatic cleanup when users disconnect

### 👥 Connected Users
- Display of currently connected users
- Real-time connection status updates
- User presence indicators

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Test real-time features:**
   - Open the page in multiple browser windows
   - Share the link with others
   - Watch as interactions sync in real-time!

## Sharing with Others (ngrok setup)

To share your demo with others outside your local network:

1. **Install ngrok:**
   ```bash
   npm install -g ngrok
   # or use: brew install ngrok
   ```

2. **Get a static domain** (recommended):
   - Sign up at [ngrok.com](https://ngrok.com) 
   - Get a free static domain from your dashboard
   - This gives you a consistent URL like `your-app.ngrok-free.app`

3. **Configure multisynq API settings:**
   - Go to your [multisynq dashboard](https://multisynq.io)
   - Add your ngrok static URL to the allowed domains list
   - This ensures your API key works with the ngrok domain

4. **Start ngrok tunnel:**
   ```bash
   ngrok http 3000 --domain=your-static-domain.ngrok-free.app
   ```

5. **Share the ngrok URL:**
   - Send the ngrok URL to others
   - Everyone can now see real-time updates together!

💡 **Pro tip**: Static domains prevent you from having to reconfigure multisynq settings every time you restart ngrok.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Real-time**: react-together
- **Language**: TypeScript

## Try It Out

Open this page in multiple browser windows or share with others to see the real-time synchronization in action. Every click, cursor movement, and state change will be instantly visible to all connected users!
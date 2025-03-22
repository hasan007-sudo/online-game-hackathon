# Quick 3D MMORPG Client

This is the client portion of the Quick 3D MMORPG game.

## Deployment Instructions

### Deploying to Render.com

1. Sign up or log in to [Render.com](https://render.com/)
2. From the dashboard, click "New" and select "Static Site"
3. Connect your GitHub repository or upload your code directly
4. Configure your deployment with the following settings:
   - **Name**: quick-3d-mmorpg-client (or your preferred name)
   - **Build Command**: Leave empty (no build step needed)
   - **Publish Directory**: `.` (the root directory)
5. Click "Create Static Site"

### Environment Variables

If needed, add the following environment variable in the Render dashboard:
- `WEBSOCKET_URL`: The URL of your WebSocket server (e.g., wss://online-game-hackathon.onrender.com)

## Local Development

To run the client locally:

1. Make sure you have Node.js installed
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open your browser to the URL shown in the terminal (typically http://localhost:3000)

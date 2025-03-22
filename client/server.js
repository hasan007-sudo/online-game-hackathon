import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate env-config.js with environment variables
const generateEnvConfig = () => {
  const websocketUrl = process.env.WEBSOCKET_URL || 'wss://online-game-hackathon.onrender.com';
  
  const envConfig = `// This file is auto-generated - do not modify directly
window.ENV = {
  WEBSOCKET_URL: "${websocketUrl}"
};`;

  fs.writeFileSync(join(__dirname, 'env-config.js'), envConfig);
  console.log('Generated env-config.js with environment variables');
};

// Generate env-config.js on server start
generateEnvConfig();

// Serve static files
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Using WebSocket URL: ${process.env.WEBSOCKET_URL || 'wss://online-game-hackathon.onrender.com'}`);
});

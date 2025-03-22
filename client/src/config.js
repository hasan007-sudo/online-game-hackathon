// Configuration file to centralize environment variables
// This allows for easy switching between environments

// Default values (fallbacks)
const defaultConfig = {
  websocketUrl: 'wss://online-game-hackathon.onrender.com',
};

// Try to load from environment variables if available
// This approach works with various bundlers that support env variables
const config = {
  websocketUrl: process.env.WEBSOCKET_URL || defaultConfig.websocketUrl,
};

export default config;

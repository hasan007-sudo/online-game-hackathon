// Configuration file to centralize environment variables
// This allows for easy switching between environments

// Get environment variables from window.ENV (injected by env-config.js)
// with fallback values if not available
const config = {
  // Use the environment variable from window.ENV if available,
  // otherwise fall back to the default value
  websocketUrl: (window.ENV && window.ENV.WEBSOCKET_URL) || 'wss://online-game-hackathon.onrender.com'
};

export default config;

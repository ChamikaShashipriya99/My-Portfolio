# MySite - Full Stack Application

This is a full-stack application with a React frontend and Express backend.

## Project Structure

- `client/` - React frontend application
- `server/` - Express backend server

## Getting Started

### First Time Setup

1. Install all dependencies (root, client, and server):
   ```bash
   npm run install-all
   ```

### Running the Application

#### Option 1: Start Both Client and Server Simultaneously (Recommended)
```bash
npm start
```
or
```bash
npm run dev
```

This will start both the React development server (usually on port 3000) and the Express server simultaneously.

#### Option 2: Start Individually

**Start the server only:**
```bash
npm run server
```

**Start the client only:**
```bash
npm run client
```

## Available Scripts

- `npm start` - Start both client and server simultaneously
- `npm run dev` - Start both client and server simultaneously (alias for start)
- `npm run server` - Start only the Express server
- `npm run client` - Start only the React client
- `npm run install-all` - Install dependencies for all parts of the application

## Ports

- React Client: http://localhost:3000
- Express Server: Check your server.js file for the configured port

## Development

The application uses `concurrently` to run both the client and server in parallel, making development much more convenient. 
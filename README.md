# imtheo.lol

My personal portfolio website.

## Tech Stack

### Frontend
- React
- Vite
- React Router

### Backend
- Express.js
- TypeScript

### Installation
1. Clone the repository
2. Copy the environment variables file:
   ```bash
   cp .env.example .env
   ```
3. Fill in your environment variables in the `.env` file
4. Install dependencies
   ```bash
   cd client && npm i && cd ../server && npm i && cd ../
   ```

### Development
Start the development server with:
```bash
npm run dev
```
This will start both the frontend (on Vite's dev server) and backend (on Express) concurrently.
The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:8782` (configurable in .env).

### Production
Build the frontend and start the server:
```bash
npm start
```

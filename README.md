# WanderLust

Bright, Airbnb-style for listing stays, powered by Express, MongoDB, Passport auth, Mapbox geocoding, and Cloudinary image storage.

## Stack

- Node.js (Express, EJS, ejs-mate layouts, Joi validation)
- MongoDB (Mongoose + Connect-Mongo sessions)
- Auth: Passport local
- Uploads: Multer + Cloudinary
- Geocoding/Maps: Mapbox SDK + mapbox-gl

## Prerequisites

- Node 23.10.0 (per `package.json`)
- MongoDB instance/URI
- Cloudinary account (for images)
- Mapbox token (for geocoding/maps)

## Setup

1. Install deps:

```bash
npm install
```

2. Create `.env` in the project root (example):

```bash
NODE_ENV=development
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust
SECRET=replace-with-session-secret
CLOUD_NAME=your-cloudinary-name
CLOUD_API_KEY=your-cloudinary-key
CLOUD_API_SECRET=your-cloudinary-secret
MAP_TOKEN=pk.your-mapbox-token
```

3. Seed sample data (optional, uses local Mongo URI in `init/index.js`):

```bash
node init/index.js
```

## Run

```bash
nodemon app.js
```

App listens on `http://localhost:8080`.

## Usage notes

- Auth is required to create/edit/delete listings.
- Images are uploaded to Cloudinary; ensure your Cloudinary creds are set.
- Map shows listing location; ensure `MAP_TOKEN` is valid.

## Structure

- `app.js` – main server setup/routes/middleware
- `routes/` – listings, reviews, users
- `controllers/` – route handlers
- `models/` – Mongoose schemas
- `views/` – EJS templates (layout/components/pages)
- `public/` – static assets (CSS/JS)
- `init/` – seed helper

## Troubleshooting

- Mapbox token errors → check `MAP_TOKEN`.
- DB connection errors → verify `ATLASDB_URL` and Mongo is running/reachable.
- Upload errors → verify Cloudinary keys and account.

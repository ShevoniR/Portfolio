
# Portfolio — Next.js + Tailwind + MongoDB

## Quick Start
1) `npm install`
2) Create `.env.local`:
```
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=portfolio_db
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
3) `npm run dev` → http://localhost:3000

## Customize
- `lib/data.js` — edit your name, education, skills, and projects
- Replace images in `/public`
- Navbar brand text in `components/Navbar.jsx`

## Deploy
- Push to GitHub → import on Vercel
- Add env vars in Vercel settings
- Set `NEXT_PUBLIC_BASE_URL` to your production URL

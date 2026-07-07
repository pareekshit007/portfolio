# Pareekshit Singh — Portfolio

A full-stack developer portfolio:

- **Frontend:** React (Vite) + Tailwind CSS — a code-editor-themed design where the
  navigation is styled as open editor tabs and the hero is a syntax-highlighted
  "profile object."
- **Backend:** Node.js + Express — a single `/api/contact` endpoint that emails you
  when someone submits the contact form. No database required.

All of your resume content (name, projects, skills, links) lives in one file:
`frontend/src/data/content.js`. Edit that file and the whole site updates.

---

## 1. Project structure

```
portfolio/
├── frontend/          React + Vite + Tailwind app
│   ├── public/
│   │   └── resume.pdf         ← your resume, served as a download
│   └── src/
│       ├── data/content.js    ← EDIT YOUR INFO HERE
│       ├── components/        UI sections (Hero, About, Skills, etc.)
│       └── ...
└── backend/           Express API (contact form → email)
    ├── routes/contact.js
    ├── utils/mailer.js
    └── server.js
```

---

## 2. Run it locally

You need [Node.js](https://nodejs.org/) 18+ installed.

### Backend (do this first)

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and fill in:
- `SMTP_USER` / `SMTP_PASS` — your email + an **app password** (not your normal
  password). For Gmail: turn on 2FA, then generate one at
  https://myaccount.google.com/apppasswords
- `CONTACT_TO_EMAIL` — where you want messages delivered (can be the same as `SMTP_USER`)

Then start it:

```bash
npm run dev
```

It runs on `http://localhost:5000`.

### Frontend

```bash
cd frontend
npm install
cp .env.example .env   # defaults already point at localhost:5000, no edit needed locally
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Fill out the contact
form to test end-to-end email delivery.

---

## 3. Customize your content

Open `frontend/src/data/content.js`. Everything on the site is driven from here:

- `profile` — name, role, contact links, resume path
- `about` — summary, education, bootcamp/training
- `stats` — the four numbers in the About section
- `skills` — grouped by category (languages/frontend/backend/tools)
- `projects` — add a `live` URL once a project is deployed; `github` links to your repo
- `testimonials` — **currently placeholders** — replace with real quotes when you have them
- `achievements` — bullet list under About

To replace your resume file, just overwrite `frontend/public/resume.pdf` with a new one
(keep the same filename, or update `resumeUrl` in `content.js` to match).

---

## 4. Deploy

**Frontend (e.g. Vercel or Netlify):**
1. Push the `frontend/` folder to GitHub.
2. Import it into Vercel/Netlify. Build command: `npm run build`. Output dir: `dist`.
3. Set an environment variable `VITE_API_URL` to your deployed backend's URL.

**Backend (e.g. Render or Railway):**
1. Push the `backend/` folder to GitHub.
2. Create a new Web Service, root directory `backend`, start command `npm start`.
3. Set the environment variables from `.env.example` (`SMTP_USER`, `SMTP_PASS`,
   `CONTACT_TO_EMAIL`, and `CORS_ORIGIN` — set this to your deployed frontend's URL,
   e.g. `https://your-portfolio.vercel.app`).

Once both are live, update `VITE_API_URL` in the frontend's environment variables to
point at the deployed backend, then redeploy the frontend.

---

## 5. Notes

- The contact form is rate-limited to 5 submissions per 15 minutes per IP to prevent spam.
- No database is used — messages go straight to your inbox via email. If you later
  want to store messages too, add MongoDB and a `Message` model in `backend/`.
- Testimonials are placeholders — swap them for real ones before sharing the link widely.

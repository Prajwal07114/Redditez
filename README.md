# 🚀 Reddit Clone

A **Reddit-inspired clone** built with **React (Vite + TypeScript)** on the frontend and **Firebase + PostgreSQL** for backend services.  
This project allows users to authenticate, create posts, and interact in a Reddit-style environment.  

---

## ✨ Features
- 🔑 **Authentication** (Firebase Auth)
- 📝 **Create Posts** (text/image-based posts)
- 📂 **Post Storage** with PostgreSQL
- 🌐 **Responsive UI** built with React + TypeScript
- ⚡ **Fast Build Setup** with Vite
- 🔒 **Context API** for global state management
- 🎨 Styled with **Tailwind CSS** (if added)

---

## 🛠 Tech Stack

**Frontend**  
- React (TypeScript + Vite)  
- Context API for state management  
- Tailwind CSS (if used for styling)  

**Backend / Database**  
- Firebase Authentication  
- PostgreSQL for post storage & relational data  

**Tools**  
- ESLint for linting  
- Git + GitHub for version control  

---



## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/reddit-clone.git
cd reddit-clone

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the root directory and add:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

DATABASE_URL=your_postgresql_url

4. Run the development server
npm run dev


🚀 Deployment

Frontend can be deployed on Vercel or Netlify.

Backend/PostgreSQL can be hosted on Supabase, Heroku, or Render.

Firebase Authentication works seamlessly in both dev and prod.

🤝 Contribution

Fork the repo

Create a new branch (feature/your-feature)

Commit your changes

Push to your branch

Create a Pull Request

# TaskVerse

TaskVerse is a full-stack project management and team collaboration tool. It allows admins, team leaders, and team members to manage teams, assign tasks, track progress, and collaborate efficiently.

## Project Structure

```
backend1/
  controllers/
  middleware/
  models/
  routes/
  services/
  config/
  server.js
  package.json
  .env
frontend1/
  public/
  src/
  package.json
  .env (to be created)
```

## Features

- User authentication (Admin, Team Leader, Team Member)
- Team creation and management
- Task assignment and status tracking
- Admin dashboard for user, team, and task management
- Email notifications for team and task events
- Analytics and progress charts

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB Atlas account (or local MongoDB)
- Gmail account for email notifications (or update email service config)

---

## Backend Setup

1. **Install dependencies:**

   ```
   cd backend1
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in `backend1/`:

   ```
   DB_USER=your_mongodb_user
   DB_PASS=your_mongodb_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   ```

3. **Start the backend server:**

   ```
   npm start
   ```

   The backend will run on `http://localhost:5000` by default.

---

## Frontend Setup

1. **Install dependencies:**

   ```
   cd frontend1
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in `frontend1/`:

   ```
   REACT_APP_BACKEND_URL=https://your-backend-domain.com
   ```

   For local development, use:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

3. **Update API files to use the environment variable**  
   (Already suggested in previous steps.)

4. **Start the frontend:**

   ```
   npm start
   ```

   The frontend will run on `http://localhost:3000` by default.

---

## Deployment

### Backend

- Deploy the backend to [Render](https://render.com/), [Vercel](https://vercel.com/), or [Heroku](https://heroku.com/).
- Update the frontend `.env` with your deployed backend URL.

### Frontend

- Deploy the frontend to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
- Make sure the `REACT_APP_BACKEND_URL` in `.env` points to your deployed backend.

---

## Usage

- Sign up as Admin, Team Leader, or Team Member.
- Admins can manage all users, teams, and tasks.
- Team Leaders can create teams, assign tasks, and track progress.
- Team Members can view and update their assigned tasks.

---

## License

This project is for educational purposes.

---

## Authors

- Ankit Saini
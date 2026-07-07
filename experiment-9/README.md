# Experiment 9: Login System

Create Login credentials using ReactJS and NodeJS. Upon successful login display "Login Success" otherwise "Login Failed" using MongoDB.

## Requirements
- Node.js (v18+)
- npm
- MongoDB (running on port 27017)

## Setup & Install

This project has two parts: a backend and a frontend.

### 1. Backend Setup
```bash
cd backend
npm install
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

## How to Run

1. **Start MongoDB**:
   ```bash
   mongod
   ```

2. **Start Backend Server**:
   Open a terminal and run:
   ```bash
   cd backend
   node server.js
   ```
   (Server runs on port 5000)

3. **Start Frontend (React)**:
   Open another terminal and run:
   ```bash
   cd frontend
   npm run dev
   ```
   (React app runs on port 5173/5174)

## Usage

1. **Create User**:
   Open `http://localhost:5000/createuser` in a browser. This creates an initial user in MongoDB:
   - Username: `admin`
   - Password: `1234`

2. **Login**:
   Open the React app URL (e.g., `http://localhost:5173`), enter `admin` and `1234`, and click Login. You should see "Login Success".

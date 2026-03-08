# Note-Taking-App

A full stack note-taking application built with React, Node.js, Express, and MongoDB.

## Features
- Create notes
- Edit notes
- Delete notes
- View all notes
- Search notes by title
- Responsive UI with Tailwind CSS

## Tech Stack
Frontend: React 
Styling: Tailwind CSS
Backend: Node.js + Express.js  
Database: MongoDB
Notifications: React Hot Toast

## Project Structure
Note-Taking-App
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── index.js
│   └── package.json
│
├── README.md
└── .gitignore

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/Kalmid/Note-Taking-App.git

### 2. Install dependencies

Client
cd client
npm install

Server
cd server
npm install

### 3. Create environment variables
Create a `.env` file inside the server folder.

Example:

PORT=5000
DB_URL=your_mongodb_connection


### 4. Run the project

Start backend
cd server
npm start

Start frontend
cd client
npm run dev

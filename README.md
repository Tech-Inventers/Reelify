# 🎬 Movie Database - React Project 🍿

Welcome to our **cool** Movie Database project! This React application allows users to search for movies using the TMDB API.

## 🌟 Features
- 🔍 Search for any movie
- 🎥 View movie details (title, poster, rating)
- 📱 Responsive design
- ⚡ Fast performance

## 🛠️ Prerequisites
- Node.js v14+ [Download](https://nodejs.org/)
- npm/yarn
- TMDB API key [Get here](https://www.themoviedb.org/settings/api)

## 🚀 Quick Start

```bash
# 1. Clone repo
git clone https://github.com/yourusername/movie-db.git
cd movie-db

# 2. Install dependencies
cd client && npm install
cd ../server && npm install

# 3. Setup environment
echo "REACT_APP_TMDB_API_KEY=your_api_key_here" > .env

# 4. Run development servers
# Frontend (React):
cd ../client && npm start
# Backend (Express):
cd ../server && npm start

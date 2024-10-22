// backend/server4.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2015,
    description: "People spend their life in dreams rather than in real world",
    genre: "Sci-Fi",
    rating: 8.8,
    reviews: "Nice, Magnificient, Worth Watching",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2013,
    description: "In search for water on other exoplanets",
    genre: "Sci-Fi",
    rating: 9.2,
    reviews: "Nice, Could have been better, Worth Watching",
  },
  {
    id: 3,
    title: "Avengers : End Game",
    year: 2020,
    description:
      "Avengers gather up to save univers from one who want to destroy it",
    genre: "Sci-Fi",
    rating: 8.5,
    reviews: "Fabulous, Magnificient, Worth Watching",
  },
  {
    id: 4,
    title: "The Pursuit of Happyness",
    year: 2010,
    description: "A man's struggle to life",
    genre: "Drama",
    rating: 9.8,
    reviews: "Nice, Magnificient, Worth Watching",
  },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Movie Database server running on http://localhost:${port}`);
});

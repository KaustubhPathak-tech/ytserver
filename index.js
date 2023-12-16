const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");
const app = express();
dotenv.config();
const port = 8080;
app.use(cors());
app.get("/", (req, res) => res.send("My YT server!"));

app.get("/api", async (req, res) => {
  const apiKey = process.env.YT_API_KEY;

  const videoId = req.query.q; // Replace this with the actual video ID you want to search

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;
  const response = await axios.get(apiUrl);
  res.json(response.data);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

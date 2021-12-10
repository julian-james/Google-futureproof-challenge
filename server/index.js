const express = require("express");
const movieRoutes = require("./controllers/genre");
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;
const cors = require('cors');

app.get("/", (req, res) => {
    res.send("Welcome to movie search");
});

app.use("/genres", movieRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.use(cors());
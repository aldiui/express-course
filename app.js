const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
});

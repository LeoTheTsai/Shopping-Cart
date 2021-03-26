import express from 'express';
import data from "./data";


const app = express();
const cors =  require("cors");
app.use(cors());


app.get("/api/Items", (req, res) => {
    res.send(data.items);
})

module.exports = app;
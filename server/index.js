require("dotenv").config(); 

const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/mongoConnecton"); 
const menuRouter = require("./routes/menuRouter");
const itemRouter = require("./routes/itemRouter");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/menu", menuRouter);
app.use("/item", itemRouter);

const PORT = process.env.PORT || 9000; 

app.get("/", (req, res) => {
    res.send("Welcome to the Deep Net Soft Machine Test");
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

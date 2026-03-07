const express = require("express");
const connectDb = require("./connection");
require("dotenv").config();
const noteRoutes = require("./routes/noteRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

//db connection
connectDb(process.env.DB_URL);

//middleware
app.use(express.json());
app.use("/", noteRoutes);

app.get("/", (req,res)=>{
    res.send("Hello World!");
});

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
});
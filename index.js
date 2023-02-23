import express from "express";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://0.0.0.0:27017/UserCRUDyoutubedb") //0.0.0.0:27017 new version , old localhost:27017
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

app.use(express.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

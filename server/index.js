import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import dotenv from "dotenv"

import recipeGenerationRoutes from "./routes/recipeGeneration.js"

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin: `${process.env.CLIENT_URL}`, credentials: true}));

app.use("/gen-recipe", recipeGenerationRoutes)

app.get("/", (req, res) => {
    res.json({"running": "true"});
})

app.listen(PORT, () => {
    console.log(`App is now listening on port ${PORT}`);
})
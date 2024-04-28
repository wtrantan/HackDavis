import express from "express";
import { generateRecipe } from "../controllers/recipegeneration.js";

const router = express.Router();

router.post("/", generateRecipe);

export default router;

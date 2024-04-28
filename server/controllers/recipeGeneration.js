import OpenAI from "../requests/openai.js";

export const generateRecipe = async (req, res) => {
    const ingredients = req.body.ingredients;

    const openAI = new OpenAI(process.env.OPENAI_API_KEY);
    const recipe = await openAI.getRecipeGeneration(ingredients, 1);

    // save recipe into User


    res.status(200).json({context: recipe});
}
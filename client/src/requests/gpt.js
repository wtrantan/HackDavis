export const generateRecipe = async (ingredients) => {
    if (ingredients) {

        console.log(ingredients);
        const recipeRecommendationRes = await fetch(
            "http://localhost:3001/gen-recipe/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ingredients
                }),
            }
        );

        const recipeRecommendation = (await recipeRecommendationRes.json()).context;
        return recipeRecommendation;
    }
};

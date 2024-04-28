export const generateRecipe = async (ingredients) => {
    if (ingredients) {
        let ingredientsList = ingredients.map((ingredient) => {
            return ingredient.ingredientName + " " + ingredient.quantity + " " + ingredient.measurementUnit;
        })

        console.log(ingredients);
        const recipeRecommendationRes = await fetch(
            "http://localhost:3001/gen-recipe/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ingredients: ingredientsList
                }),
            }
        );

        const recipeRecommendation = (await recipeRecommendationRes.json()).context;
        return recipeRecommendation;
    }
};

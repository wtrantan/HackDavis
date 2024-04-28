export const generateRecipe = async (ingredients) => {
    if (ingredients) {
        let ingredientsString = ingredients.map((ingredient) => {
            return ingredient.ingredientName + " " + ingredient.quantity + " " + ingredient.measurementUnit;
        })

        ingredientsString = ingredientsString.join('\n');

        console.log(ingredientsString);
        const recipeRecommendationRes = await fetch(
            "http://localhost:3001/gen-recipe/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ingredients: ingredientsString
                }),
            }
        );

        const recipeRecommendation = (await recipeRecommendationRes.json()).context;
        return recipeRecommendation;
    }
};

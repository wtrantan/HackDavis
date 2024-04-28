const OpenAI = require("../requests/openai.js");
const { parseGPTResponse } = require("../util/parseText.js");

const generateRecipe = async (req, res) => {
    const ingredients = req.body.ingredients;

    console.log(ingredients);

    const openAI = new OpenAI(process.env.OPENAI_API_KEY);
    const recipe = await openAI.getRecipeGeneration(ingredients, 1);
    // save recipe into User'

    // const recipe = "Duck and Chicken Pate with Mostarda\n\n1. Preheat the oven to 350°F (175°C).\n2. In a large mixing bowl, combine the flour, kosher salt, butter, and egg yolks. Mix until a dough forms.\n3. Roll out the dough on a floured surface and line a baking dish. Bake for 15 minutes to make the crust.\n4. In a skillet, heat olive oil and sauté the diced yellow onion until soft.\n5. Add diced duck breast, chicken thighs, and chicken livers to the skillet. Cook until browned.\n6. Stir in thyme, anise seeds, dried porcini mushroom, freshly ground pepper, fennel pollen, insta cure, and gelatin.\n7. Pour in chicken stock and simmer until the meat is cooked through.\n8. Remove from heat and blend the mixture until smooth. Let it cool slightly.\n9. Pour the mixture onto the baked crust and refrigerate for 2 hours until set.\n10. Serve the pate with sliced king trumpet mushrooms and mostarda on the side.\n\nEstimated calories: 3200 calories\nIngredients:\n- 18 cups flour\n- 3 tbsp kosher salt\n- 4 tbsp butter\n- 5 egg yolks\n- 2 tsp thyme\n- 0.5 tsp anise seeds\n- 1 dried porcini mushroom\n- 1 tsp freshly ground pepper\n- 0.5 tsp fennel pollen\n- 0.25 tsp insta cure (No. 1) pickling salt\n- 14 oz skinless duck breast meat\n- 8 oz boneless, skinless chicken thighs\n- 5 oz chicken livers\n- 1 tbsp olive oil\n- 0.5 oz medium yellow onion\n- 2 king trumpet mushrooms\n- 1.5 tbsp unflavored powdered gelatin\n- 2 cups chicken stock\n- 1 mostarda"

    console.log(recipe);
    const recipeParsed = parseGPTResponse(recipe);


    res.status(200).json({context: recipeParsed});
}

module.exports = { generateRecipe }
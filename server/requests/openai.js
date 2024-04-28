
const { Configuration, OpenAIApi } = require("openai");
// import { parseLineSeparatedList } from "../util/parseText.js";

class OpenAI {
  constructor(apiKey) {
    const configuration = new Configuration({
      apiKey
    });
    this.openai = new OpenAIApi(configuration);
  }

  /*
   * parameters:
   * ingredients: array of Objects: ingredients
   * temperature: temperature of GPT response
   */
  async getRecipeGeneration(ingredients, temperature) {
    try {
      if (ingredients.length !== 0) {
        let ingredientsString = ""
        for (let i = 0; i < ingredients.length; i++) {
            if (i !== ingredients.length - 1) {
                ingredientsString += `${ingredients[i].quanitity} ${ingredients[i].measurementUnit} ${ingredients[i].ingredientName}, `;
            } else {
                ingredientsString += `${ingredients[i].quanitity} ${ingredients[i].measurementUnit} ${ingredients[i].ingredientName}`;
            }
            
        }

        let gptSystemContent = 
        `Your task is to generate a recipe using some or all of the ingredients provided.` + 
        `Please provide the name of the recipe ONLY, and format the steps of the recipe in an ordered list. ` +
        `Finally, on the last part of the response, provide an estimated amount of calories with a number ONLY, along with all the ingredients used in the recipe + amount used in the format: quanitity, measurementUnit, ingredientName`;
  
        let gptUserContent = ingredientsString;
  
        console.log(gptUserContent);
        
        const response = await this.openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              "role": "system",
              "content": gptSystemContent
            },
            {
              "role": "user",
              "content": gptUserContent
            }
          ],
          temperature
        });
  
        let content = response.data.choices[0].message.content;
        console.log(content);
        return content
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = OpenAI;




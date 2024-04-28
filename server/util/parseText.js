// removes the new lines

const parseGPTResponse = (response) => {
    let lineSeparatedResponse = response.split("\n");
    let recipeName = lineSeparatedResponse[0];
    let recipes = [];
    let calories;
    let ingredientsUsed = [];

    let emptyCounter = 0;
    let afterCalories = false;
    for (let i = 1; i < lineSeparatedResponse.length; i++) {
        if (lineSeparatedResponse === "") {
            emptyCounter++;
        } else if (emptyCounter < 2){
            recipes.push(lineSeparatedResponse[i].match(/\w+\s(.*)/)[0])
        } else if (emptyCounter === 2){
            calories = lineSeparatedResponse.match(/[\d]/)[0];
            afterCalories = true;
        }

        if (afterCalories) {
            ingredientsUsed = lineSeparatedResponse.slice(i + 2);
            i = lineSeparatedResponse.length;
        }
    }

    ingredientsUsed.map((ingredient) => {
        let ingredientParsed = ingredient.match(/\s(.*)/)[0];
        let quantity;
        let measurementUnit;
        let ingredientName;
        let info = [];
        let startIndex = 0;
        for (let i = 0; i < ingredientParsed.length; i++) {
            if (ingredientParsed[i] === " ") {
                info.push(ingredientParsed.slice(startIndex, i));
                startIndex = i + 1;
            }
        }
        info.push(ingredientParsed.slice(startIndex));
        quantity = info[0];
        measurementUnit = info[1];
        ingredientName = info[2];
        return { quantity, measurementUnit, ingredientName }
    })

    return {
        recipeName,
        ingredientsUsed,
        calories
    }

}

const removeListNumber = (text) => {
    return text.substring(text.indexOf(".") + 1).trim();

}


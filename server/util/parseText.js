// removes the new lines

const parseGPTResponse = (response) => {
    let lineSeparatedResponse = response.split("\n");
    let recipeName = lineSeparatedResponse[0];
    let steps = [];
    let calories;
    let ingredientsUsed = [];

    let afterCalories = false;
    for (let i = 2; i < lineSeparatedResponse.length; i++) {
        if (lineSeparatedResponse[0] !== '') {
            if (isNumeric(lineSeparatedResponse[i].charAt(0))){
                if (lineSeparatedResponse[i].match(/\w+\s(.*)/))
                steps.push(lineSeparatedResponse[i].match(/\w+\s(.*)/)[0])
            } else {
                calories = Number(lineSeparatedResponse[i].match(/\d+/));
                afterCalories = true;
            }
        } 

        if (afterCalories) {
            ingredientsUsed = lineSeparatedResponse.slice(i + 2);
            i = lineSeparatedResponse.length;
        }
    }

    ingredientsUsed = ingredientsUsed.map((ingredient) => {
        let quantity;
        let measurementUnit;
        let ingredientName;
        let info = [];
        let startIndex = 0;
        let lastSpaceIndex = 0;
        let found = 0;
        for (let i = 0; i < ingredientParsed.length; i++) {
            
            if (ingredientParsed[i] === " " && found < 2) {
                info.push(ingredientParsed.slice(startIndex, i));
                startIndex = i + 1;
                found++;
            }
            if (ingredientParsed[i] === " ") {
                lastSpaceIndex = i;
            }
        }
        info.push(ingredientParsed.slice(startIndex));
        quantity = Number(info[0]);
        measurementUnit = info[1];
        ingredientName = info[2];
        return { quantity, measurementUnit, ingredientName }
    })

    return {
        recipeName,
        steps,
        ingredientsUsed,
        calories,
    }

}

const isNumeric = (str) => {
  return !isNaN(str)
}

const removeListNumber = (text) => {
    return text.substring(text.indexOf(".") + 1).trim();
}

module.exports = { parseGPTResponse, removeListNumber };


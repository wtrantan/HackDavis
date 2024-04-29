import "./App.css";
import * as React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

const testIngredients = [
    {
        id: 1,
        ingredientName: "flour",
        quantity: 18,
        measurementUnit: "cups",
    },
    {
        id: 2,
        ingredientName: "kosher salt",
        quantity: 3,
        measurementUnit: "tbsp",
    },
    {
        id: 3,

        ingredientName: "butter",
        quantity: 4,
        measurementUnit: "tbsp",
    },
    {
        id: 4,

        ingredientName: "egg yolks",
        quantity: 5,
        measurementUnit: "",
    },
    {
        id: 5,

        ingredientName: "thyme",
        quantity: 2,
        measurementUnit: "tsp",
    },
    {
        id: 6,

        ingredientName: "anise seeds",
        quantity: 0.5,
        measurementUnit: "tsp",
    },
    {
        id: 7,

        ingredientName: "dried porcini mushroom",
        quantity: 1,
        measurementUnit: "",
    },
    {
        id: 8,

        ingredientName: "freshly ground pepper",
        quantity: 1,
        measurementUnit: "tsp",
    },
    {
        id: 9,

        ingredientName: "fennel pollen",
        quantity: 0.5,
        measurementUnit: "tsp",
    },
    {
        id: 10,

        ingredientName: "insta cure (No. 1) pickling salt",
        quantity: 0.25,
        measurementUnit: "tsp",
    },
    {
        id: 11,

        ingredientName: "skinless duck breast meat",
        quantity: 14,
        measurementUnit: "oz",
    },
    {
        id: 12,

        ingredientName: "boneless, skinless chicken thighs",
        quantity: 8,
        measurementUnit: "oz",
    },
    {
        id: 13,

        ingredientName: "chicken livers",
        quantity: 5,
        measurementUnit: "oz",
    },
    {
        id: 14,

        ingredientName: "olive oil",
        quantity: 1,
        measurementUnit: "tbsp",
    },
    {
        id: 15,

        ingredientName: "medium yellow onion",
        quantity: 0.5,
        measurementUnit: "oz",
    },
    {
        id: 16,

        ingredientName: "king trumpet mushrooms",
        quantity: 2,
        measurementUnit: "",
    },
    {
        id: 17,

        ingredientName: "unflavored powdered gelatin",
        quantity: 1.5,
        measurementUnit: "tbsp",
    },
    {
        id: 18,

        ingredientName: "chicken stock",
        quantity: 2,
        measurementUnit: "cups",
    },
    {
        id: 19,

        ingredientName: "mostarda",
        quantity: 1,
        measurementUnit: "",
    },
];

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [ingredients, setIngredients] = useState(testIngredients);
    const [recipes, setRecipes] = useState([]);

    const handleLogout = () => {

        setIsLoggedIn(false);
    };
    const handleLogin = (user, pass) => {
        if (user === "William" && pass === "Trantan") {
            setIngredients([]);
            setRecipes([]);
        }
        setIsLoggedIn(true);

    };

    //add ingredients for specific user later
    const addUserIngredients = (ingredientName, quantity, measurementUnit) => {
        ingredients.push({ id: uuidv4(), ingredientName, quantity, measurementUnit });
        console.log(ingredients);
    };

    const deleteIngredient = (id) => {
        console.log(id);
        setIngredients(ingredients.filter((ingredient) => {
            return (ingredient.id) !== (id);
        }))
    }

    const addNewRecipe = (recipe) => {
        recipes.push(recipe);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        ingredients={ingredients}
                        addUserIngredients={addUserIngredients}
                        addNewRecipe={addNewRecipe}
                        recipes={recipes}
                        deleteIngredient={deleteIngredient}
                    />
                }
            />
            <Route path="/about" element={<About />} />
            <Route
                path="/login"
                element={
                    <Login
                        handleLogin={handleLogin}
                        handleLogout={handleLogout}
                    />
                }
            />
        </Routes>
    );
}

export default App;

import "./App.css";
import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

const testIngredients = [
    {
        "ingredientName": "flour",
        "quantity": 18,
        "measurementUnit": "cups"
    },
    {
        "ingredientName": "kosher salt",
        "quantity": 3,
        "measurementUnit": "tbsp"
    },
    {
        "ingredientName": "butter",
        "quantity": 4,
        "measurementUnit": "tbsp"
    },
    {
        "ingredientName": "egg yolks",
        "quantity": 5,
        "measurementUnit": ""
    },
    {
        "ingredientName": "thyme",
        "quantity": 2,
        "measurementUnit": "tsp"
    },
    {
        "ingredientName": "anise seeds",
        "quantity": 0.5,
        "measurementUnit": "tsp" 
    },
    {
        "ingredientName": "dried porcini mushroom",
        "quantity": 1,
        "measurementUnit": "" 
    },
    {
        "ingredientName": "freshly ground pepper",
        "quantity": 1,
        "measurementUnit": "tsp"
    },
    {
        "ingredientName": "fennel pollen",
        "quantity": 0.5,
        "measurementUnit": "tsp"
    },
    {
        "ingredientName": "insta cure (No. 1) pickling salt",
        "quantity": 0.25,
        "measurementUnit": "tsp"
    },
    {
        "ingredientName": "skinless duck breast meat",
        "quantity": 14,
        "measurementUnit": "oz"
    },
    {
        "ingredientName": "boneless, skinless chicken thighs",
        "quantity": 8,
        "measurementUnit": "oz"
    },
    {
        "ingredientName": "chicken livers",
        "quantity": 5,
        "measurementUnit": "oz"
    },
    {
        "ingredientName": "olive oil",
        "quantity": 1,
        "measurementUnit": "tbsp"
    },
    {
        "ingredientName": "medium yellow onion",
        "quantity": 0.5,
        "measurementUnit": "oz"
    },
    {
        "ingredientName": "king trumpet mushrooms",
        "quantity": 2,
        "measurementUnit": ""
    },
    {
        "ingredientName": "unflavored powdered gelatin",
        "quantity": 1.5,
        "measurementUnit": "tbsp"
    },
    {
        "ingredientName": "chicken stock",
        "quantity": 2,
        "measurementUnit": "cups"
    },
            {
        "ingredientName": "mostarda",
        "quantity": 1,
        "measurementUnit": ""
    }
]

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [ingredients, setIngredients] = useState(testIngredients);
    const [recipes, setRecipes] = useState([]);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    //add ingredients for specific user later
    const addUserIngredients = (ingredientName, quantity, measurementUnit) => {
        ingredients.push({ ingredientName, quantity, measurementUnit})
    }

    const addNewRecipe = (recipe) => {
        recipes.push(recipe);
    }

    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home ingredients={ingredients} addUserIngredients={addUserIngredients} addNewRecipe={addNewRecipe} recipes={recipes}/>}/>
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
        </BrowserRouter>
    );
}

export default App;

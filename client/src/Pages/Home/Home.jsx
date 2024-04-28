import Navbar from "../../Components/Navbar/Navbar.jsx";
import "./Home.css";

import fridgeOpen from "../../assets/images/fridge_open.png";
import fridgeClosed from "../../assets/images/fridge_closed.png";
import karinaStir from "../../assets/images/KarinaStir.gif";
import karinaStir1 from "../../assets/images/KarinaStir_1.gif"
import karinaDance from "../../assets/images/karinaDance.gif";
import karinaH from "../../assets/images/karinaHeart.png";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { generateRecipe } from "../../requests/gpt.js";

const testIngredients = [];

const Home = (props) => {
    const [isAddingIngredients, setIsAddingIngredients] = useState(false);
    const [fridgeOpened, setFridgeOpened] = useState(false);
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [ingredientUnits, setIngredientUnits] = useState("");
    const [isBrewing, setIsBrewing] = useState(false);
    

    const addNewIngredient = () => {
        setIngredientName("");
        setIngredientQuantity("");
        setIngredientUnits("");
        if (ingredientName !== "" && ingredientQuantity !== "" && ingredientUnits !== "") {
            const ingredientQuantityNum = Number(ingredientQuantity)
            props.addUserIngredients(ingredientName, ingredientQuantityNum, ingredientUnits);
        }
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    const brew = async () => {
        setIsBrewing(true);
        const newRecipe = await generateRecipe(props.ingredients);
        await delay(5000);
        props.addNewRecipe(newRecipe);
        console.log(newRecipe);
        setIsBrewing(false);
    }

    return (
        <div id="HomePage">
            <Navbar isLoggedIn={true} />
            <div id="main-area">
                <div id="inventory">
                    <h1>Fridge</h1>
                    {fridgeOpened ? (
                        <img
                            onClick={() => setFridgeOpened((prev) => !prev)}
                            className="openedFridge"
                            alt="opened fridge"
                            src={fridgeOpen}
                        />
                    ) : (
                        <img
                            onClick={() => setFridgeOpened((prev) => !prev)}
                            className="closedFridge"
                            alt="closed fridge"
                            src={fridgeClosed}
                        />
                    )}
                </div>
                {fridgeOpened && (
                    <>
                        <div className="ingredients">
                            {props.ingredients.map((ingredient, index) => {
                                return (
                                    <p
                                        key={index}
                                    >{`${ingredient.quantity} ${ingredient.measurementUnit} ${ingredient.ingredientName} `}</p>
                                );
                            })}
                        </div>
                        <button
                            className="addIngredientsButton"
                            onClick={() => setIsAddingIngredients(true)}
                        >
                            Add Ingredients
                        </button>
                    </>
                )}

                {isAddingIngredients && (
                    <div className="addIngredientsPopup">
                        <div className="ingredientForm">
                            <label>Ingredient Name</label>
                            <input className="ingredientInput" onChange={(e) => setIngredientName(e.target.value)} value={ingredientName} type="text"></input>
                        </div>
                        <div className="ingredientForm">
                            <label>Quantity</label>
                            <input className="ingredientInput" onChange={(e) => {setIngredientQuantity(e.target.value)}} type="text"></input>
                        </div>
                        <div className="ingredientForm">
                            <label>Units</label>
                            <input className="ingredientInput" onChange={(e) => setIngredientUnits(e.target.value)} value={ingredientUnits}type="text"></input>
                        </div>
                        <button className="submitIngredientButton" onClick={() => {addNewIngredient()}}>Submit Ingredient</button>
                        <div className="closeIcon" onClick={() => setIsAddingIngredients(false)}>
                            <CloseIcon color="white" fontSize="large"/>
                        </div>
                    </div>
                )}

                {isAddingIngredients && <div className="darkOverlay"></div>}

                <div id="recipes">
                    <h1>My Recipes</h1>
                    <div className="list">
                        {props.recipes.map((recipe, index) => {
                            return (
                                <div key={index} className="individualRecipe" key={index}>
                                    <h1 key={index} >{recipe.recipeName}</h1>
                                    {recipe.steps.map((step) => {
                                        return <p className="step">{step}</p>
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div id="Home-btn">
                    <button id="brewButton" onClick={() => {brew()}}>Brew Something New</button>
                </div>

                {isBrewing && (
                    <div className="addRecipePopup">
                        <div className="closeIcon" onClick={() => setIsBrewing(false)}>
                            <CloseIcon color="white" fontSize="large"/>
                        </div>
                    </div>
                )}

                {isBrewing && <div className="darkOverlayBrew"></div>}
                {isBrewing && <div className="karinaStir"><img src={karinaStir1}/></div>}


                <div id="karina">
                    <div>

                    </div>
                    <img className="" src={karinaH}></img>

                </div>
            </div>
        </div>
    );
};
export default Home;

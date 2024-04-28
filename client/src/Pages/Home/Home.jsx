import Navbar from "../../Components/Navbar/Navbar.jsx";
import "./Home.css";

import fridgeOpen from "../../assets/images/fridge_open.png";
import fridgeClosed from "../../assets/images/fridge_closed.png";
import karinaStir from "../../assets/images/KarinaStir.gif";
import karinaDance from "../../assets/images/karinaDance.gif";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const testIngredients = [];

const Home = (props) => {
    const [isAddingIngredients, setIsAddingIngredients] = useState(false);
    const [fridgeOpened, setFridgeOpened] = useState(false);
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [ingredientUnits, setIngredientUnits] = useState("");
    

    const addNewIngredient = () => {
        setIngredientName("");
        setIngredientQuantity("");
        setIngredientUnits("");
        if (ingredientName !== "" && ingredientQuantity !== "" && ingredientUnits !== "") {
            const ingredientQuantityNum = Number(ingredientQuantity)
            props.addUserIngredients(ingredientName, ingredientQuantityNum, ingredientUnits);
        }
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

                {isAddingIngredients && <div className="darkOverlay">s</div>}

                <div id="recipes">
                    <h1>My Recipes</h1>
                </div>
                <div id="brewButtons">
                    <button id="brewButton">Brew Something New</button>
                </div>
                <div id="karina">
                    <div></div>
                    <img className="" src={karinaDance}></img>
                </div>
            </div>
        </div>
    );
};
export default Home;

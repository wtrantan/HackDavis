import Navbar from "../../Components/Navbar/Navbar.jsx";
import "./Home.css";

import fridgeOpen from "../../assets/images/fridge_open.png";
import fridgeClosed from "../../assets/images/fridge_closed.png";
import karinaStir from "../../assets/images/KarinaStir.gif";
import karinaDance from "../../assets/images/karinaDance.gif";
import { useState } from "react";

const testRecipes = [
    {
        recipeName: ""
    }
]

const Home = () => {
    const [fridgeOpened, setFridgeOpened] = useState("false");

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
                <div id="recipes">
                    <h1>My Recipes</h1>
                </div>
                <div id="brewButtons">
                    <button id="brewButton">Brew Something New</button>
                </div>
                <div id="karina">
                    <div>

                    </div>
                    <img className="" src={karinaDance}></img>

                </div>
            </div>
        </div>
    );
};
export default Home;

import Navbar from "../../Components/Navbar/Navbar.jsx";
import "./Home.css";

import fridgeOpen from "../../assets/images/fridge_open.png";
import fridgeClosed from "../../assets/images/fridge_closed.png";

import { useState } from "react";

const Home = () => {
    const [fridgeOpened, setFridgeOpened] = useState("false");

    return (
        <div id="HomePage">
            <Navbar isLoggedIn={true} />
            <div id="main-area">
                <div id="inventory">
                    {fridgeOpened ? <img onClick={() => setFridgeOpened((prev) => !prev)} className="openedFridge" alt="opened fridge" src={fridgeOpen}/> : <img onClick={() => setFridgeOpened((prev) => !prev)} className="closedFridge" alt="closed fridge" src={fridgeClosed}/>}
                </div>
                <div id="recipes"></div>
                <div id="brewButtons">
                    <button id="brewButton">Brew Something New</button>
                </div>
            </div>
        </div>
    );
};
export default Home;

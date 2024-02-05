import React from "react";
import { getStartPageGames } from "../rawgService";
import GameList from "./GameList";
import '../StartPage.css'

const StartPage: React.FC = () => {
    const renderInput = () => null;

    return (
        <div>
            <h1 className="page-text">Welcome to Game Tracker.</h1>
            <GameList fetchMethod={getStartPageGames} renderInput={renderInput} />
        </div>

    );

};

export default StartPage

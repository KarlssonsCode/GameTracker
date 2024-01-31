import React from "react";
import { getStartPageGames } from "../rawgService";
import GameList from "./GameList";
import '../StartPage.css'

const StartPage: React.FC = () => {
const renderInput = () => null;

    return (
        <GameList fetchMethod={getStartPageGames} renderInput={renderInput}/>

    );

};

export default StartPage

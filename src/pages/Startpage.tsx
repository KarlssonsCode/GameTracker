import React, { useState, useEffect } from "react";
import { getStartPageGames } from "../rawgService";
import '../StartPage.css'
import GameList from "./GameList";

const StartPage: React.FC = () => {
    

    return (
         <GameList fetchMethod={getStartPageGames} />
        
    );

};

export default StartPage

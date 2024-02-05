import React, { useState, useEffect } from "react";
import { getBacklogGames } from "../GameTrackerService";
import { getGameDetails } from "../rawgService";
import axios from "axios";
import GameList from "./GameList";
import '../StartPage.css'

const API_URL = "https://localhost:7279";

const Backlog: React.FC = () => {
  const [backlogGames, setBacklogGames] = useState<any[]>([]);
  const renderInput = () => null;

  const removeFromBacklog = async (gameId: number) => {
    try {
      const response = await axios.delete(`${API_URL}/Backlog/DeleteBacklogGame/${gameId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Axios Request:', response);
      
      if (response.status === 205) {
        console.log('Game removed from backlog successfully');

        
      } else {
        console.error('Error removing game from backlog');
      }
    } catch (error) {
      console.error('ERROR REMOVING GAME', error);

    };
    fetchBacklogGames();
  }


  const fetchBacklogGames = async () => {
    try {
      const backendBacklogGames = await getBacklogGames();
      const gameIds = backendBacklogGames.map((game) => game.gameId);
      const rawgGameData = await Promise.all(gameIds.map((gameId: any) => getGameDetails(gameId)));
      const combinedGames = backendBacklogGames.map((backlogGame: any, index: number) => ({
        ...backlogGame,
        rawgData: rawgGameData[index],
      }));
      setBacklogGames(combinedGames);
      console.log('COMBINEDGAMES', combinedGames)
    } catch (error) {
      console.error("Error fetching backlog games", error);
    }
  };

useEffect(() => {
  fetchBacklogGames();
}, []);


return (

  // <GameList fetchMethod={setBacklogGames} renderInput={renderInput} />

  <div>
    <h1>Backlog Page</h1>
    <ul className='gamepanel-container'>
      {backlogGames.map((game) => (
        <li key={game.id}>
          <div className='gamepanel'>
            <img src={game.rawgData.background_image} alt={game.name} />
            <p>{game.gameTitle}</p>
            <button className="remove-button" onClick={() => removeFromBacklog(game.rawgData.id)}>REMOVE FROM BACKLOG</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}


export default Backlog;
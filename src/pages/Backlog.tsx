import React, { useState, useEffect } from "react";
import { getBacklogGames } from "../GameTrackerService";
import { getGameDetails } from "../rawgService";


const Backlog: React.FC = () => {
    const [backlogGames, setBacklogGames] = useState<any[]>([]);

    
    useEffect(() => {
      const fetchBacklogGames = async () => {
          try {
              const backendBacklogGames = await getBacklogGames();
              const gameIds = backendBacklogGames.map((game: any) => game.gameId);
              const rawgGameData = await Promise.all(gameIds.map((gameId: any) => getGameDetails(gameId)));
              const combinedGames = backendBacklogGames.map((backlogGame: any, index: number) => ({
                ...backlogGame,
                rawgData: rawgGameData[index],
              }));
              setBacklogGames(combinedGames);
          } catch (error) {
              console.error("Error fetching backlog gmaes", error);
          }
      };
      fetchBacklogGames();
    }, []);

    return (
        <div>
      <h1>Backlog Page</h1>
      <ul>
        {backlogGames.map((game) => (
          <li key={game.id}>
            <p>{game.gameTitle}</p>
          </li>
        ))}
      </ul>
    </div>
    );
}


export default Backlog;
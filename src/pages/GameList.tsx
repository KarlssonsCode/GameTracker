import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://localhost:7279";


interface GameListProps {
    fetchMethod: (searchQuery: string) => Promise<any>;
    renderInput: (searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>>) => React.ReactNode;
}

const GameList: React.FC<GameListProps> = ({ fetchMethod, renderInput }) => {
    const [games, setGames] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleGames = async () => {
        try {
            const result = await fetchMethod(searchQuery);
            setGames(result.results);
        } catch (error) {
            console.error('ERROR FETCHING GAMES', error)
        }
    };

    const addToBacklog = async (gameId: number, userId: number, gameTitle: string) => {
        try {
            const response = await axios.post(`${API_URL}/Backlog/AddBacklogGames`, { gameId, userId, gameTitle },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Axios Request:', response);

            if (response.status === 200) {
                console.log('Game added to backlog successfully');
            } else {
                console.error('Error adding game to backlog');
            }
        } catch (error) {
            console.error('ERROR FETCHING GAMES', error);
        }
    };

    useEffect(() => {
        handleGames();
    }, [fetchMethod, searchQuery]);

    return (
        <div>
            {renderInput(searchQuery, setSearchQuery)}
            <ul className='gamecard-container'>
                {games.map((game) => (
                    <li key={game.id}>
                        <div className='gamecard' onClick={() => addToBacklog(game.id, 1, game.name)}>
                            <img src={game.background_image} alt={game.name} />
                            <p>{game.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {/* {selectedGame && (
                <div className="popup">
                    <div className="popup-inner">
                        <button onClick={handleClose}>Close</button>
                        <h2>{selectedGame.name}</h2>
                        <img src={selectedGame.background_image} alt={selectedGame.name} />
                        <button onClick={() => addToBacklog(selectedGame.id, 1, selectedGame.name)}>Add to Backlog</button>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default GameList;
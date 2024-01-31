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

    const addToBacklog = async (gameId: number) => {
        try {
            const response = await axios.post(`${API_URL}/Backlog/AddBacklogGames`, { gameId }, {
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
            <ul className='gamepanel-container'>
                {games.map((game) => (
                    <li key={game.id}>
                        <div className='gamepanel' onClick={() => addToBacklog(game.id)}>
                            <img src={game.background_image} alt={game.name} />
                            <p>{game.name}</p>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GameList;
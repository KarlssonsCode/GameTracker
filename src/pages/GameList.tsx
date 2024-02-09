import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://localhost:7279";

interface GameListProps {
    fetchMethod: (searchQuery: string) => Promise<any>;
    renderInput: (searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>>) => React.ReactNode;
}

const GameList: React.FC<GameListProps> = ({ fetchMethod, renderInput }) => {
    const [games, setGames] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedGame, setSelectedGame] = useState<any | null>(null);

    const handleGames = async () => {
        try {
            const result = await fetchMethod(searchQuery);
            setGames(result.results);
        } catch (error) {
            console.error('ERROR FETCHING GAMES', error)
        }
    };

    const handleGameClick = (game: any) => {
        setSelectedGame(game);
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
                        <Link to={`/game/${game.id}`}>
                            <div className='gamecard'>
                                <img src={game.background_image} alt={game.name} />
                                <p>{game.name}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GameList;

// onClick={() => handleGameClick(game)}
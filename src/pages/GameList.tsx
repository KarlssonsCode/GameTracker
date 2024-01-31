import React, {useState, useEffect} from "react";

interface GameListProps {
    fetchMethod: () => Promise<any>;
}

const GameList: React.FC<GameListProps> = ({ fetchMethod }) => {
    const [games, setGames] = useState<any[]>([]);

    const handleGames = async () => {
        try {
            const result = await fetchMethod();
            setGames(result.results);
        } catch (error) {
            console.error('ERROR FETCHING GAMES', error)
        }
    };

    useEffect(() => {
        handleGames();
    }, [fetchMethod]);

    return (
        <div>
            <ul className='gamepanel-container'>
                {games.map((game) => (
                    <li key={game.id}>
                        <div className='gamepanel'>
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
import React, {useState, useEffect} from "react";
import { getStartPageGames } from "../rawgService";
import './StartPage.css'

const StartPage: React.FC = () => {
    const [games, setGames] = useState<any[]>([]);

    const handleStartPageGames = async () => {
        try {
            const result = await getStartPageGames();
            setGames(result.results);
            console.log('RESULT FROM STARTPAGE GAMES', result)
        }
        catch (error) {
            console.error('ERROR STARTPAGE GAMES', error)
        }

    };

    useEffect(() => {
        handleStartPageGames();
    }, []);

    return (
        <div>
            <ul className="gamepanel-container">
            {games.map((game) => (
                    <li key={game.id}>
                        <div className="gamepanel">
                            <img src={game.background_image} alt={game.name} />
                            <h3>{game.name}</h3>
                            <button>Go To page</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );

};

export default StartPage

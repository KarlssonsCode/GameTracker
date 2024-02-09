import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { getGameDetails } from "../rawgService";
import "./GamePage.css"

const GamePage: React.FC = () => {
    const [game, setGame] = useState<any | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                if (id) { // Check if id is present
                    const gameDetails = await getGameDetails(parseInt(id));
                    setGame(gameDetails);
                }
            } catch (error) {
                console.error('ERROR FETCHING GAME DETAILS', error);
            }
        };

        fetchGameDetails();
    }, [id]);

    return (
        <div className="gamepage-container">
            {game && (
                <div className="gamepage">
                    <div>
                        <img className="main-image" src={game.background_image} alt={game.name} />
                        <button className="">Add to Backlog</button>
                    </div>
                    <h1 className="title">{game.name}
                        <p className="release-date">Release Date: {game.released}</p>
                        <p className="description">{game.description_raw}</p>
                        <p className="metacritic">Metacritic: {game.metacritic ? game.metacritic : `Couldn't find a Metacritic score for ${game.name}.`}</p>
                    </h1>
                </div>
            )}
        </div>
    );
};

export default GamePage;

import React, { useState } from 'react';
import { getSearchedGames } from '../rawgService'
import '../StartPage.css'



const GameSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [games, setGames] = useState<any[]>([]);

    const handleSearch = async () => {
        try {
            const result = await getSearchedGames(searchQuery);
            setGames(result.results);
            console.log('RESULT FROM SEARCH', result)
        }
        catch (error) {
            console.error('ERROR SEARCHING GAMES', error)
        }
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

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
    );
};

export default GameSearch;
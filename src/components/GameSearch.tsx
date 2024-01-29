import React, { useState } from 'react';
import { getGames } from '../rawgService'


const GameSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [games, setGames] = useState<any[]>([]);

    const handleSearch = async () => {
        try {
            const result = await getGames(searchQuery);
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

            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <div>
                            <img src={game.background_image} alt={game.name} style={{ maxWidth: '100px' }} />
                            <p>{game.name}</p>
                            <hr/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameSearch;
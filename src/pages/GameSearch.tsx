import React, { useState } from 'react';
import { getSearchedGames } from '../rawgService'
import '../StartPage.css'
import GameList from './GameList';



const GameSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchGames = async (query: string) => {
        return getSearchedGames(query);
    };

    const renderInput = (query: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>>) => (
        <div>
            <input type="text" placeholder='Search for games...' value={query} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    );

    return (
        <>
            <div>
                {renderInput(searchQuery, setSearchQuery)}
            </div>
            {searchQuery !== '' && (
                <GameList fetchMethod={handleSearchGames} renderInput={renderInput} />
            )}
        </>
    );
};

export default GameSearch;
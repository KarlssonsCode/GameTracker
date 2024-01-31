import React, { useState } from 'react';
import { getSearchedGames } from '../rawgService'
import '../StartPage.css'
import GameList from './GameList';



const GameSearch: React.FC = () => {

    const handleSearchGames = async (searchQuery: string) => {
        return getSearchedGames(searchQuery);
    };

    const renderInput = (searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>>) => (
        <div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={() => handleSearchGames(searchQuery)}>Search</button>
        </div>
    );

    return (
        <GameList fetchMethod={handleSearchGames} renderInput={renderInput} />
    );
};

export default GameSearch;
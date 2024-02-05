import axios from "axios";
import React, {useState} from "react";

interface BacklogGame {
    id: number;
    gameId: number;
    userId: number;
    gameTitle: string;
}

const API_URL = "https://localhost:7279";

export const getBacklogGames = async () => {
    try {
        const response = await axios.get<BacklogGame[]>(`${API_URL}/Backlog/GetBacklogGames`);
        console.log('BACKLOG GAMES SUCCESFULLY FETCHED',response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching backlog games', error);
        throw error;
    }
};


//     try {
//         const response = await axios.get(`${API_URL}/Backlog/GetBacklogGames`, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
            
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching backlog games', error);
//         throw error;
//     }
// };




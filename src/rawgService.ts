import axios from 'axios';

const RAWG_API_KEY = '723fc8d27cc1419ca3b6a5d9b8c74796';
const RAWG_API_URL = 'https://api.rawg.io/api/';

export const getSearchedGames = async (query: string): Promise<any> => {
    try {
        const response = await axios.get(`${RAWG_API_URL}games?key=${RAWG_API_KEY}&search=${query}`);
        console.log('GAMES FETCHED', response)
        return response.data;
    }
    catch (error) {
        console.error('ERROR FETCHING GAMES', error);
        throw error;
    }
}


export const getStartPageGames = async (): Promise<any> => {
    try {
        const response = await axios.get(`${RAWG_API_URL}games?key=${RAWG_API_KEY}&dates=2023-01-01,2023-12-31&ordering=-added`);
        console.log('START PAGE GAMES FETCHED', response)
        return response.data;
    }
    catch (error) {
        console.error('ERROR FETCHING START PAGE GAMES', error);
        throw error;
    }
}

export const getGameDetails = async (gameId: number)  => {
    try {
        const response = await axios.get(`${RAWG_API_URL}games/${gameId}?key=${RAWG_API_KEY}`, {      
        });
        console.log('getGameDetails games',response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching game details from RAWG', error);
        throw error;
    }
};



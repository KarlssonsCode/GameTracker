import axios from 'axios';

const RAWG_API_KEY = '4f2a92303a8f47fdb29f8b4acb97b77b';
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
        const response = await axios.get(`${RAWG_API_URL}games?key=${RAWG_API_KEY}`);
        console.log('START PAGE GAMES FETCHED', response)
        return response.data;
    }
    catch (error) {
        console.error('ERROR FETCHING START PAGE GAMES', error);
        throw error;
    }
}

export const getGameDetails = async (gameId: string) => {
    try {
        const response = await axios.get(`${RAWG_API_URL}/games/${gameId}`, {
            params: {
                key: RAWG_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching game details from RAWG', error);
        throw error;
    }
};

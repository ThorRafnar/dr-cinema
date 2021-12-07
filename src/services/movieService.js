import {getToken} from './tokenService';
import {BASE_API_URL} from '../constants';

export const getUpcomingMovies = async () => {
    const token = await getToken();
    const response = await fetch(`${BASE_API_URL}upcoming`, {
        method: 'GET',
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
        },
    });

    const movies = await response.json();
    return movies;
};

export default getUpcomingMovies;

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
  return movies.sort((a, b) => a['release-dateIS'].localeCompare(b['release-dateIS']));
};

export const getMovies = async () => {
  const token = await getToken();
  const response = await fetch(`${BASE_API_URL}movies`, {
    method: 'GET',
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    },
  });
  return await response.json();
};

export default getUpcomingMovies;

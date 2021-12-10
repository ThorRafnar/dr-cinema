import { getToken } from './tokenService';
import { BASE_API_URL } from '../constants';

const API_URL = `${BASE_API_URL}theaters`;

export const getAllCinemas = async () => {
  const token = await getToken();
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    },
  });

  const cinemas = await response.json();
  cinemas.sort((a, b) => a.name.replace(',', '').localeCompare(b.name.replace(',', '')));

  return cinemas.map((cinema) => {
    cinema.address = cinema['address\t'];

    if (cinema.website.includes('sambio')) {
      cinema.website = 'www.sambio.is';
    } else if (cinema.website.includes('borgarbio')) {
      cinema.website = 'smarabio.is/borgarbio';
    }
    delete cinema['address\t'];
    return cinema;
  });
};

export default getAllCinemas;

import * as SecureStore from 'expo-secure-store';
import { BASE_API_URL } from '../constants';

const API_URL = `${BASE_API_URL}authenticate`;

const tokenKey = 'cinemaToken';
const timeOfTokenCreationKey = 'cinemaTokenCreation';
const secondsInOneDay = 86400;

const isTokenStillValid = (tokenTimestamp) => tokenTimestamp + secondsInOneDay <= new Date() / 1000;

export const getToken = async () => {
  let timestamp;
  try {
    timestamp = await SecureStore.getItemAsync(timeOfTokenCreationKey);
    timestamp = Number(timestamp);
  } catch (error) {}

  if (
    timestamp === undefined || timestamp === null || isTokenStillValid(timestamp)
  ) {
    const newTimestamp = new Date() / 1000;
    await SecureStore.setItemAsync(
      timeOfTokenCreationKey,
      newTimestamp.toString(),
    );

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'thorrafnar',
        password: 'Abc12345',
      }),
    });
    const { token } = await response.json();
    await SecureStore.setItemAsync(tokenKey, token);
    return token;
  }
  const token = await SecureStore.getItemAsync(tokenKey);
  return token;
};

export default getToken;

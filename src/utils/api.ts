import axios from 'axios';
import config from '../../config.json';
import { langSetting } from './bin';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(
      `https://wttr.in/${city}?ATmF&lang=${langSetting}`,
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('/api/quote');
  return {
    quote: `${data[0].h}`,
  };
};

import axios from 'axios';

export const baseHeaders = {
  'Content-Type': 'application/json',
};

export const axiosFetcher = (url: string) =>
  axios
    .create({
      baseURL: import.meta.env.VITE_API_URL,
    })
    .get(url, {
      headers: {
        ...baseHeaders,
      },
    })
    .then((res) => res.data);

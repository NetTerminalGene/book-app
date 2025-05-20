import axios from 'axios';

export const searchBooks = async (query) => {
  const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  return res.data.items || [];
};

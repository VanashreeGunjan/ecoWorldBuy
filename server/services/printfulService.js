import axios from 'axios';

export const fetchPrintfulProducts = async () => {
  const response = await axios.get('https://api.printful.com/store/products', {
    headers: {
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
  });
  return response.data.result;
};
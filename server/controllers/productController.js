import { fetchPrintfulProducts } from '../services/printfulService.js';

export const getPrintfulProducts = async (req, res) => {
  try {
    const products = await fetchPrintfulProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
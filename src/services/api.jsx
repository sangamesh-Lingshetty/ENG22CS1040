import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/companies';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  const response = await axios.get(`${API_URL}/${company}/categories/${category}/products`, {
    params: {
      top,
      minPrice,
      maxPrice
    }
  });
  return response.data.map((product, index) => ({
    ...product,
    id: `${company}-${category}-${product.name}-${index}`
  }));
};

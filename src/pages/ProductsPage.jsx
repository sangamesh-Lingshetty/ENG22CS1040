import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { Container, Grid, Pagination } from '@mui/material';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    top: 10,
    minPrice: 1,
    maxPrice: 10000,
    sortBy: 'price'
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts(filters.company, filters.category, filters.top, filters.minPrice, filters.maxPrice);
      setProducts(productsData);
      setTotalPages(Math.ceil(productsData.length / filters.top));
    };
    getProducts();
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
    setPage(1); // Reset to the first page when filters change
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Filters filters={filters} onChange={handleFiltersChange} />
      <Grid container spacing={3}>
        {products.slice((page - 1) * filters.top, page * filters.top).map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={totalPages} page={page} onChange={handlePageChange} />
    </Container>
  );
};

export default ProductsPage;

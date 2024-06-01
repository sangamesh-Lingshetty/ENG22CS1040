import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const ProductDetailsPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  return (
    <Container>
      {product ? (
        <>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="subtitle1">Company: {product.company}</Typography>
          <Typography variant="body1">Category: {product.category}</Typography>
          <Typography variant="body1">Price: ${product.price}</Typography>
          <Typography variant="body1">Rating: {product.rating}</Typography>
          <Typography variant="body1">Discount: {product.discount}%</Typography>
          <Typography variant="body1">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
        </>
      ) : (
        <Typography variant="h6">Product not found</Typography>
      )}
    </Container>
  );
};

export default ProductDetailsPage;

import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      alt={product.name}
      height="140"
      image={`https://source.unsplash.com/random?product=${product.id}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.company}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ${product.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" component={Link} to={`/product/${product.id}`}>
        View Details
      </Button>
    </CardActions>
  </Card>
);

export default ProductCard;

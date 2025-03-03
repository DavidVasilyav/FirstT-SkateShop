// pages/catalog.js
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Box } from '@mui/material';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description of Product 1. It is a great product.',
    price: '$19.99',
    image: '/images/product1.jpg', // Make sure to add an image in the public/images folder
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description of Product 2. It is even better than Product 1.',
    price: '$29.99',
    image: '/images/product2.jpg', // Add a second image in public/images
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a description of Product 3. Premium quality product.',
    price: '$39.99',
    image: '/images/product3.jpg', // Add a third image in public/images
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a description of Product 4. A must-have for everyone.',
    price: '$49.99',
    image: '/images/product4.jpg', // Add a fourth image in public/images
  },
];

export default function Catalog() {
  return (
    <Container sx={{ paddingTop: '20px', paddingBottom: '40px' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Product Catalog
      </Typography>

      {/* Grid for displaying products */}
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

import Box from '@mui/material/Box';
import * as React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant='h3' component="div" gutterBottom>
        404: Page Not Found  
      </Typography>
      <Typography variant='h4' component="div" gutterBottom sx={{ color: 'grey' }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link to="/">
      <Button variant="contained" color="primary">
        Go to Home
      </Button>
    </Link>
    </Box>
  );
}

import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#121212',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          fontWeight: 400,
          letterSpacing: '0.5px',
        }}
      >
        © {currentYear} Israel Anane Domeh. All rights reserved.
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        mt={3}
        sx={{
          '@media (max-width: 600px)': {
            flexDirection: 'row', // Keep the icons in a row on mobile
          },
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<FaInstagram />}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: '30px',
            border: '2px solid #E4405F',
            color: '#E4405F',
            '&:hover': {
              backgroundColor: '#E4405F',
              color: 'white',
            },
            // Hide the text label for small screens
            '& .MuiButton-label': {
              display: { xs: 'none', sm: 'inline' }, 
            },
          }}
        >
          Instagram
        </Button>

        <Button
          variant="outlined"
          color="inherit"
          startIcon={<FaTwitter />}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: '30px',
            border: '2px solid #1DA1F2',
            color: '#1DA1F2',
            '&:hover': {
              backgroundColor: '#1DA1F2',
              color: 'white',
            },
            '& .MuiButton-label': {
              display: { xs: 'none', sm: 'inline' }, 
            },
          }}
        >
          Twitter
        </Button>

        <Button
          variant="outlined"
          color="inherit"
          startIcon={<FaEnvelope />}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: '30px',
            border: '2px solid #FF5C8D',
            color: '#FF5C8D',
            '&:hover': {
              backgroundColor: '#FF5C8D',
              color: 'white',
            },
            '& .MuiButton-label': {
              display: { xs: 'none', sm: 'inline' }, 
            },
          }}
        >
          Contact
        </Button>
      </Stack>
    </Box>
  );
}

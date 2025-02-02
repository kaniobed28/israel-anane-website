import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { FaClock, FaBullseye, FaDumbbell } from 'react-icons/fa';

const PersonalBestsSection  = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" align="center" mb={4}>
          Personal Bests
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} textAlign="center" sx={{ backgroundColor: 'white', p: 4, borderRadius: 2 }}>
            <FaClock sx={{ fontSize: 40, color: 'blue' }} />
            <Typography variant="h4">9.89s</Typography>
            <Typography variant="h6">100m Sprint</Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center" sx={{ backgroundColor: 'white', p: 4, borderRadius: 2 }}>
            <FaBullseye sx={{ fontSize: 40, color: 'green' }} />
            <Typography variant="h4">8.45m</Typography>
            <Typography variant="h6">Long Jump</Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center" sx={{ backgroundColor: 'white', p: 4, borderRadius: 2 }}>
            <FaDumbbell sx={{ fontSize: 40, color: 'red' }} />
            <Typography variant="h4">21.50m</Typography>
            <Typography variant="h6">Shot Put</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default PersonalBestsSection;
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { FaStar, FaRunning, FaBullseye, FaDumbbell } from 'react-icons/fa';

export default function StatsSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" align="center" mb={4}>
          Career Highlights
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={3} textAlign="center">
            <FaStar sx={{ fontSize: 40, color: 'gold' }} />
            <Typography variant="h4">4</Typography>
            <Typography variant="h6">World Records</Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <FaRunning sx={{ fontSize: 40, color: 'blue' }} />
            <Typography variant="h4">10</Typography>
            <Typography variant="h6">Years Pro</Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <FaBullseye sx={{ fontSize: 40, color: 'green' }} />
            <Typography variant="h4">8.45m</Typography>
            <Typography variant="h6">Long Jump</Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <FaDumbbell sx={{ fontSize: 40, color: 'red' }} />
            <Typography variant="h4">21.50m</Typography>
            <Typography variant="h6">Shot Put</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import StatCard from './StatCard';
import { stats } from '../app/data';

const StatsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" align="center" mb={4}>
          Career Highlights
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
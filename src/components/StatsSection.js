import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import StatCard from './StatCard';
import { stats } from '../app/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const StatsSection = () => {
  const { ref, style } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Box ref={ref} style={style} sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" align="center" mb={4} sx={{ color: 'text.primary' }}>
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
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PersonalBestCard from './PersonalBestCard';
import { personalBests } from '../app/data';

const PersonalBestsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" align="center" mb={4}>
          Personal Bests
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {personalBests.map((best, index) => (
            <PersonalBestCard
              key={index}
              icon={best.icon}
              value={best.value}
              title={best.title}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PersonalBestsSection;
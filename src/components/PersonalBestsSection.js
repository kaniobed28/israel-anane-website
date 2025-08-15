import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import PersonalBestCard from './PersonalBestCard';
import { personalBests } from '../app/data';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PersonalBestsSection = () => {
  const { ref, style } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Box ref={ref} style={style} sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" align="center" mb={4} sx={{ color: 'text.primary' }}>
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
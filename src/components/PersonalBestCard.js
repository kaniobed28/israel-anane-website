import React from 'react';
import { Grid, Typography } from '@mui/material';

const PersonalBestCard = ({ icon, value, title }) => {
  return (
    <Grid item xs={12} md={4} textAlign="center" sx={{ backgroundColor: 'white', p: 4, borderRadius: 2 }}>
      {icon}
      <Typography variant="h4">{value}</Typography>
      <Typography variant="h6">{title}</Typography>
    </Grid>
  );
};

export default PersonalBestCard;

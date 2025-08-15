import React from 'react';
import { Grid, Typography } from '@mui/material';

const StatCard = ({ icon, value, label }) => {
  return (
    <Grid item xs={12} md={3} textAlign="center">
      {icon}
      <Typography variant="h4">{value}</Typography>
      <Typography variant="h6">{label}</Typography>
    </Grid>
  );
};

export default StatCard;

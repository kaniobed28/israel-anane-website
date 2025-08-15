import React from 'react';
import { Grid, Typography } from '@mui/material';

const PersonalBestCard = ({ icon, value, title }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      textAlign="center"
      sx={{
        backgroundColor: 'background.paper',
        p: 4,
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: (theme) => `0 10px 20px ${theme.palette.secondary.main}1A`,
        },
      }}
    >
      {icon}
      <Typography variant="h4" sx={{ color: 'secondary.main' }}>{value}</Typography>
      <Typography variant="h6" sx={{ color: 'text.primary' }}>{title}</Typography>
    </Grid>
  );
};

export default PersonalBestCard;

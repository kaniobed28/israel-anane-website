import React from 'react';
import { Button } from '@mui/material';

const SocialButton = ({ platform, icon, url, color }) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      href={url}
      sx={{
        px: { xs: 3, sm: 4 },
        py: 1.5,
        borderRadius: '50px',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        transformOrigin: 'center',
        backgroundColor: color,
        color: 'white',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (theme) => `0 5px 15px ${theme.palette.primary.main}33`,
          backgroundColor: color,
        },
        '&:active': {
          transform: 'translateY(0)',
        },
        width: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      {platform}
    </Button>
  );
};

export default SocialButton;

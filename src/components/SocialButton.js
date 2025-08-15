import React from 'react';
import { Button } from '@mui/material';

const SocialButton = ({ platform, icon, url }) => {
  return (
    <Button
      variant="outlined"
      startIcon={icon}
      href={url}
      sx={{
        px: { xs: 3, sm: 4 },
        py: 1.5,
        borderRadius: '50px',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        borderColor: 'secondary.main',
        color: 'secondary.main',
        '&:hover': {
          backgroundColor: 'secondary.main',
          color: 'primary.main',
          borderColor: 'secondary.main',
          transform: 'translateY(-2px)',
          boxShadow: (theme) => `0 5px 15px ${theme.palette.secondary.main}33`,
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

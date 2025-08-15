import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import SocialButton from './SocialButton';
import { socialLinks } from '../app/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#121212',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          fontWeight: 400,
          letterSpacing: '0.5px',
        }}
      >
        © {currentYear} Israel Anane Domeh. All rights reserved.
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        mt={3}
      >
        {socialLinks.map((link) => (
          <SocialButton
            key={link.platform}
            platform={link.platform}
            icon={link.icon}
            url={link.url}
            color={link.color}
          />
        ))}
      </Stack>
    </Box>
  );
}
export default Footer;
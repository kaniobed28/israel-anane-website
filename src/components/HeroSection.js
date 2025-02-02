"use client";
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { FaInstagram, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { keyframes } from '@mui/system';

// Optimized animations using CSS transitions
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const HeroSection = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      component="section"
      aria-label="Professional Athlete Introduction"
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'common.white',
        overflow: 'hidden',
      }}
    >
      {/* Image without lazy loading */}
      <Box
        component="img"
        src="/israel.jpg" 
        alt="Israel Anane Domeh in action"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.7)',
          transition: 'transform 0.3s ease-out',
          transform: `scale(${isScrolling ? 1.05 : 1})`,
        }}
      />

      <Container sx={{ 
        position: 'relative',
        zIndex: 1,
        animation: `${fadeIn} 1s ease-out`,
        paddingX: { xs: 2, sm: 4 },
      }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2.5rem', sm: '4rem', lg: '5rem' },
            fontWeight: 900,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            mb: 2,
          }}
        >
          <Box component="span" sx={{ color: 'secondary.main' }}>Israel</Box> Anane Domeh
        </Typography>
        
        <Typography 
          variant="h2"
          sx={{
            fontSize: { xs: '1.25rem', sm: '2rem' },
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: 300,
            letterSpacing: '1.5px',
          }}
        >
          Olympic Track & Field Athlete | Sprinter Specialist
        </Typography>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          {['Instagram', 'Twitter', 'Contact'].map((platform, index) => (
            <Button
              key={platform}
              variant="contained"
              color={index === 2 ? 'secondary' : 'primary'}
              startIcon={[<FaInstagram key="instagram" />, <FaTwitter key="twitter" />, <FaEnvelope key="envelope" />][index]}
              href={index === 2 ? 'mailto:contact@example.com' : '#'}
              sx={{
                px: { xs: 3, sm: 4 },
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme => `0 5px 15px ${theme.palette.primary.main}33`,
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
          ))}
        </Stack>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: `${pulse} 2s infinite`,
            opacity: isScrolling ? 0 : 1,
            transition: 'opacity 0.3s',
          }}
        >
          <FaArrowDown size={24} />
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;

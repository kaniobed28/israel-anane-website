import { FaClock, FaBullseye, FaDumbbell, FaInstagram, FaTwitter, FaEnvelope, FaStar, FaRunning } from 'react-icons/fa';

export const personalBests = [
  {
    icon: <FaClock sx={{ fontSize: 40, color: 'secondary.main' }} />,
    value: '9.89s',
    title: '100m Sprint',
  },
  {
    icon: <FaBullseye sx={{ fontSize: 40, color: 'secondary.main' }} />,
    value: '8.45m',
    title: 'Long Jump',
  },
  {
    icon: <FaDumbbell sx={{ fontSize: 40, color: 'secondary.main' }} />,
    value: '21.50m',
    title: 'Shot Put',
  },
];

export const socialLinks = [
    {
      platform: 'Instagram',
      icon: <FaInstagram />,
      url: '#',
      color: '#FFD700',
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter />,
      url: '#',
      color: '#FFD700',
    },
    {
      platform: 'Contact',
      icon: <FaEnvelope />,
      url: 'mailto:contact@example.com',
      color: '#FFD700',
    },
  ];

export const stats = [
    {
      icon: <FaStar sx={{ fontSize: 40, color: 'secondary.main' }} />,
      value: '4',
      label: 'World Records',
    },
    {
      icon: <FaRunning sx={{ fontSize: 40, color: 'secondary.main' }} />,
      value: '10',
      label: 'Years Pro',
    },
    {
      icon: <FaBullseye sx={{ fontSize: 40, color: 'secondary.main' }} />,
      value: '8.45m',
      label: 'Long Jump',
    },
    {
      icon: <FaDumbbell sx={{ fontSize: 40, color: 'secondary.main' }} />,
      value: '21.50m',
      label: 'Shot Put',
    },
  ];

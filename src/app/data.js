import { FaClock, FaBullseye, FaDumbbell, FaInstagram, FaTwitter, FaEnvelope, FaStar, FaRunning } from 'react-icons/fa';

export const personalBests = [
  {
    icon: <FaClock sx={{ fontSize: 40, color: 'blue' }} />,
    value: '9.89s',
    title: '100m Sprint',
  },
  {
    icon: <FaBullseye sx={{ fontSize: 40, color: 'green' }} />,
    value: '8.45m',
    title: 'Long Jump',
  },
  {
    icon: <FaDumbbell sx={{ fontSize: 40, color: 'red' }} />,
    value: '21.50m',
    title: 'Shot Put',
  },
];

export const socialLinks = [
    {
      platform: 'Instagram',
      icon: <FaInstagram />,
      url: '#',
      color: '#E4405F',
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter />,
      url: '#',
      color: '#1DA1F2',
    },
    {
      platform: 'Contact',
      icon: <FaEnvelope />,
      url: 'mailto:contact@example.com',
      color: '#FF5C8D',
    },
  ];

export const stats = [
    {
      icon: <FaStar sx={{ fontSize: 40, color: 'gold' }} />,
      value: '4',
      label: 'World Records',
    },
    {
      icon: <FaRunning sx={{ fontSize: 40, color: 'blue' }} />,
      value: '10',
      label: 'Years Pro',
    },
    {
      icon: <FaBullseye sx={{ fontSize: 40, color: 'green' }} />,
      value: '8.45m',
      label: 'Long Jump',
    },
    {
      icon: <FaDumbbell sx={{ fontSize: 40, color: 'red' }} />,
      value: '21.50m',
      label: 'Shot Put',
    },
  ];

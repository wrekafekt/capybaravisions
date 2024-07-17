import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const ProjectCard = ({ image, title, description }) => (
  <Box borderRadius="md" overflow="hidden" boxShadow="md" bg="white">
    <Image src={image} alt={title} />
    <Box p={4}>
      <Text fontWeight="bold" fontSize="xl">{title}</Text>
      <Text mt={2}>{description}</Text>
    </Box>
  </Box>
);

export default ProjectCard;

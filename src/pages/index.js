import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Box
      bgImage="url('/capy.jpg')"
      bgPos="center"
      bgSize="cover"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
    >
      <Box p={5} bg="rgba(0, 0, 0, 0.5)" borderRadius="md">
        <Heading as="h1" mb={4}>Welcome to Capybara Visions</Heading>
        <Text mb={4}>Discover the art and vision of Capybara. Explore the collection and get inspired.</Text>
        <Button colorScheme="pink" size="lg">Explore Now</Button>
      </Box>
    </Box>
  </Layout>
);

export default IndexPage;

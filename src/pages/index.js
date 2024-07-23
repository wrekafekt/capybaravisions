import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import Layout from '/components/layout.js';
import ProjectCard from '/components/ProjectCard.js';
import AnimatedBox from '/components/MyComponent.js';

const IndexPage = () => (
  <Layout>
    {/* Hero Section */}
    <Box
      bgImage="url('src/images/capy1.png)"
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

    {/* Projects Section */}
    <Box p={8}>
      <Heading as="h2" mb={6}>Our Projects</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <AnimatedBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ProjectCard
            image="src/images/hero.jpg"
            title="Project One"
            description="Description for project one."
          />
        </AnimatedBox>
        <AnimatedBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ProjectCard
            image="src/images/hero.jpg"
            title="Project Two"
            description="Description for project two."
          />
        </AnimatedBox>
        <AnimatedBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ProjectCard
            image="src/images/hero.jpg"
            title="Project Three"
            description="Description for project three."
          />
        </AnimatedBox>
      </SimpleGrid>
    </Box>
  </Layout>
);

export default IndexPage;

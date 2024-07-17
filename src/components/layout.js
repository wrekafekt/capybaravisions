import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Header from "./header";

const Layout = ({ children }) => (
  <Box>
    <Helmet>
      <title>Capybara Visions</title>
      <meta name="description" content="A modern portfolio for Capybara Visions" />
    </Helmet>
    <Header />
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.100">
      <Container maxW="container.md" mt={5}>
        {children}
      </Container>
    </Flex>
  </Box>
);

export default Layout;

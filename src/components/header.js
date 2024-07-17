import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

const Header = () => (
  <Box bg="blue.600" color="white" p={4}>
    <Flex justify="space-between" align="center">
      <Link as={GatsbyLink} to="/" fontWeight="bold" fontSize="xl">
        Capybara Visions
      </Link>
      <Flex>
        <Link as={GatsbyLink} to="/" mr={4}>
          Home
        </Link>
        <Link as={GatsbyLink} to="/about">
          About
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Header;

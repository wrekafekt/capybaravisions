import React from "react"
import { Box, Container } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import Header from "./header"

const Layout = ({ children }) => (
  <Box>
    <Helmet>
      <title>Capybara Visions</title>
      <meta name="description" content="A modern portfolio for Capybara Visions" />
    </Helmet>
    <Header />
    <Container maxW="container.md" mt={5}>
      {children}
    </Container>
  </Box>
)

export default Layout

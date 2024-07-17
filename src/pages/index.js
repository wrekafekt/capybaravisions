import React from "react"
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Heading as="h1" mb={4}>
      Welcome to Capybara Visions
    </Heading>
    <Text mb={4}>
      Discover the art and vision of Capybara. Explore the collection and get inspired.
    </Text>
    <StaticImage src="../images/hero.jpg" alt="Hero Image" />
  </Layout>
)

export default IndexPage

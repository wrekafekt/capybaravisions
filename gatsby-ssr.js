const React = require("react");
const { ChakraProvider } = require("@chakra-ui/react");
const { GatsbySSR } = require("gatsby");

exports.wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};

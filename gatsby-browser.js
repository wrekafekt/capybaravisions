import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import "./src/components/global.css";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "gray.800")(props),
      },
    }),
  },
})

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>
}

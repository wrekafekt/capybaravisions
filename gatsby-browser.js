import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

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

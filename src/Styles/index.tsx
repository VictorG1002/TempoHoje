import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif'
  },
  global: () => ({
    'html, body, #root': {
      minHeight: '100%'
    }
  })
})

export default customTheme

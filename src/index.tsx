import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'
import customTheme from './Styles'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Layout />
    </ChakraProvider>
  </React.StrictMode>
)

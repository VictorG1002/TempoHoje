import { Divider } from '@chakra-ui/react'
import Home from '../../pages/Home'
import Footer from '../Footer'
import Header from '../Header'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default Layout

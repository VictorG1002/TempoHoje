import { Box, Heading } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Box bg={'blue.400'} p={10}>
      <Heading size="2xl" color={'white'}>
        🌧 TempoHoje
      </Heading>
    </Box>
  )
}
export default Header

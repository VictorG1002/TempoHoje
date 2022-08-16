import { Search2Icon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  VStack
} from '@chakra-ui/react'
import { useState } from 'react'
import api from '../../services/api'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [searchlocal, setSearchLocal] = useState('')

  const handleSubmit = async () => {
    if (searchlocal === '') {
      alert('nao deixe o campo em branco')
    }
    console.log(searchlocal)
    const response = await api.get(``)
    console.log(response.data)
  }

  return (
    <Box bg={'gray.100'} w="full" h="full" p={100} minH="100">
      <Center mt={8}>
        <VStack>
          <Heading mb={5} color={'gray.700'}>
            Digite o local que voce deseja ver o clima
          </Heading>
          <HStack>
            <Input
              onChange={e => {
                setSearchLocal(e.target.value)
              }}
              value={searchlocal}
              pr={250}
              size="lg"
              borderRadius={20}
              color="black"
              placeholder="Digite o local"
              _placeholder={{ color: 'gray' }}
              backgroundColor="#ffffff"
            ></Input>
            <Button
              onClick={handleSubmit}
              size="md"
              bg={'blue.400'}
              color="gray.700"
              borderRadius={15}
            >
              <Search2Icon color={'white'} />
            </Button>
          </HStack>
        </VStack>
      </Center>
    </Box>
  )
}
export default Home

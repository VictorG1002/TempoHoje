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
import { useRef, useState } from 'react'
import api from '../../services/api'

const Home: React.FC = () => {
  const getInput = useRef<HTMLInputElement>(null)

  const searchCityInApi = async () => {
    const city = getInput.current?.value
    const response = await api.get(``)
  }

  return (
    <Box bg={'gray.100'} w="full" h="full" p={100} minH="100">
      <Center mt={8}>
        <VStack>
          <Heading mb={5} color={'gray.700'}>
            Digite a cidade que voce deseja ver o clima
          </Heading>
          <HStack>
            <Input
              ref={getInput}
              pr={250}
              size="lg"
              borderRadius={20}
              color="black"
              placeholder="Digite o nome do local"
              _placeholder={{ color: 'gray' }}
              backgroundColor="#ffffff"
            />

            <Button
              onClick={searchCityInApi}
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

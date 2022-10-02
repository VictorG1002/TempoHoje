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

const key = '4SIFhGz1AG5RJMIJRLmPBC5sO0onkV6O'

interface Icity {
  Key: string
  Type: string
  Rank: number
  LocalizedName: string
  EnglishName: string
  PrimaryPostalCode: string
  Region: {
    ID: string
    LocalizedName: string
    EnglishName: string
  }
  Country: {
    ID: string
    LocalizedName: string
    EnglishName: string
  }
  AdministrativeArea: {
    ID: string
    LocalizedName: string
    EnglishName: string
    Level: number
    LocalizedType: string
    EnglishType: string
    CountryID: string
  }
  TimeZone: {
    Code: string
    Name: string
    GmtOffset: number
    IsDaylightSaving: boolean
    NextOffsetChange: null
  }
}

const Home: React.FC = () => {
  const getInput = useRef<HTMLInputElement>(null)
  const [city, setCity] = useState()

  const searchCityInApi = async () => {
    const inputValue = getInput.current?.value
    const response = await api.get(
      `/locations/v1/cities/search?apikey=${key}&q=${inputValue}`
    )
    setCity(response.data[0])
    console.log(response.data)
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

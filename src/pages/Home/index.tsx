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
import { useEffect, useRef, useState } from 'react'
import WeatherCard from '../../components/WeatherCard'
import api from '../../services/api'

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

interface Iweather {
  Headline: {
    EffectiveDate: string
    EffectiveEpochDate: number
    Severity: number
    Text: string
    Category: string
    EndDate: string
    EndEpochDate: number
    MobileLink: string
    Link: string
  }
  DailyForecasts: [
    {
      Date: string
      EpochDate: number
      Temperature: {
        Minimum: {
          Value: number
          Unit: string
          UnitType: number
        }
        Maximum: {
          Value: number
          Unit: string
          UnitType: number
        }
        Day: {
          Icon: number
          IconPhrase: string
          HasPrecipitation: boolean
          PrecipitationType: string
          PrecipitationIntensity: string
        }
        Night: {
          Icon: number
          IconPhrase: string
          HasPrecipitation: boolean
          PrecipitationType: string
          PrecipitationIntensity: string
        }
      }
    }
  ]
}

const key = 'GCJ8xDOyOrzb8aKbB888Uq0N1yyBy0y1'

const Home: React.FC = () => {
  const getInput = useRef<HTMLInputElement>(null)
  const [city, setCity] = useState<Icity | null>(null)
  const [weather, setWeather] = useState<Iweather | null>(null)
  const [showComponent, setShowComponent] = useState(false)

  const searchCityInApi = async () => {
    const inputValue = getInput.current?.value
    const response = await api
      .get(`/locations/v1/cities/search?apikey=${key}&q=${inputValue}`)
      .then(res => {
        setCity(res.data[0])
        setShowComponent(true)
      })
      .catch(() => {
        setShowComponent(false)
        setCity(null)
      })

    searchWeatherInApi()
  }

  const searchWeatherInApi = async () => {
    const response = await api.get(
      `/forecasts/v1/daily/1day/${city?.Key}?apikey=${key}&language=pt-br`
    )
    setWeather(response.data)
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
          {showComponent ? <WeatherCard /> : <Box></Box>}
        </VStack>
      </Center>
    </Box>
  )
}
export default Home

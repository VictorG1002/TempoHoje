import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Icity, Iweather } from '../../pages/Home'

interface Iprops {
  img: string
  weather: Iweather | null
  city: Icity | null
  now: number
  minutes: number
}

const getAverageTemperature = (a: number, b: number) => {
  return Math.floor((a + b) / 2)
}

const WeatherCard: React.FC<Iprops> = ({
  img,
  weather,
  city,
  now,
  minutes
}) => {
  const min = Math.floor(
    weather?.DailyForecasts[0].Temperature.Minimum.Value || 0
  )
  const max = Math.floor(
    weather?.DailyForecasts[0].Temperature.Maximum.Value || 0
  )

  return (
    <>
      <Box
        p={2}
        w={400}
        bgColor={'gray.200'}
        height={300}
        mt={8}
        borderRadius={22}
        shadow="md"
      >
        <Box
          display={'flex'}
          justifyContent="flex-start"
          flexDirection={'column'}
          mt={2}
          ml={4}
        >
          <Text as="b" color={'blue.600'}>
            {city?.LocalizedName}
          </Text>
          <Text as="b" fontSize={'sm'} color={'blue.600'}>
            {now}:{String(minutes).padStart(2, '0')}
          </Text>
        </Box>
        <Center mt={8}>
          <Text>{getAverageTemperature(min, max)}</Text>
          <VStack>
            <Box
              display={'flex'}
              justifyContent="center"
              alignItems="center"
              w={150}
              p={5}
              borderRadius={10}
              shadow="lg"
            >
              <Image display={'flex'} w={110} h={70} src={img} />
            </Box>
            <Text>{min}</Text>
            <Text>{max}</Text>
          </VStack>
        </Center>
      </Box>
    </>
  )
}

export default WeatherCard

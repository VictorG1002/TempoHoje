import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Icity, Iweather } from '../../pages/Home'

interface Iprops {
  img: string
  weather: Iweather | null
  city: Icity | null
  now: number
  minutes: number
  text: string
}

const getAverageTemperature = (a: number, b: number) => {
  return Math.floor((a + b) / 2)
}

const WeatherCard: React.FC<Iprops> = ({
  img,
  weather,
  city,
  now,
  minutes,
  text
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
        <Box display={'flex'} mt={2} ml={5} alignItems={'normal'}>
          <Box display={'flex'} flexDirection={'column'}>
            <Text as="b" color={'blue.600'}>
              {city?.LocalizedName}
            </Text>
            <Text as="b" fontSize={'sm'} color={'blue.600'}>
              {now}:{String(minutes).padStart(2, '0')}
            </Text>
          </Box>
          <Box display={'flex'} ml={260} alignItems={'flex-start'}>
            <Text as="b" color={'blue.600'} fontSize={'3xl'}>
              {getAverageTemperature(min, max)}°
            </Text>
          </Box>
        </Box>

        <Center mt={7}>
          <VStack>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent="center"
              alignItems="center"
              w={150}
              p={5}
              borderRadius={10}
              shadow="lg"
            >
              <Image display={'flex'} w={110} h={70} src={img} />
              <Box display={'flex'} flexDirection={'row'} mt={1} gap={6}>
                <Text color={'blue.400'}>{max}°</Text>
                <Text color={'blue.200'}>{min}°</Text>
              </Box>
            </Box>
          </VStack>
        </Center>
        <Center>
          <Text mt={5} as="i" color={'gray.500'}>
            {text}
          </Text>
        </Center>
      </Box>
    </>
  )
}

export default WeatherCard

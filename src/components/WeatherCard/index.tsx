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

const WeatherCard: React.FC<Iprops> = ({
  img,
  weather,
  city,
  now,
  minutes
}) => {
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
        <Center mt={8}>
          <VStack>
            <Text>{city?.LocalizedName}</Text>
            <Text>
              {now}:{String(minutes).padStart(2, '0')}
            </Text>
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
          </VStack>
        </Center>
      </Box>
    </>
  )
}

export default WeatherCard

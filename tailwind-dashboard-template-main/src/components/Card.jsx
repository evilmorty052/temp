import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = props => (
  <div className='py-8 '
    // bg={useColorModeValue('white', 'gray.700')}
    
    px={{ base: '4', md: '10' }}
    shadow='base'
    rounded={{ sm: 'lg' }}
    {...props}
  />
)

export default Card;
  
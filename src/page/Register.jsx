import React from 'react';
import { Box } from '@chakra-ui/react';
import {Footer} from '../Komponent/footer/Footer';
import { RegisForm } from '../Komponent/RegisForm/RegisForm';
import { Nav3 } from './navbar/Nav3';


export const Register = () => {
  return (
    <Box >
      <Nav3/> 
      <Box className='RegisForm'
        bg="#EEE9DA" pt={'50px'}
        minHeight= 'auto'
        height= 'auto'
        width={'full'}
        padding= '20px'
        > 
        <RegisForm/> 
      </Box>
      <Footer/> 
    </Box>


  )
};

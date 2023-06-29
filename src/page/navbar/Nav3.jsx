//Ini tampilan navbar dihalaman Registrasi

import React from 'react'
import { Box, ButtonGroup, Flex, Spacer } from '@chakra-ui/react'
import Button1 from './Button1';
import Search from './Search';
import Logo from './Logo'
import BeforeWButton from './BeforeWButton'



export const Nav3 = () => {
  return (
    <div>
      <Flex zIndex={'50'} minWidth={'max-content'} alignItems='center' gap='2' bg='white' p={4} borderBottom='5px solid orange' top={0} position={'fixed'} w='100%'>
        <Box>
          <Logo/>
        </Box>
        <Spacer />
        <ButtonGroup gap='5'>
            <Search/>
            <BeforeWButton/>
            <Button1/>
        </ButtonGroup>
      </Flex>
    </div>
  );
};










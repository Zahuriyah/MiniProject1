//Ini tampilan navbar kalau sudah login

import React from 'react'
import { Box, ButtonGroup, Flex, Spacer } from '@chakra-ui/react'
import Search from './Search';
import Logo from './Logo'
import { AfterWButton } from './AfterWButton';
import { Avatar1 } from './Avatar1';

export const Nav2 = () => {
  return (
    <div>
      <Flex zIndex={'20'} minWidth={'max-content'} alignItems='center' gap='2' bg='white' p={4} borderBottom='5px solid orange' top={0} position={'fixed'} w='100%'>
        <Box>
          <Logo/>
        </Box>
        <Spacer />
        <ButtonGroup gap='5'>
            <Search/>
            <AfterWButton/>
            <Avatar1/>
        </ButtonGroup>
      </Flex>
    </div>
  );
};





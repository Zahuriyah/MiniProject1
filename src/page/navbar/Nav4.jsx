//Ini tampilan navbar saat di page create blog

import React from 'react'
import { Box, ButtonGroup, Flex, Spacer } from '@chakra-ui/react'
import Search from './Search';
import Logo from './Logo'
import { BiBell} from 'react-icons/bi';
import { TiThLargeOutline } from 'react-icons/ti';
import { Avatar1 } from './Avatar1';


export const Nav4 = () => {
  return (
    <div>
      <Flex zIndex={'20'} minWidth={'max-content'} alignItems='center' gap='2' bg='white' p={4} borderBottom='5px solid orange' position={'fixed'} w='100%'>
        <Box>
          <Logo/>
        </Box>
        <Spacer />
        <ButtonGroup gap='5' alignItems='center'>
            <Search/>
            <TiThLargeOutline cursor={'pointer'} style={{ fontSize: '24px' }} color='#526D82' />
            <BiBell cursor={'pointer'} style={{ fontSize: '24px' }} color='#526D82'/>
            <Avatar1/>
        </ButtonGroup>
      </Flex>
    </div>
  );
};





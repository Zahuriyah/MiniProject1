//main navbar
import { Box } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Nav1 } from './Nav1';
import { Nav2 } from './Nav2';


export const Navbar = () => {
    const login = useSelector((state) => state.UserReducer.login);

  return (
    <Box>
        {!login ? (
            <Nav1/>
        ) : (
            <Nav2/>
        )
        }
    </Box>
  )
};





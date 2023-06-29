import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export default function Button2() {
  const navigate = useNavigate();
  const toRegisterPage = () => {
    navigate("/register")};

  return (
    <Box>
        <Button 
          onClick={toRegisterPage}
          colorScheme='orange' 
          variant='solid'
        >
        Sign Up </Button>
    </Box>
  )
}




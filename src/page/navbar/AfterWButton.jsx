import React from 'react'
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { EditIcon } from '@chakra-ui/icons'



export const AfterWButton = () => {
  const navigate = useNavigate();
  const towritePage = () => {
    navigate("/write");
  };
  
  return (
    <Box>
        <Button
          onClick={towritePage}
          colorScheme="teal"
          variant={"unstyled"}
        >
        <EditIcon/> Start Write </Button>
        
    </Box>
  );
};





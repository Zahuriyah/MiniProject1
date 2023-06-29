import React from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'
import ModalWrite  from "./ModalWrite";


export default function BeforeWButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
        <Box>
            <Button
              colorScheme="teal"
              variant={"unstyled"}
              onClick={onOpen}
            >
            <EditIcon/> Start Write </Button>
        </Box>
        <ModalWrite isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Box>
  )
}









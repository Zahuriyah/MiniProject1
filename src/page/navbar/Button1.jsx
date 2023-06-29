import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
import ModalLogin from './ModalLogin';

export default function Button1() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <div>
<Button colorScheme='twitter' variant='outline' color='black' onClick={onOpen} >
Sign In
</Button>
<ModalLogin isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </div>
  )
}




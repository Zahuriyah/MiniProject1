//Ini kolom searchnya

import React from 'react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'


export default function Search() {
  return (
    <div>
        <InputGroup>
            <Input
            placeholder="Search articles..."
            // size="sm"
            variant="filled"
            borderRadius="md"
            width={500}
            />

            <InputRightElement>
            <Button colorScheme='orange'>
            <SearchIcon/>
            </Button>
            </InputRightElement>
        </InputGroup>





    </div>
  )
}

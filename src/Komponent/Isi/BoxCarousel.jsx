import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from './Carousel'
import { useNavigate } from "react-router-dom";

export default function BoxCarousel() {
  const navigate = useNavigate();
  const totop10 = () => {
    navigate("/top10")};
  return (
    <Box 
        bg= {'#F4B183'}
        w= {'full'}
        h= {'600px'}
        mt= {'80px'}
        display= {'flex'}
        
        >
        <Stack 
            bg={'#F4B183'}
            display={'flex'}
            alignItems={'center'}
            pl={'50px'}
            pr={'20px'}
            mt={'90px'}
            >
            <Text 
            color={'white'}
            fontSize={'70px'}
            textShadow={"2px 2px 4px rgba(0, 0, 0, 0.4)"}
            cursor={'pointer'}
            >
              Welcome 
              to 
              ABOBULS 
            </Text>

            <Text 
            color={'white'}
            fontSize={'20px'}
            textShadow={"2px 2px 4px rgba(0, 0, 0, 0.4)"}
            cursor={'pointer'}
            >
              Rumah bagi siapa saja yang ingin belajar dan berbagi knowledge,
              info, pengalaman, dan apapun seputar anabuls.
              Yuk mulai membaca, dan bergabung menjadi member Abobuls
              untuk share tulisan terbaikmu.
            </Text>
        </Stack>

        <Box 
        pr={"30px"}
        >
            <Carousel/>
        </Box>
    </Box>
  )
}

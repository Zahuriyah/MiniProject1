import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Health from './SectionList.jsx/Health'

export const ListWeb = () => {
  return (
    <Box bg={'#EEE9DA'} w={'full'} h={'400vh'}>
        {/* SECTION ARTIKEL HEALTH */}
        <Flex className='LABEL KATEGORI 1'>
            <Box display="flex"
                justifyContent={'center'}
                alignItems="center"
                fontSize={'20px'} fontFamily={''} fontWeight={'bold'} color={'white'}
                ml={'55px'} mt={'50px'} bg={'orange'} 
                w={'190px'} h={'40px'} borderRadius={'10px'} boxShadow="xl"
                > 
                Anabuls Health
            </Box>
        </Flex>

        <Flex justifyContent={'center'}>
            <Box 
                className='Artikel Kesehatan Anabuls' 
                bg={'white'} border={'3px solid orange'} 
                w={'1100px'} h={'503px'} mt={'5px'} borderRadius={'20px'}
                >
                    <Health/>
            </Box>
        </Flex>





     
            




    </Box>
  )
}


import React from 'react'
import { Box, Button, Container, Flex, IconButton, Input, SimpleGrid, Spacer, Stack, Text, position, useColorModeValue } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <div>
        <Box className='groupFooter' bg='#dd6b20' h='50vh' w={'full'} > 

          <Flex  className='Area Main Footer' >
              <Box alignContent={'flex-start'} pl={'130px'} pt={'30px'} mt={'40px'}>
                    <Text color={'white'} fontSize={'25px'} pb={'10px'}>Subscribe to Our Newsletter</Text>
                    <Stack direction={'row'}>
                      <Input
                        placeholder={'Your email address'}
                        color={'white'}
                        bg={'white'}
                        border={'1px solid white'}
                        _focus={{
                          bg: 'whiteAlpha.300'}}
                      />
                        <Button colorScheme='green' color={'white'} p={'5'}>
                        Submit
                        </Button>
                    </Stack>
                    <Text color={'white'} fontSize={'10px'} pt={'10px'} >   You won't receive any spam! </Text>
              </Box>

              <Spacer />

              <Box className='ini area sosmed' spacing={6} pr={'130px'} pt={'30px'} mt={'40px'}>
                  <Text color={'white'} fontSize={'25px'}>Follow Our Social Media!</Text>
                  <Stack direction={'row'} spacing={6} mt={'10px'}>
                  <Link to="https://twitter.com/NARUTO_info_en" >
                      <FaTwitter style={{fontSize: '30px'}} color='white' cursor={'pointer'} />
                  </Link>
                  <Link to="https://instagram.com/naruto?igshid=MjAxZDBhZDhlNA==" >
                      <FaInstagram style={{fontSize: '30px'}} color='white' cursor={'pointer'}/>
                  </Link>
                  <Link to="https://wa.me/6285256760912">
                      <FaWhatsapp style={{fontSize: '30px'}} color='white' cursor={'pointer'}/>
                  </Link>
                  <Link to="https://www.youtube.com/watch?v=_8RBgibmu1I">
                      <FaYoutube style={{fontSize: '30px'}} color='white' cursor={'pointer'}/>
                  </Link>
                  <Link to="https://www.tiktok.com/@ncsz.one/video/6994887394323401990">
                      <FaTiktok style={{fontSize: '30px'}} color='white' cursor={'pointer'}/>
                  </Link>
                 
                  </Stack>
              </Box>
          </Flex>

          
        <Box mt={'80px'} ml={'40%'} >
            <Text fontSize={'sm'} color={'white'}> Copyright © Nur Zahuriyah.2023.Yogyakarta. </Text>
        </Box>


        </Box> {/* End Box Footer Terluar */}
    </div>
  )
}

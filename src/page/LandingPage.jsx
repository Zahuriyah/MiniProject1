import React from 'react'
import { Box } from '@chakra-ui/react'
import {Footer} from '../Komponent/footer/Footer'
import GroupList1 from '../Komponent/Isi/GroupList1'
import BoxCarousel from '../Komponent/Isi/BoxCarousel'
import { Navbar } from './navbar/Navbar'
import TopLike from './TopLike'



export function LandingPage() {
  return (
      <Box>
        <Box>
           <Navbar/> 
        </Box>

        <Box>
            <BoxCarousel />
        </Box>

        <Box>
            <GroupList1/>
        </Box>

        <Box>
            <TopLike/>
        </Box>

        <Box>
            <Footer/>   
        </Box>


      </Box>


  )
}

        // {/* <Box className='LandingPage'bg="#EEE9DA" h="200vh" w={'full'}>  */}
        //     {/* <Nav1/>  */}
        // {/* </Box> */}



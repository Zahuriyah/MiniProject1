import React from "react"
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Center
} from "@chakra-ui/react"

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import Slider from "react-slick"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Carousel =()=>{
  const [slider, setSlider] = React.useState(null)

  const top = useBreakpointValue({ base: "90%", md: "50%" })
  const side = useBreakpointValue({ base: "30%", md: "40px" })

  const [like, setLike] = useState([]);
  const topLike = async () => {
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav?size=10&sort=DESC&orderBy=total_fav"
      );
      setLike(respon.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    topLike();
  }, []);


  return (
    <Box  mt={'100px'} >
    <Box
      position={"relative"}
      height={"400px"}
      width={"700px"}
      overflow={"hidden"}
      borderRadius={"20px"}
      boxShadow="4px 7px 4px rgba(0, 0, 0, 0.2)"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {like.map((card, index) => (
          <Box
            key={index}
            height={"2xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${card.imageURL}`}
          >
           <Container display={'flex'} justifyContent={'center'}>
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                bg="rgba(255, 255, 255, 0.7)"
                padding={'10px'}
                borderRadius={'15px'}
                
              >
                <Heading fontSize={"2xl"} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText" display={'flex'} justifyContent={'center'} alignContent={'center'}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>

    



    </Box>
  )
}

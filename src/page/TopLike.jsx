import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Flex,
    Heading,
    Stack,
    Text,
    useToast,
  } from "@chakra-ui/react";

  import { useDispatch, useSelector } from "react-redux";
  import { addToBookmark } from "../redux/reducer/BlogReducer";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { AiFillHeart } from "react-icons/ai";
import { BiBookmark, BiLike } from "react-icons/bi";
import { MdReadMore } from "react-icons/md";
  
  export default function TopLike() {
    const login = useSelector((state) => state.UserReducer.login);
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
    const dispatch = useDispatch();
  
    const toast = useToast();
    function toToastAdd() {
      toast({
        title: "Bookmark Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    function noToast() {
      toast({
        title: "Bookmark failed",
        status: "error",
        description: "You need to login first, to save the blog",
        duration: 3000,
        isClosable: true,
      });
    }



    return (
      <>
        <Box mt={"20px"} bg={'#F4B183'} pb={"70px"}>
            <Box display={'flex'} justifyContent={'center'}>
                <Text fontSize={"4xl"} fontWeight={"bold"} mt={'20px'} mb={'20px'}>
                    10 ARTIKEL TERPOPULER
                </Text>
            </Box>
          <Flex wrap={"wrap"} gap={"20px"} justifyContent={'center'}>
            {like.map((item) => {
              return (
                <Card w="300px" maxH="lg" shadow={'dark-lg'}>
                  <CardBody justifyContent={"center"}>
                    {/* <Center> */}
                      <Box
                        height={"140px"}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        borderRadius="lg"
                        backgroundImage={`https://minpro-blog.purwadhikabootcamp.com/${item.imageURL}`}
                      ></Box>
                   
                    {/* </Center> */}
                    <Stack mt="6" spacing="2">
                      <Heading size="md">{item.title}</Heading>
                      <Text color="blue.600" fontSize="10px">
                        {item.User.username}
                      </Text>
                      <Text fontSize={"12px"} noOfLines={2}>
                        {item.content}
                      </Text>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        Published: {new Date(item.createdAt).toLocaleDateString()}
                      </Text>
                      <Text color={"yellow.500"}>
                        Category : {item.Category.name}
                      </Text>
                      <Flex>
                        <Box mt={"10px"}>
                          <AiFillHeart color="red" size={"20px"} />
                        </Box>
                        <Text color="black" fontSize="1xl" mt={"8px"}>
                          : {item.total_fav} likes
                        </Text>
                      </Flex>
                    </Stack>
                  </CardBody>

                  <Divider />

                  <CardFooter display={'flex'} justifyContent={'center'} >
                            <ButtonGroup spacing='0' >
                                <Button variant='ghost' colorScheme='blue'>
                                    <BiLike fontSize={'20'} />  
                                </Button>
                                {!login ? (
                                    <Button 
                                    rightIcon={<BiBookmark fontSize={'18'} />}
                                    onClick={() => noToast()}
                                    variant='ghost' colorScheme='blue'>
                                    </Button>
                                ) : (
                                    <Button 
                                    rightIcon={<BiBookmark fontSize={'18'} />}
                                    variant='ghost' colorScheme='blue'>
                                    onClick={() =>
                                    dispatch(addToBookmark(item), toToastAdd())
                                    }
                                    </Button>
                                )}
                                <Button variant='ghost' colorScheme='blue'>
                                    Read More <MdReadMore fontSize={'20'} />
                                </Button>
                            </ButtonGroup>
                  </CardFooter>

                </Card>
              );
            })}
          </Flex>
        </Box>
      </>
    );
  }
import { Box, Button, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react';
import { Nav4 } from './navbar/Nav4';

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { makeArticle } from '../redux/reducer/BlogReducer';



//GERBANG 
export default function CreateBlog() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const handleOption = (event) => {
    setSelected(event.target.value);
  };

  const [category, setCategory] = useState();
  const getCategory = async () => {
    try {
      const respon = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      setCategory(respon.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: document.getElementById("title").value,
      country: document.getElementById("country").value,
      CategoryId: selected,
      url: "/",
      keywords: document.getElementById("keywords").value,
      content: document.getElementById("content").value,
    };
    const file = document.getElementById("file").files[0];
    dispatch(makeArticle(data, file));
  };

  

  return (
    <Box className='MainContainerCreateBlog'>
      <Box bg='#EEE9DA' h='1vh'>
        <Nav4 />
      </Box>

      <Box bg='#EEE9DA' h='2000px' pt='50px' >
        <Box mt='100px' ml='160px' border={'2px solid orange'}
          borderRadius={'20px'}
          w={'900px'}
          minHeight= {'auto'}
          h= {'auto'}
          p={'50px'}
          shadow={'2xl'}
        >
          {/* Tulisan Create Center */}
          <Box display={"flex"} justifyContent={'center'}>
            <Text mr={4} fontSize={"4xl"} mb={4} fontWeight={'bold'}>
              Create Article
            </Text>
          </Box>

          <stack >
          <form onSubmit={handleSubmit}>

            {/* Ini Kolom Input Title */}
            <Box  mt={'20px'} mb={'20px'}>
              <Text mb='8px' fontWeight={'bold'}>Title : </Text>
              <Input
                type="text"
                id="title"
                name="title"
                fontSize='2xl'
                border={'1px solid grey'}
                placeholder="Title"
              />
            </Box>


            {/*  Ini Kolom Input Image*/}
            <Box>
              <Text mb='8px' fontWeight={'bold'}>Image : </Text>
              <Box className='kotak input gambar'
                border={'1px solid grey'}
                mb={'20px'}
                borderRadius={'5px'}
                p={'5px'}
              >
                <Input
                  type="file"
                  id="file"
                  variant={""}
                  placeholder="image"
                />
              </Box>
            </Box>


            {/* Ini Kolom Input Category*/}
            <Text mb='8px' fontWeight={'bold'}>Category:</Text>
            <Box className='kotak kategory'
              border={'1px solid grey'}
              mb={'20px'}
              borderRadius={'5px'}
            >
                <Select
                  w={'full'}
                  value={selected}
                  onChange={handleOption}
                >
                  <option value={""}>Category</option>
                  {category &&
                    category.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </Select> 
            </Box>


            {/* Keyword*/}
            <Box 
              mt={'20px'}
              mb={'20px'}
            > 
              <Text mb='8px' fontWeight={'bold'}>Keyword : </Text>
              <Input
                type="text"
                placeholder="Add Keywords"
                id="keywords"
                name="keywords"
                mb={"10px"}
                border={'1px solid grey'}
              />            
            </Box>


            {/* Country of Origin*/}
            <Box>
              <Text mb='8px' fontWeight={'bold'}>Country of Origin : </Text>
              <Input
                type="text"
                placeholder="Country of Origin"
                id="country"
                name="country"
                mb={"10px"}
                border={'1px solid grey'}
              />
            </Box>

            {/* Content*/}
            <Box
              mt={'20px'}
              mb={'20px'}
            >
              <Text mb='8px' fontWeight={'bold'}>Content :</Text>
              <Textarea
                id="content"
                name="content"
                placeholder='Tell your story...'
                size='md'
                h='80vh'
                border={'1px solid grey'}
              />
            </Box>

            <Button colorScheme="green" type="submit" w={'full'} mt={'30px'}>
              PUBLISH
            </Button>

          </form>
          </stack>
        </Box>
      </Box>
    </Box>
  );
};


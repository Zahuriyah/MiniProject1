import { Box, Input, Select, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Nav4 } from './navbar/Nav4';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [content, setContent] = useState('');
  const handleImageChange = (event) => {
    const file = event.target.files[0];
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
  };

  const handleVideoChange = (event) => {
    const videoUrl = event.target.value;
  };

  const handleKeywordsChange = (event) => {
    const keywords = event.target.value;
  };



  return (
    <Box className='MainContainerCreateBlog'>
      <Box bg='#EEE9DA' h='1vh'>
        <Nav4 />
      </Box>

      <Box bg='#EEE9DA' h='1700px' pt='50px'>
        <Box mt='60px' ml='20%' mr='20%'>

          <Box className='kotak title'>
              <Text mb='8px' fontWeight={'bold'}>Title : </Text>
              <Textarea
                value={title}
                onChange={handleTitleChange}
                placeholder='Title'
                fontSize='4xl'
                border={'1px solid grey'}
              />
          </Box>


          <Box className='kotak author'
           mt={'20px'}
           mb={'20px'}
          >
              <Text mb='8px' fontWeight={'bold'}>Author : </Text>
              <Textarea
                value={author}
                onChange={handleAuthorChange}
                placeholder='Author'
                fontSize='2xl'
                border={'1px solid grey'}
              />
          </Box>


          <Text mb='8px' fontWeight={'bold'}>Publication Date : </Text>
          <Box className='kotak tangal'
            border={'1px solid grey'}
            mb={'20px'}
            borderRadius={'5px'}
            p={'5px'}
          >
              <DatePicker
                id='publicationDate'
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat='dd/MM/yyyy'
                placeholderText='select date'
                showPopperArrow={false}
              />
          </Box>


          <Text mb='8px' fontWeight={'bold'}>Image : </Text>
          <Box className='kotak input gambar'
              border={'1px solid grey'}
              mb={'20px'}
              borderRadius={'5px'}
              p={'5px'}
          >
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
          </Box>


          <Text mb='8px' fontWeight={'bold'}>Category:</Text>
          <Box className='kotak kategory'
              border={'1px solid grey'}
              mb={'20px'}
              borderRadius={'5px'}
          >
            <Select onChange={handleCategoryChange}>
              <option value="category1">Health</option>
              <option value="category2">Food</option>
              <option value="category3">Adopt</option>
            </Select>
          </Box>

          <Box className='kotak content'
          mt={'20px'}
          mb={'20px'}
          >
              <Text mb='8px' fontWeight={'bold'}>Content :</Text>
              <Textarea
                value={content}
                onChange={handleContentChange}
                placeholder='Tell your story...'
                size='md'
                h='80vh'
                border={'1px solid grey'}
              />
          </Box>

          <Box className='add video'
               mt={'20px'}
               mb={'20px'}
          >
          <Text mb='8px' fontWeight={'bold'}>Video : </Text>
              <Input
                type="url"
                placeholder="Add URL video"
                onChange={handleVideoChange}
                border={'1px solid grey'}
              />
          </Box>

          <Box className='add video'
              mt={'20px'}
              mb={'20px'}
          > 
            <Text mb='8px' fontWeight={'bold'}>Add Keywords : </Text>
            <Textarea
              placeholder="Enter keywords separated by commas"
              onChange={handleKeywordsChange}
              border={'1px solid grey'}
            />  


            
          </Box>







        </Box>
      </Box>
    </Box>
  );
};

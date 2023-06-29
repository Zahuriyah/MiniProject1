import React, { useState } from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Text, flexbox, useToast } from '@chakra-ui/react';
import Flag from '../logo/Berkas_Flag of Indonesia_svg - Wikipedia bahasa Indonesia, ensiklopedia bebas.png'
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export const RegisForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const toast = useToast() 

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      phone: Yup.string()
        .matches(/^[1-9][0-9]{8,11}$/, "Invalid phone number"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be 6 characters minimum")
        .matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])/, "Password must have at least one symbol and one uppercase letter"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref('password')], 'Password must match'),
    }),
  });



  const register = async () => {
    try {
      const res = await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth", {
        username: formik.values.username,
        email: formik.values.email,
        phone: formik.values.phone,
        password: formik.values.password,
        confirmPassword: formik.values.confirmPassword,    
    });
    
    console.log(res);
    toast({
        title: res.data.message,
        status: "success",
        duration: "2000",
        isClosable: true,
      });
    } 
    
    catch (err) {
      console.log(err);
      console.log(err.response.data);
      toast({
          title: "Error: " + err.response.data,
          status: "error",
          duration: "2000",
          isClosable: true,
        });
    }


  };

  return (
    <Box
      border='2px solid orange' w='700px' p={7}
      color='black' my='100' mx='20%'
      borderRadius={'20px'}
    >
      <Text fontWeight={'bold'} fontSize={'4xl'} display={'flex'}  justifyContent={'center'}>Register Form</Text>
  
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.username && formik.errors.username}>
          <FormLabel mt={'5'} className='username'>Username</FormLabel>
          <Input
            type='text'
            name="username"
            border={'1px'}
            borderColor={'black'}
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username && (
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          )}
        </FormControl>
  
        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel className='email' mt={'5'}>Email</FormLabel>
          <Input
            type='email'
            name="email"
            border={'1px'}
            borderColor={'black'}
            placeholder='Use an Active Email Address'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          )}
        </FormControl>
  
        <FormControl isInvalid={formik.touched.phone && formik.errors.phone}>
          <InputGroup htmlFor='phone' mt={'30px'}>
            <InputLeftElement
              pointerEvents="none"
              children={<img src={Flag} alt="Flag" width={20} />}
            />
            <InputLeftAddon children='+62' border={'1px solid black'} pl={'40px'} />
            <Input
              name="phone"
              type='number'
              placeholder='Example: 85xxxxxx'
              border={'1px solid black'}
              {...formik.getFieldProps('phone')}
            />
          </InputGroup>
          {formik.touched.phone && formik.errors.phone && (
            <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
          )}
        </FormControl>
  
        <FormControl isInvalid={formik.touched.password && formik.errors.password}>
          <FormLabel htmlFor='password' mt={'6'}>Password</FormLabel>
          <InputGroup className='PasswordArea' size='md'>
            <Input
              name="password"
              border={'1px solid black'}
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              variant="filled"
              placeholder='min. 6 character, min. 1 symbol, min. 1 uppercase.'
              {...formik.getFieldProps('password')}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {formik.touched.password && formik.errors.password && (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          )}
        </FormControl>
        <Text mt={'5px'} fontSize={'10px'} fontStyle={'italic'}>Example: Oreo@Chi</Text>
  
        <FormControl isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}>
          <FormLabel className='password' mt={'6'}>Confirm Password</FormLabel>
          <InputGroup className='confirmPasswordArea' size='md'>
            <Input
              name="confirmPassword"
              border={'1px solid black'}
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              {...formik.getFieldProps('confirmPassword')}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
          )}
        </FormControl>
  
        <Button
          type="submit"
          disabled={formik.isSubmitting}
          colorScheme='orange'
          w='full'
          mt={'50px'}
          onClick= {() => {register()}}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};
  



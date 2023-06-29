// import React from 'react'
// import {
//     Button,
//     Modal,
//     ModalBody,
//     ModalCloseButton,
//     ModalContent,
//     ModalFooter,
//     ModalHeader,
//     ModalOverlay,
//     FormControl,
//     FormLabel,
//     Input,
//     Text,
//     Flex,
//     FormErrorMessage,
//     Box,
//     VStack,
//   } from "@chakra-ui/react";
//   import { useState } from "react";
//   import { useNavigate } from "react-router-dom";

// import { useFormik,  resetForm } from 'formik';

// import axios from 'axios';

// import * as Yup from 'yup';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(7, "Password must be 7 characters minimum")
//     .max(15, "Password must be less than 16 characters")
//     .matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])/,
//       "Password must have at least one symbol and one uppercase letter")
//     .required("Password is required")
// });

// const fetchUser = async (email) => {
//   const { data } = await axios.get(`http://localhost:3000/users?email=${email}`);
//   console.log(data);
// }


//   export const ModalWrite = ({ isOpen, onClose }) => {
//    const navigate = useNavigate();
//    const toRegisterPage = () => {
//     navigate("/register")};
 
//     const formik = useFormik({
//       initialValues: {
//           email: '',
//           password: ''
//       },
//       validationSchema: LoginSchema,
//       onSubmit: (values, { resetForm }) => {
//         fetchUser(values.email);
//         localStorage.setItem("login", "true");
//         resetForm();
//       }
//   })

//     return (
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Login to Your ABOBULS</ModalHeader>
          
//           <ModalCloseButton />

//           <ModalBody>
//           <Box sx={{
//                       height: '325px',
//                       padding: '20px'
//           }}>

//             <form onSubmit={formik.handleSubmit}>
//               <VStack>
//                   <FormControl isInvalid={formik.touched.email && formik.errors.email}>
//                     <FormLabel htmlFor='email'>Email address</FormLabel>
//                     <Input 
//                         id="email"
//                         name="email"
//                         type="email"
//                         variant="filled"
//                         onChange={formik.handleChange}
//                         value={formik.values.email} />
//                         { 
//                             formik.touched.email && formik.errors.email && 
//                             <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//                         }
//                   </FormControl>
//                   <FormControl isInvalid={formik.touched.password && formik.errors.password}>
//                     <FormLabel>Password</FormLabel>
//                     <Input 
//                           id="password"
//                           name="password"
//                           type="password"
//                           variant="filled"
//                           onChange={formik.handleChange}
//                           value={formik.values.password}
//                     />
//                       { 
//                           formik.touched.password && formik.errors.password && 
//                           <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
//                       }
//                   </FormControl>

//                   <Flex gap={'2'}>
//                       <Text>No account?</Text>
//                       <Text onClick={toRegisterPage} color={'orange'} _hover={{ color: "#E55807" }} cursor={'pointer'}>Create one </Text>
//                   </Flex>

//                       <Button type="submit" colorScheme="orange" w={'full'}>
//                         Login
//                       </Button>


//               </VStack>

//             </form>

//             </Box>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     );
//   };




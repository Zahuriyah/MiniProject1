// import { 
//   Box, 
//   Modal, 
//   ModalContent, 
//   ModalBody, 
//   ModalCloseButton,
//   ModalHeader,
//   ModalOverlay,
//   FormControl, 
//   FormErrorMessage,
//   FormLabel, 
//   Form,
//   Input, 
//   VStack, 
//   Button } from '@chakra-ui/react';

// import { useFormik,  resetForm } from 'formik';

// import axios from 'axios';

// import * as Yup from 'yup';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(7, "Password must be 7 characters minimum")
//     .matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])/,
//       "Password must have at least one symbol and one uppercase letter")
//     .required("Password is required")
// });

// const fetchUser = async (email) => {
//   const { data } = await axios.get(`http://localhost:3000/users?email=${email}`);
//   console.log(data);
// }

// const ModalLogin = ({ isOpen, onClose }) => {
//   const formik = useFormik({
//       initialValues: {
//           email: '',
//           password: ''
//       },
//       validationSchema: LoginSchema,
//       onSubmit: (values, { resetForm }) => {
//           fetchUser(values.email);
//           localStorage.setItem("login", "true");
//           resetForm();
//       }
//   })
  
//   return (
//       <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//               <ModalHeader>Login Form</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody>
//                   <Box sx={{
//                       height: '325px',
//                       padding: '20px'
//                   }}>
//                       <form onSubmit={formik.handleSubmit}>
//                           <VStack>
//                               <FormControl sx={{
//                                   marginBottom: '25px'
//                               }}
//                               isInvalid={formik.touched.email && formik.errors.email}
//                               >
//                                   <FormLabel htmlFor='email'>Email :</FormLabel>
//                                   <Input 
//                                       id="email"
//                                       name="email"
//                                       type="email"
//                                       variant="filled"
//                                       onChange={formik.handleChange}
//                                       value={formik.values.email}
//                                   />
//                                   { 
//                                       formik.touched.email && formik.errors.email && 
//                                       <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//                                   }
//                               </FormControl>
//                               <FormControl sx={{
//                                   marginBottom: '25px'
//                               }}
//                               isInvalid={formik.touched.password && formik.errors.password}
//                               >
//                                   <FormLabel htmlFor='password'>Password :</FormLabel>
//                                   <Input 
//                                       id="password"
//                                       name="password"
//                                       type="password"
//                                       variant="filled"
//                                       onChange={formik.handleChange}
//                                       value={formik.values.password}
//                                   />
//                                   { 
//                                       formik.touched.password && formik.errors.password && 
//                                       <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
//                                   }
//                               </FormControl>
//                               <Button type="submit" width="full" colorScheme='orange'>Login</Button>
//                           </VStack>
//                       </form>
//                   </Box>
//               </ModalBody>
//           </ModalContent>
//       </Modal>
//   )
// }

// export default ModalLogin;
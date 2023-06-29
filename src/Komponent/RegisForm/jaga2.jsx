// import React from 'react';
// import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react';
// import Flag from '../logo/Berkas_Flag of Indonesia_svg - Wikipedia bahasa Indonesia, ensiklopedia bebas.png'

// import { useFormik,  resetForm} from 'formik';
// import axios from 'axios';
// import * as Yup from 'yup';


// const LoginSchema = Yup.object().shape({
//     username: Yup.string()
//         .required("Email is required"),
//     email: Yup.string()
//       .email("Invalid email address format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(7, "Password must be 7 characters minimum")
//       .max(15, "Password must be less than 16 characters")
//       .matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])/,
//         "Password must have at least one symbol and one uppercase letter")
//       .required("Password is required"),
//     phoneNumber: Yup.string()
//         .matches(/^[1-9][0-9]{8,11}$/, "Invalid phone number")
//         .required("Phone number is required")
//   });
  
//   const fetchUser = async (email) => {
//     const { data } = await axios.get(`http://localhost:3000/users?email=${email}`);
//     console.log(data);
//   }


// export const RegisForm = () => {
//     const [show, setShow] = React.useState(false)
//     const handleClick = () => setShow(!show)
//     const [value, setValue] = React.useState('1')

//     const formik = useFormik({
//         initialValues: {
//             username: '',
//             email: '',
//             password: '',
//             phoneNumber: ''
//         },
//         validationSchema: LoginSchema,
//         onSubmit: (values, { resetForm }) => {
//             fetchUser(values.email);
//             localStorage.setItem("login", "true");
//             resetForm();
//         }
//     })



//   return (
//     <Box 
//         border='2px solid orange' w='500px' h='650px' p={4} 
//         color='black' my='100' mx='30%' 
//         borderRadius={'20px'}
//     >
        
//         <Text as='b'fontSize={'4xl'} ml={'150px'}>Sign Up</Text>

//         <form onSubmit={formik.handleSubmit}>
//         <FormControl 
//             isInvalid={formik.touched.username && formik.errors.username}
//         >
//             <FormLabel mt={'5'} htmlFor='username'>Username</FormLabel>
//             <Input 
//                 id="username"
//                 name="username"
//                 type='text' 
//                 border={'1px'} 
//                 borderColor={'black'} 
//                 onChange={formik.handleChange}
//                 value={formik.values.username}
//             />
//              { 
//             formik.touched.username && formik.errors.username && 
//             <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
//         }
//         </FormControl>

//         <FormControl isInvalid={formik.touched.email && formik.errors.email}>
//             <FormLabel htmlFor='email' mt={'5'}>Email</FormLabel>
//             <Input 
//             id="email"
//             name="email"
//             type='email' 
//             border={'1px'} 
//             borderColor={'black'} 
//             placeholder='Use an Active Email Address'
//             variant="filled"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             />

//         { 
//             formik.touched.email && formik.errors.email && 
//             <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//         }
//         </FormControl>


//         <FormControl isInvalid={formik.touched.password && formik.errors.password}>
//             <FormLabel htmlFor='password' mt={'6'}>Password</FormLabel>
//             <InputGroup className='PasswordArea'size='md'>
//                 <Input
//                     id="password"
//                     name="password"
//                     pr='4.5rem'
//                     type={show ? 'text' : 'password'}
//                     variant="filled"
//                     onChange={formik.handleChange}
//                     value={formik.values.password}
//                     placeholder='min. 6 character, min. 1 symbol, min. 1 uppercase.'
//                 />
//                 <InputRightElement width='4.5rem'>
//                     <Button h='1.75rem' size='sm' onClick={handleClick}>
//                     {show ? 'Hide' : 'Show'}
//                     </Button>
//                 </InputRightElement>
//             </InputGroup>

//             { 
//                 formik.touched.password && formik.errors.password && 
//                 <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
//             }
//         </FormControl>

//         <Text mt={'5px'} fontSize={'10px'} fontStyle={'italic'}>Example: Oreo@Chi</Text>


//         <FormControl isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}>
//             <InputGroup htmlFor='phoneNumber' mt={'30px'}>
//                 <InputLeftElement
//                 pointerEvents="none"
//                 children={<img src={Flag} alt="Flag" width={20} />}
//                 />
//                 <InputLeftAddon children='+62' border={'1px solid black'} pl={'40px'} />
//                 <Input 
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     type='tel' 
//                     placeholder='Example: 85xxxxxx' 
//                     border={'1px solid black'}
//                     variant="filled"
//                     onChange={formik.handleChange}
//                     value={formik.values.phoneNumber}
//                 />
//             </InputGroup>
//             { 
//                 formik.touched.phoneNumber && formik.errors.phoneNumber && 
//                 <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
//             }
//         </FormControl>



//         <Button  type="submit" colorScheme='orange' w='full' mt={'60px'} >Register</Button>
       
//         </form>

//     </Box>

//   )
// };

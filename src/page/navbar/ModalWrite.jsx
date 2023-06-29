import { 
  Box, 
  Modal, 
  ModalContent, 
  ModalBody, 
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  FormControl, 
  FormErrorMessage,
  FormLabel, 
  Input, 
  VStack, 
  Button, 
  useToast,
  Flex,
  Text
} from '@chakra-ui/react';

import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { userLogin } from '../../redux/reducer/UserReducer';


const ModalWrite = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const toRegisterPage = () => {
     navigate("/register")};

    const toast = useToast();
    const dispatch = useDispatch();

    const login = async () => {
            try{
                const res = await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/login", {
                    email: formik.values.email,
                    password: formik.values.password,
            }
                )

                toast({
                    title: "Welcome to Your Beauty Journey!" ,
                    status: "success",
                    duration: "2000",
                    isClosable: true,
                  });
                  dispatch(userLogin(res.data.token))
                  console.log(res)
                  navigate("/")
            }

                catch(err){
                    toast({
                        title: `Failed to login: ` + err.response.data.err  ,
                        status: "error",
                        duration: "2000",
                        isClosable: true,
                      });
                    console.log(err)
                }
    }; //Akhir dari const async


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        // validation schema
        validationSchema: Yup.object({
            email: Yup.string()
              .email("Invalid email address format")
              .required("Email is required"),
            password: Yup.string()
              .min(7, "Password must be 7 characters minimum")
              .matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])/,
                "Password must have at least one symbol and one uppercase letter")
              .required("Password is required")
          }),

          //handle submission
          onSubmit: login
    }); //Akhir const formik
      

  
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
              <ModalHeader mt={'15px'} mb={'-1'} >Lets Login to Your ABOBULS Acount First</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <Box sx={{
                      minHeight: 'auto',
                      height: 'auto',
                      padding: '20px'
                  }}>
                      <form onSubmit={formik.handleSubmit}>
                          <VStack>
                              <FormControl sx={{
                                  marginBottom: '25px'
                              }}
                              isInvalid={formik.touched.email && formik.errors.email}
                              >
                                  <FormLabel htmlFor='email'>Email :</FormLabel>
                                  <Input 
                                      name="email"
                                      type="email"
                                      variant="filled"
                                      {...formik.getFieldProps('email')}
                                      onChange={formik.handleChange}
                                  />
                                  { 
                                      formik.touched.email && formik.errors.email && 
                                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                  }
                              </FormControl>

                              <FormControl sx={{
                                  marginBottom: '25px'
                              }}
                              isInvalid={formik.touched.password && formik.errors.password}
                              >
                                  <FormLabel htmlFor='password'>Password :</FormLabel>
                                  <Input 
                                      name="password"
                                      type="password"
                                      variant="filled"
                                      {...formik.getFieldProps('password')}
                                      onChange={formik.handleChange}
                                  />
                                  { 
                                      formik.touched.password && formik.errors.password && 
                                      <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                                  }
                              </FormControl>

                                <Flex gap={'2'}>
                                    <Text>No account?</Text>
                                    <Text onClick={toRegisterPage} color={'orange'} _hover={{ color: "#E55807" }} cursor={'pointer'}>Create one </Text>
                                </Flex>



                              <Button onClick={({ isOpen, onClose }) => 
                                    {login()}} type="submit" disabled={formik.isSubmitting} 
                                        mt={'5'} width="full" colorScheme='orange'>
                                            Login
                                </Button>
                          </VStack>
                      </form>
                  </Box>
              </ModalBody>
          </ModalContent>
      </Modal>
  )
}

export default ModalWrite;
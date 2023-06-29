// import { Box, Button, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react';
// import { Nav4 } from './navbar/Nav4';

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { makeArticle } from '../redux/reducer/ArticleReducer';


// export function withAuth(Component) {
//   return function WrappedComponent(props) {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     const navigate = useNavigate();

//     useEffect(() => {
//       if (!isAuthenticated) {
//         navigate("/login");
//       }
//     }, [isAuthenticated, navigate]);

//     if (!isAuthenticated) {
//       return null;
//     }
//     return <Component {...props} />;
//   };
// }


// //GERBANG 
// export default function CreateBlog() {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const dispatch = useDispatch();

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(URL.createObjectURL(file));
//   };

//   const [category, setCategory] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(
//         "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
//       );
//       setCategory(res.data);
//     } catch (error) {
//       alert("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       title: document.getElementById("title").value,
//       content: document.getElementById("content").value,
//       country: document.getElementById("country").value,
//       CategoryId: selectedOption,
//       url: "/",
//       keywords: document.getElementById("keywords").value,
//     };
//     const file = document.getElementById("file").files[0];
//     dispatch(makeArticle(data, file));
//   };

//   return (
//     <Box className='MainContainerCreateBlog'>
//       <Box bg='#EEE9DA' h='1vh'>
//         <Nav4 />
//       </Box>

//       <Box bg='#EEE9DA' h='2000px' pt='50px' >
//         <Box mt='100px' ml='160px' border={'2px solid orange'}
//           borderRadius={'20px'}
//           w={'900px'}
//           minHeight= {'auto'}
//           h= {'auto'}
//           p={'50px'}
//           shadow={'2xl'}
//         >
//           {/* Tulisan Create Center */}
//           <Box display={"flex"} justifyContent={'center'}>
//             <Text mr={4} fontSize={"4xl"} mb={4} fontWeight={'bold'}>
//               Create Article
//             </Text>
//           </Box>

//           <form onSubmit={handleSubmit}>

//             {/* Image*/}
//             <Box>
//               <Text mb='8px' fontWeight={'bold'}>Image : </Text>
//               <Box className='kotak input gambar'
//                 border={'1px solid grey'}
//                 mb={'20px'}
//                 borderRadius={'5px'}
//                 p={'5px'}
//               >
//                 <Input
//                   type="file"
//                   id="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                 />
//               </Box>
//               {selectedImage && (
//                 <Box mb={6} position={"relative"}>
//                   <img
//                     src={selectedImage}
//                     alt="Image Preview"
//                     style={{
//                       maxWidth: "332px",
//                       maxHeight: "300px",
//                       marginTop: "10px",
//                     }}
//                   />
//                 </Box>
//               )}
//             </Box>


//             {/* Title */}
//             <Box  mt={'20px'} mb={'20px'}>
//               <Text mb='8px' fontWeight={'bold'}>Title : </Text>
//               <Input
//                 type="text"
//                 id="title"
//                 fontSize='2xl'
//                 border={'1px solid grey'}
//               />
//             </Box>


//             {/* Category*/}
//             <Text mb='8px' fontWeight={'bold'}>Category:</Text>
//             <Box className='kotak kategory'
//               border={'1px solid grey'}
//               mb={'20px'}
//               borderRadius={'5px'}
//             >
//               <Select 
//               value={selectedOption}
//               onChange={handleOptionChange}
//               >
//                 <option value="">Select Category</option>
//                 {category &&
//                   category.map((item) => (
//                     <option key={item.id} value={item.id}>
//                       {item.name}
//                     </option>
//                   ))}
//               </Select>
//             </Box>


//             {/* Keyword*/}
//             <Box 
//               mt={'20px'}
//               mb={'20px'}
//             > 
//               <Text mb='8px' fontWeight={'bold'}>Keyword : </Text>
//               <Input
//                 type="text"
//                 placeholder="Add Keywords"
//                 id="keywords"
//                 mb={"10px"}
//                 border={'1px solid grey'}
//               />            
//             </Box>



//             {/* Country of Origin*/}
//             <Box>
//               <Text mb='8px' fontWeight={'bold'}>Country of Origin : </Text>
//               <Input
//                 type="text"
//                 placeholder="Country of Origin"
//                 id="country"
//                 mb={"10px"}
//                 border={'1px solid grey'}
//               />
//             </Box>

//             {/* Content*/}
//             <Box
//               mt={'20px'}
//               mb={'20px'}
//             >
//               <Text mb='8px' fontWeight={'bold'}>Content :</Text>
//               <Textarea
//                 id="content"
//                 placeholder='Tell your story...'
//                 size='md'
//                 h='80vh'
//                 border={'1px solid grey'}
//               />
//             </Box>

//             <Button colorScheme="green" type="submit" w={'full'} mt={'30px'}>
//               PUBLISH
//             </Button>

//           </form>
//         </Box>
//       </Box>
//     </Box>
//   );
// };


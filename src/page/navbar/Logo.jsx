import React from 'react'
import logo from '../../Komponent/logo/cat.png';
import {Image} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";


export default function Logo() {
  const navigate = useNavigate();
  const toLandingPage = () => {
    navigate("/")};
  return (
    <div>
        <Image onClick={toLandingPage} src={logo} alt="Logo" w='100px' cursor={'pointer'}/>  
    </div>
  )
}

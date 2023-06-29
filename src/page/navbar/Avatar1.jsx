import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Menu, MenuButton, Button, MenuList, MenuItem, Image, AvatarBadge } from '@chakra-ui/react'
import React from 'react'
import { RxAvatar } from 'react-icons/rx';
import {LuBookMarked} from 'react-icons/lu'
import {AiOutlineSetting} from 'react-icons/ai'
import {GoSignOut} from 'react-icons/go'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/reducer/UserReducer';

export const Avatar1 = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(userLogout ())
  }

  return (
    <Menu>
      <MenuButton as={Button} variant={'unstyled'} rightIcon={<ChevronDownIcon />} display={'flex'} alignItems={'center'}>
          {/* <Avatar width={'40px'} height={'40px'} cursor={'pointer'} /> */}
          <Avatar src='https://i.pinimg.com/564x/1d/40/1c/1d401c14ff74241a297e6789b1f9645d.jpg' >
              <AvatarBadge boxSize='4' bg='green.500' cursor={'pointer'} />
          </Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem minH='48px' gap={'20px'}>
          <RxAvatar  fontSize='2rem' />
          <span>Profile</span>
        </MenuItem>
        <MenuItem minH='40px' gap={'25px'}> 
          <LuBookMarked fontSize='25px' />
          <span>Library</span>
        </MenuItem>
        <MenuItem minH='40px' gap={'25px'} >
          <AiOutlineSetting fontSize='25px'/>
          <span>Settings</span>
        </MenuItem>
        <MenuItem 
        minH='40px' gap={'25px'}
        onClick={ logout
        }
        >
          < GoSignOut fontSize='25px' />
          <span>Sign out</span>
        </MenuItem>
      </MenuList>
</Menu>


  )
}


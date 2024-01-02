import React from 'react'
import {ReactComponent as Farmely} from '../../assets/imgs/Farmely2.svg'
import styled from 'styled-components'
import {HiOutlineShoppingCart, HiOutlineMenu} from 'react-icons/hi'
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <NavbarContainer>
      <Header>
        <Link to='/'>
          <Farmely/>
        </Link>
        <LoginBox>
          <NavLink to='/login'>
            로그인
          </NavLink>
          <HiOutlineShoppingCart font-size='1.5rem'/>
        </LoginBox>
      </Header>
      <Menu>
        <HiOutlineMenu font-size='1.5rem'/>
        <NavLink to='/intro'>
          파밀리 소개
        </NavLink>
        <NavLink to='/funding'>
          마을의 펀딩
        </NavLink>
        <NavLink to='/popup'>
          마을의 팝업
        </NavLink>
      </Menu>

    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width : 100vw;
  height : 10rem;
  justify-content: center;
  gap: 3.2rem;
  overflow: hiddlen;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
`

const Header = styled.div`
  display: flex;
  
  a{
    font-weight: 500;
    color: #686868;
  }
`


const LoginBox = styled.div`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  right: 11rem;
  justify-contents : center;
  align-items: center;
  a{
    color: #686868;
  }
`

const Menu = styled.nav`
  display: flex;
  gap: 20rem;
  a{
    font-size: 1.25rem;
    color: black;
    font-weight: 500;
  }

  svg{
  }
`

const MypageBox = styled.nav`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  left: 11rem;
  align-items: center
  a{
    font-weight: 500;
    color: #686868;
  }
  

`


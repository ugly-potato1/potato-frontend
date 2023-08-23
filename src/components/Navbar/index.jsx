import React from 'react'
import {ReactComponent as Farmely} from '../../assets/imgs/Farmely.svg'
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
          <TextBtn>
            <NavLink to='/*'>
              회원가입
            </NavLink>
            <div>|</div>
            <NavLink to='/login'>
              로그인
            </NavLink>
          </TextBtn>
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
          팝업
        </NavLink>
      </Menu>

    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  align-items: center;
  justify-content: center;
  margin: 0 11rem;
  gap: 3.5rem;

`

const Header = styled.div`
  display: flex;
`


const LoginBox = styled.div`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  right: 11rem;
`

const TextBtn = styled.div`
  display: flex;
  gap: 0.75rem;
  color: #686868;
`

const Menu = styled.nav`
  display: flex;
  gap: 12rem;
  justify-content: center;
  align-items: center;
  a{
    font-size: 1.25rem;
  }

  svg{
    position: absolute;
    left:11rem;
  }
`
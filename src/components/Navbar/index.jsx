import React from 'react';
import { ReactComponent as Farmely } from '../../assets/imgs/Farmely2.svg';
import styled from 'styled-components';
import { HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi';
import { NavLink, Link, useMatch } from 'react-router-dom';

export default function Navbar() {
  const communityMatch = useMatch('/community');
  const farmelyMatch = useMatch('/intro');
  const fundingBuyingMatch = useMatch('/funding/buying');
  const popupMatch = useMatch('/popup');
  return (
    <NavbarContainer>
      <Header>
        <Link to="/">
          <Farmely />
        </Link>
        <LoginBox>
          <NavLink to="/login">로그인</NavLink>
          <HiOutlineShoppingCart font-size="1.5rem" />
        </LoginBox>
      </Header>
      <Menu>
        <HiOutlineMenu font-size="1.5rem" />
        <NavLink
          to="/intro"
          style={{ color: farmelyMatch ? '#ff4256' : 'black' }}
        >
          파밀리 소개
        </NavLink>
        <NavLink
          to="/funding/buying"
          style={{ color: fundingBuyingMatch ? '#ff4256' : 'black' }}
        >
          제철과일 구매
        </NavLink>
        <NavLink
          to="/community"
          style={{ color: communityMatch ? '#ff4256' : 'black' }}
        >
          커뮤니티
        </NavLink>
        <NavLink
          to="/popup"
          style={{ color: popupMatch ? '#ff4256' : 'black' }}
        >
          파밀리 팝업
        </NavLink>
      </Menu>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10rem;
  justify-content: center;
  gap: 3.2rem;
  overflow: hiddlen;
  margin-bottom: 28px;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
`;

const Header = styled.div`
  display: flex;

  a {
    font-weight: 500;
    color: #686868;
  }
`;

const LoginBox = styled.div`
  display: flex;
  position: relative;
  gap: 1.5rem;
  left: 130%;
  justify-content: center;
  align-items: center;
  a {
    color: #686868;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 65%;
  a {
    font-size: 1.25rem;
    color: black;
    font-weight: 500;
  }

  svg {
  }
`;

const MypageBox = styled.nav`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  left: 11rem;
  align-items: center a {
    font-weight: 500;
    color: #686868;
  }
`;

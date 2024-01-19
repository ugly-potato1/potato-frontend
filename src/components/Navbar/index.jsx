import React from 'react';
import { ReactComponent as Farmely } from '../../assets/imgs/Farmely2.svg';
import styled from 'styled-components';
import { HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserLoginState } from '../../stores/Login/atom';

export default function Navbar() {
  const [isLogin, setIsLogin] = useRecoilState(UserLoginState);
  const navigate = useNavigate();
  const handleCart = () => {
    if (!isLogin) {
      alert('먼저 로그인 하세요');
    } else {
      navigate('/funding/buying');
    }
  };
  const handleLogout = () => {
    // 백엔드주소로 logout요청
    setIsLogin(false);
    navigate('/');
  };
  return (
    <NavbarContainer>
      <Header>
        <Logo>
          <Link to="/">
            <Farmely />
          </Link>
        </Logo>
        <LoginBox>
          {!isLogin ? (
            <NavLink to="/login">로그인</NavLink>
          ) : (
            <NavLink to="/mypage">마이페이지</NavLink>
          )}
          <HiOutlineShoppingCart
            font-size="1.5rem"
            onClick={handleCart}
            className="icon-pointer"
          />
          {isLogin && (
            <FiLogOut onClick={handleLogout} className="icon-pointer" />
          )}
        </LoginBox>
      </Header>
      <Menu>
        <HiOutlineMenu font-size="1.5rem" />
        <NavLink to="/intro">파밀리 소개</NavLink>
        <NavLink to="/funding/buying">제철과일 구매</NavLink>
        <NavLink to="/community">커뮤니티</NavLink>
        <NavLink to="/popup">파밀리 팝업</NavLink>
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
    color: #686868;
    text-decoration: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  a {
    font-weight: 500;
  }
`;
const Logo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const LoginBox = styled.div`
  display: flex;
  position: relative;
  gap: 1.5rem;
  left: 220px;
  justify-content: center;
  align-items: center;
  .icon-pointer {
    cursor: pointer;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 65%;
  a {
    font-size: 1.25rem;
    font-weight: 500;
  }
  a.active {
    color: #ff4256;
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

import React from 'react';
import styled from 'styled-components';
import LoginImg from '../../assets/imgs/login_bg.png';
import { ReactComponent as LoginChar } from '../../assets/imgs/login_char.svg';
import { ReactComponent as LoginStartMsg } from '../../assets/imgs/login_start_msg.svg';
import KakaoImg from '../../assets/imgs/kakao_login.png';
import NaverImg from '../../assets/imgs/naver_login.png';

export default function Login() {
  const handleKakaoLogin = () => {
    // kakao login api 연결
    const baseUrl = 'https://kauth.kakao.com/oauth/authorize';
    const config = {
      client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URL,
      response_type: 'code',
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;

    window.location.href = finalUrl;
  };

  const handleNaverLogin = () => {
    // naver login api 연결
  };

  return (
    <>
      <LoginContainer>
        <LoginBg />
        <Overlay />
        <LoginWrapper>
          <p>로그인</p>
          <LoginChar />
          <LoginBtn>
            <LoginStartMsg />
            <SocialLogin onClick={handleKakaoLogin} socialImg={KakaoImg} />
            <SocialLogin onClick={handleNaverLogin} socialImg={NaverImg} />
          </LoginBtn>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  position: relative;
  height: calc(100vh - 10rem);
`;

const LoginBg = styled.div`
  background: no-repeat;
  background-size: 100vw;
  background-image: url(${LoginImg});
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(47, 23, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
`;

const LoginWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  top: 4rem;
  color: white;
  font-size: 1.875rem;
  font-weight: 900;
  text-align: center;

  p {
    margin-bottom: 0.8rem;
  }

  svg {
    margin: 0 auto;
  }
`;

const LoginBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 2.6rem;
`;

const SocialLogin = styled.img.attrs((props) => ({
  src: props.socialImg,
}))`
  width: 25rem;
  height: 3.75rem;
  cursor: pointer;
  margin-bottom: 10px;
`;

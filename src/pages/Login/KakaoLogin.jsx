import { useNavigate, useSearchParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserLoginState } from '../../stores/Login/atom';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(UserLoginState);
  const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const code = useSearchParams()[0].get('code');

  const getKakaoToken = async () => {
    const baseUrl = 'https://kauth.kakao.com/oauth/token';
    const config = {
      grant_type: 'authorization_code',
      client_id,
      redirect_uri,
      code,
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    const { data: tokenRequest } = await axios.post(finalUrl);

    console.log('tokenRequest', tokenRequest);
    // 백엔드 연동 필요
    setIsLogin(true);
    navigate('/');
  };

  useEffect(() => {
    getKakaoToken();
  });

  return (
    <CenteredContainer>
      <Loader />
      <Message>Please Wait...</Message>
    </CenteredContainer>
  );
};

export default KakaoLogin;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Message = styled.div`
  font-size: 36px;
  color: #333; // 텍스트 색상
  position: absolute;
  bottom: 30%;
  font-weight: bold;
`;
const Jump = keyframes`
  15% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;
const Shadow = keyframes`
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
`;
const Loader = styled.div`
  width: 120px;
  height: 120px;
  margin: auto;
  position: relative;

  &:before {
    content: '';
    width: 120px;
    height: 10px;
    background: #f0808050;
    position: absolute;
    top: 140px;
    left: 0;
    border-radius: 50%;
    animation: ${Shadow} 0.5s linear infinite;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: #f08080;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: ${Jump} 0.5s linear infinite;
  }
`;

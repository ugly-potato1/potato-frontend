import { useNavigate, useSearchParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserLoginState } from '../../stores/Login/atom';
import { axiosInstance } from '../../apis';
import { useMutation } from '@tanstack/react-query';
import { handleLogin, handleSilentRefresh } from '../../apis/Login';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(UserLoginState);
  const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const code = useSearchParams()[0].get('code');

  const { mutate: SlientRefresh } = useMutation({
    mutationFn: handleSilentRefresh,
    onSuccess: (data) => {
      try {
        //LoginSuccess({});
      } catch {}
    },
    onError: (err) => {
      console.log('리프레쉬 토큰 요청 실패!', err);
    },
  });
  const { mutate: LoginSuccess } = useMutation({
    mutationFn: handleLogin,
    onSuccess: (data) => {
      console.log('카카오 로그인 요청 성공!');
      console.log('서버로 부터 받은 데이터 값', data);
      //const { accessToken } = response.data; // 서버로 부터 받은 로그인 accessToken
      // axiosInstance.defaults.headers.common[
      //   'Authorization'
      // ] = `Bearer ${accessToken}`;
      // setTimeout(() => {
      //   try {
      //     SlientRefresh({});
      //   } catch (err) {
      //     console.log('slient refresh 에러', err);
      //   }
      // }, JWT_EXPIRRY_TIME - 60000);
    },
    onError: (err) => {
      console.log('카카오 로그인 요청 실패!', err);
    },
  });

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

    console.log('인가코드로 받은 카카오 토큰', tokenRequest);

    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${tokenRequest.access_token}`;

    return tokenRequest;
    // const { data: userInfo } = await axios.get(
    //   `https://kapi.kakao.com/v2/user/me`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${tokenRequest.access_token}`,
    //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //     },
    //   }
    // );

    // console.log('userInfo', userInfo);
    // console.log('userInfoID', userInfo.id);

    // const user_email =
    //   userInfo.kakao_account.is_email_valid &&
    //   userInfo.kakao_account.is_email_verified
    //     ? userInfo.kakao_account.email
    //     : '';

    // const { data: agreementInfo } = await axios.get(
    //   `https://kapi.kakao.com/v2/user/scopes`,
    //   { headers: { Authorization: `Bearer ${tokenRequest.access_token}` } }
    // );

    // console.log('agreementInfo', agreementInfo);

    // const { data: serviceInfo } = await axios.get(
    //   `https://kapi.kakao.com/v2/user/service_terms`,
    //   { headers: { Authorization: `Bearer ${tokenRequest.access_token}` } }
    // );
    // console.log('serviceInfo', serviceInfo);

    // console.log('here', tokenRequest.access_token);

    // axiosInstance.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${tokenRequest.access_token}`;
  };

  useEffect(() => {
    const fetchTokenAndLogin = async () => {
      try {
        const tokenRequest = await getKakaoToken();
        LoginSuccess({
          providerName: 'kakao',
          serviceUsingAgree: 'Y',
          personalInformationAgree: 'N',
          marketingAgree: 'Y',
          access_token: tokenRequest.access_token,
        });
        setIsLogin(true);
        navigate('/');
      } catch (err) {
        console.log('카카오 로그인 에러!!', err);
      }
    };

    fetchTokenAndLogin();
  }, [navigate, LoginSuccess, setIsLogin]);

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

import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const KakaoLogin = () => {
  const navigate = useNavigate();
  const client_id = process.env.KAKAO_REST_API_KEY;
  const redirect_uri = process.env.KAKAO_REDIRECT_URI;
  const code = useSearchParams()[0].get("code");

  const getKakaoToken = async () => {
    const baseUrl = "https://kauth.kakao.com/oauth/token";
    const config = {
      grant_type: "authorization_code",
      client_id,
      redirect_uri,
      code,
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    const { data: tokenRequest } = await axios.post(finalUrl);

    //
    console.log(tokenRequest);
    navigate("/");

    /* 백엔드와의 연동의 경우 위의 // 표시 아래줄 삭제후 아래의 코드 작성 필요
    return tokenRequest;
    */
  };

  useEffect(() => {
    getKakaoToken();
  });

  /*
  useEffect(() => {
    (async() => {
      token = getKakaoToken();
      try{
        const {data: jwt} = await axios.get('백엔드에서 요청하는 주소') // data는 백엔드에서 오는 jwt
        localstorage.setItem("token", jwt);
        navigate("/");
      }
      catch(error){        
        console.log("로그인 실패")
        navigate("/login")
      }
    })()    
  })
  */
  /*
  이외에도 메인페이지에서 localstorage.getItem("token")의 값이 null이 아닌 경우 네비게이션바에 로그인 대신 로그아웃으로 설정 필요
  로그아웃 클릭시 localstorage.removeItem("token")으로 로그아웃
  추가로 localstorage가 아닌 recoil을 사용해서 해당 atom에 저장하도록 구현하는 방법이 더 선호됨
 */
  return <Loading>Loading...</Loading>;
};

export default KakaoLogin;

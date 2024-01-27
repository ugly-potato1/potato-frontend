import { axiosInstance } from '..';

export const handleLogin = async (data) => {
  //   const { accessToken } = response.data; // 서버로 부터 받은 로그인 accessToken
  //   axiosInstance.defaults.headers.common[
  //     'Authorization'
  //   ] = `Bearer ${accessToken}`;
  // accessToken 만료하기 1분 전에 로그인 연장
  //setTimeout(handleSilentRefresh, JWT_EXPIRRY_TIME - 60000);
};

export const handleSilentRefresh = async (data) => {
  //   axiosInstance
  //     .post('', data)
  //     .then(handleLogin)
  //     .catch((error) => {
  //       console.log(error);
  //     });
};

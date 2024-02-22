import { axiosInstance } from '..';

export const handleLogin = async (data) => {
  const { access_token, ...restOfTheObject } = data;

  console.log('서버로 보내는 값', restOfTheObject);
  console.log('서버로 보내는 토큰11', access_token);

  return axiosInstance.post(`/api/v1/auth/register`, restOfTheObject, {
    headers: { Authorization: `Bearer ${access_token}` },
    withCredentials: true,
  });
};

export const handleSilentRefresh = async (data) => {
  return axiosInstance.post('', data, { withCredentials: true });
};

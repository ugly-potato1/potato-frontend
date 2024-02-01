import { axiosInstance } from '..';

export const handleLogin = async (data) => {
  console.log('서버로 보내는 값', data);
  console.log('서버로 보내는 토큰11', data.access_token);

  return axiosInstance.post(`/api/v1/auth/register`, data, {
    headers: { Authorization: `Bearer ${data.access_token}` },
    withCredentials: true,
  });
};

export const handleSilentRefresh = async (data) => {
  return axiosInstance.post('', data, { withCredentials: true });
};

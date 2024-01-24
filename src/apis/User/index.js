import axios from 'axios';

export const getUserInfo = async () => {
  const { data } = await axios.get(`/api/v1/user/profile`);
  return data;
};

export const postUserInfo = async () => {
  return axios.post();
};

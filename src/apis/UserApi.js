import axiosInstance from './axiosInstance';

const ACCESS_TOKEN = ``;

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get(``);
  return data;
};

export const postUserInfo = async (userInfo) => {
  const { data } = await axiosInstance.post(``, {
    userInfo,
  });
  return data;
};

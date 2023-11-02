import axios from "axios";

const ACCESS_TOKEN = ``;

export const getUserInfo = async () => {
  const { data } = await axios.get(``, {
    headers: {
      Accept: "application/json",
      Authorization: ACCESS_TOKEN,
    },
  });
  return data;
};

export const postUserInfo = async userInfo => {
  const { data } = await axios.post(``, {
    userInfo,
  });
  return data;
  ``;
};

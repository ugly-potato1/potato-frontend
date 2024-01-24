import { axiosInstance } from '..';

export const fetchDeleteAddress = (addressId) => {
  return axiosInstance.delete(`/api/v1/addresses/${addressId}`);
};

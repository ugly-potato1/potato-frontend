import { axiosInstance } from '..';

export const fetchDeleteAddress = (addressId) => {
  return axiosInstance.delete(`/api/v1/addresses/${addressId}`);
};

export const fetchAddAddress = (address) => {
  return axiosInstance.post('/api/v1/addresses', { address });
};

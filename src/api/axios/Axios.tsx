// export const API_URL = 'https://api.crm.itechacademy.uz/api/v1/user/list?offset=0&limit=12&role=manager';
import axios from "axios";
 const token = localStorage.getItem('token');
export const axiosInstance = axios.create({
    baseURL:'https://api.crm.itechacademy.uz/',
    headers: {
      Authorization: `Bearer ${token}`,
      ['Content-Type']:"multipart/form-data",
    },
  });
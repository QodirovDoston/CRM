// import axios, { AxiosResponse } from 'axios';

// enum ErrorStatus {
//   Unauthorized = 401,
//   Forbidden = 403,
//   InternalServerError = 500,
// }

// function handleErrorResponse(status: number): string | void {
//   switch (status) {
//     case ErrorStatus.Unauthorized:
//       return 'Logout or refresh token';
//     case ErrorStatus.Forbidden:
//       return 'Frontend developer sent data incorrectly!';
//     case ErrorStatus.InternalServerError:
//       return 'Internal server Error!';
//     default:
//       'Unhandled error status:';
//   }
// }
// export const baseURL = import.meta.env.VITE_API || 'https://api.crm.itechacademy.uz/api/v1/user/sign-in';

// const ConfigApi = axios.create({
//   baseURL,
// });

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// ConfigApi.interceptors.request.use(async (config: any) => {
//   config.headers = {
//     Accept: 'application/json',
//     'Accept-Encoding': 'identity',
//     ...(localStorage.getItem('token')
//       ? { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       : {}),
//   };
//   return await config;
// });

// ConfigApi.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response.data;
//   },
//   (error) => {
//     const status = error.response?.status;
//     if (status) {
//       handleErrorResponse(status);
//     }
//     return Promise.reject(error);
//   }
// );

// export default ConfigApi;
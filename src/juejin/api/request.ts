import axios from 'axios';

// 创建实例
const axioInstance = axios.create({
  baseURL: 'https://api.juejin.cn/',
  timeout: 5000,
  headers: { Cookie: process.env.JUEJIN_COOKIE },
});

// 响应拦截器
axioInstance.interceptors.response.use(
  function (response) {
    if (response.data.err_no && response.data.err_no !== 0) {
      console.log(response.data.err_msg || '掘金 API 响应异常');

      return new Promise(() => {
        // ignore
      });
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export { axioInstance as request };

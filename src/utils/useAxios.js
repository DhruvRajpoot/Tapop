import axios from "axios";

const useAxios = () => {
  const instances = axios.create({
    // baseURL: "http://localhost:10000",
    baseURL: "https://tapop-server.onrender.com",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST',
    },
  });

  instances.interceptors.request.use(async (request) => {
    return request;
  });

  return instances;
};

export default useAxios;

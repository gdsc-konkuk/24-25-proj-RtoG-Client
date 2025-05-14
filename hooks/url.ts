const serverIp = "34.22.111.163";
const apiUrl = `http://${serverIp}:8000/api/v1`;
const baseUrl = `http://${serverIp}:8000`;

const useApiUrl = (path: string) => {
  return `${apiUrl}/${path}`;
};

const useBaseUrl = (path: string) => {
  return `${baseUrl}${path}`;
};

export { useApiUrl, useBaseUrl, serverIp };

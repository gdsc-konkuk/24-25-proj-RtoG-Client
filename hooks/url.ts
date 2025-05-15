const serverIp = "rtg.bumsiku.kr";
const apiUrl = `https://${serverIp}/api/v1`;
const baseUrl = `https://${serverIp}`;
const wsUrl = `ws://${serverIp}/ws`;

const useApiUrl = (path: string) => {
  return `${apiUrl}/${path}`;
};

const useBaseUrl = (path: string) => {
  return `${baseUrl}${path}`;
};

const useWsUrl = (path: string) => {
  return `${wsUrl}/${path}`;
};

export { useApiUrl, useBaseUrl, useWsUrl, serverIp };

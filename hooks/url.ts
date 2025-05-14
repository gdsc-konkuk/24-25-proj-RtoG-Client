const apiUrl = "http://127.0.0.1:8000/api/v1";
const baseUrl = "http://127.0.0.1:8000";

const useApiUrl = (path: string) => {
  return `${apiUrl}/${path}`;
};

const useBaseUrl = (path: string) => {
  return `${baseUrl}${path}`;
};

export { useApiUrl, useBaseUrl };

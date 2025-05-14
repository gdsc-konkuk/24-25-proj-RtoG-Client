const baseUrl = "http://127.0.0.1:8000/api/v1";
export const staticBaseUrl = "http://127.0.0.1:8000";

const useUrl = (path: string) => {
  return `${baseUrl}/${path}`;
};

export { useUrl };

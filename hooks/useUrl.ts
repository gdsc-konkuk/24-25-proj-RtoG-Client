const baseUrl = "http://localhost:8000/api/v1";

const useUrl = (path: string) => {
  return `${baseUrl}/${path}`;
};

export { useUrl };

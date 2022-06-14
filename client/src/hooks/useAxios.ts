import { useState, useEffect } from 'react';

interface configObjProps {
  configObj: {
    axiosInstance: string[];
    method: string;
    url: string;
    requestConfig: Object;
  };
  fetchData: () => void;
}

const useAxios = ({ configObj }: configObjProps) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const resp = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        console.log(resp);
        setResponse(resp.data);
      } catch (err: any) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }

      fetchData();

      return () => controller.abort();
    };
  }, [axiosInstance, method, url, requestConfig]);

  return [response, error, loading];
};

export default useAxios;

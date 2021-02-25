import { useEffect, useState } from "react";
import http from "../server/httpService";
import {
  HttpMethod,
  HttpResponse,
  HttpError,
  HttpRequestConfig,
} from "../server/types";

interface IProps {
  url: string;
  method?: HttpMethod;
  options?: HttpRequestConfig;
}

interface IUseHttp {
  error: HttpError | null;
  loading: boolean;
  data: HttpResponse | null;
}

const useHttp = ({ url, options = undefined }: IProps): IUseHttp => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);

    http
      .get(url, options)
      .then(({ data }) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { error, data, loading };
};

export default useHttp;

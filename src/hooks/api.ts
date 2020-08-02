import useSWR from 'swr';
import api from '../services/api';

interface IResponse<Data, Error> {
  data: Data | undefined;
  error: Error | undefined;
  mutate(): Promise<Data | undefined>;
}

export function useApi<Data, Error = any>(url: string): IResponse<Data, Error> {
  const { data, error, mutate } = useSWR<Data, Error>(url, async endpoint => {
    const response = await api.get<Data>(endpoint);

    return response.data;
  });

  return { data, error, mutate };
}

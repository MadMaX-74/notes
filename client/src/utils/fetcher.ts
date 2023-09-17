import axios, { AxiosRequestConfig } from 'axios';

const fetcher = async (url: string, method: string = 'GET', data?: any) => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data ? JSON.stringify(data) : null,
    };
    const response: any = await axios(config);

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetcher;

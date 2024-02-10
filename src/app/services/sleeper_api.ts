import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';

export const api = axios.create({
  baseURL: 'https://api.sleeper.app/v1/',
});

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
    async ({ url, method, data, params }) => {
      try {
        const result = await api({ url, method, data, params });

        return { data: result.data };
      } catch (axiosError) {
        const err = axiosError as AxiosError;

        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        };
      }
    };
import React from 'react';
import { SERVER_URL } from '../config/constants';

export const Options: RequestInit = {
  mode: 'cors',
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};

export const usePatch = () => {
  const [isLoading, setLoading] = React.useState(false);
  const patch = async (path: string, data: any, token?: string) => {
    setLoading(true);
    let response: Response;

    if (token) {
      response = await fetch(SERVER_URL.concat(path), {
        mode: 'cors',
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          ...Options.headers,
          Authorization: 'Bearer ' + token
        }
      });
    } else {
      response = await fetch(SERVER_URL.concat(path), Options);
    }

    setLoading(false);
    return response;
  };
  return { isLoading, patch };
};

export const usePost = () => {
  const [isLoading, setLoading] = React.useState(false);
  const post = async (path: string, data: any, token?: string) => {
    setLoading(true);
    let response: Response;

    if (token) {
      response = await fetch(SERVER_URL.concat(path), {
        ...Options,
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          ...Options.headers,
          Authorization: 'Bearer ' + token
        }
      });
    } else {
      response = await fetch(SERVER_URL.concat(path), {
        ...Options,
        method: 'post',
        body: JSON.stringify(data)
      });
    }

    setLoading(false);
    return response;
  };
  return { isLoading, post };
};
export const useGet = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const get = async (path: string, token?: string) => {
    setLoading(true);
    if (token) {
      const tokenBearer = 'Bearer ' + token;
      const response = await fetch(SERVER_URL.concat(path), {
        mode: 'cors',
        headers: {
          Authorization: tokenBearer
        }
      });
      setLoading(false);
      return response;
    }
    const response = await fetch(SERVER_URL.concat(path));

    setLoading(false);
    return response;
  };
  return { get, isLoading };
};
export const useDelete = () => {
  const [isLoading, setLoading] = React.useState(false);
  const deleteQuery = async (path: string, data: any, token?: string) => {
    setLoading(true);
    let response: Response;

    if (token) {
      response = await fetch(SERVER_URL.concat(path), {
        ...Options,
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
          ...Options.headers,
          Authorization: 'Bearer ' + token
        }
      });
    } else {
      response = await fetch(SERVER_URL.concat(path), {
        ...Options,
        method: 'delete',
        body: JSON.stringify(data)
      });
    }

    setLoading(false);
    return response;
  };
  return { isLoading, deleteQuery };
};
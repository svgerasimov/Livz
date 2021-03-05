import {apiClinet} from '../index';
import {AxiosError} from 'axios';

type PlanetResponse = {ERR: number; DATA: any};
type ServerError = {code: string; description: string};

export const fetchPlanet = async (planetIndex: number) => {
  try {
    const response = await apiClinet.get<PlanetResponse>(`/${planetIndex}/`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error && error.response) {
      const axiosError = error as AxiosError<ServerError>;
      return axiosError?.response?.data;
    }

    throw error;
  }
};

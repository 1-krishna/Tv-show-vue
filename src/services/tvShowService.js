import clientApi from './clientApi';
import { allShowsApiUrl, showByNameApiUrl, showByIdApiUrl } from '../shared/appConstants';

export const getAllShows = () => clientApi.get(`${allShowsApiUrl}`);
export const getShowByName = (name) => clientApi.get(`${showByNameApiUrl}${name}`)
export const getShowById = (id) => clientApi.get(`${showByIdApiUrl}${id}?embed=cast`)
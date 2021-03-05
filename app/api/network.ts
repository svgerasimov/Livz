import axios from 'axios';
import {BASE_URL} from './endpoint';

function getDataFromStorage() {
  return 'some token string';
}

function networkService() {
  const token = getDataFromStorage();
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const baseUrl = BASE_URL;

  async function postData(action = '', body: any) {
    const url = baseUrl + action;
    const config = {headers};
    return axios.post(url, body, config);
  }

  async function getData(action = '', params = {}) {
    const url = baseUrl + action;
    const config = {headers, params};
    return await axios.get(url, config);
  }

  async function putData(action = '', body: any) {
    const url = baseUrl + action;
    const config = {headers};
    return axios.put(url, body, config);
  }

  return {
    getData,
    postData,
    putData,
  };
}

const network = networkService();

export default network;

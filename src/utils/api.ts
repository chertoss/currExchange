import axios from "axios";

import { apiKey } from "./index";
import { CurrencyPairs } from "../types";

axios.defaults.baseURL = "https://openexchangerates.org/api";

const appId = `app_id=${apiKey}`;

export function getCurrencies(): Promise<{
  data: CurrencyPairs;
  status: number;
}> {
  return axios.get(`/currencies.json`).then(
    (r) => ({ status: r.status, data: r.data }),
    (error) => ({
      status: error.response.status,
      data:
        (error.response.data.error && error.response.data.error.message) ||
        (error.response.data && error.response.data.message) ||
        error.message,
    })
  );
}

export function getLatest() {
  return axios.get(`/latest.json?${appId}`).then(
    (r) => ({ status: r.status, data: r.data }),
    (error) => ({
      status: error.response.status,
      data:
        (error.response.data.error && error.response.data.error.message) ||
        (error.response.data && error.response.data.message) ||
        error.message,
    })
  );
}

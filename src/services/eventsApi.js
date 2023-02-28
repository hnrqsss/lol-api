import axios from "axios";
import { API_KEY, BASE_URL_LOL_ESPORTS } from "../utils/Constants";

const api = axios.create({
  baseURL: BASE_URL_LOL_ESPORTS,
  headers: {
    "x-api-key": API_KEY,
  },
});

export const eventsApi = {
  getSchedules: async () => {
    const { data } = await api.get(`/persisted/gw/getSchedule?hl=pt-BR`);

    const events = data?.data?.schedule?.events;

    const inProgress =
      events.filter((item) => item.state === "inProgress") || [];
    const unStart = events.filter((item) => item.state === "unstarted") || [];

    return {
      inProgress,
      unStart,
    };
  },
};

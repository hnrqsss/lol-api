import axios from "axios";
import moment from "moment-timezone";
import { API_KEY, BASE_URL_FEED } from "../utils/Constants";

const api = axios.create({
  baseURL: BASE_URL_FEED,
  headers: {
    "x-api-key": API_KEY,
  },
});

const createDate = () => {
  const date = moment
    .tz("America/Sao_Paulo")
    .subtract(55, "seconds")
    .add(3, "hours")
    .format("YYYY-MM-DD HH:mm:ss");

  const dateSplit = date.split(" ");

  const hourSplit = dateSplit[1].split(":");

  const second = parseInt(hourSplit[hourSplit.length - 1][0]) * 10;

  const seconds = second.toString().length < 2 ? `0${second}` : second;

  return `${dateSplit[0]}T${hourSplit[0]}:${hourSplit[1]}:${seconds}.000Z`;
};

async function getWindowData({ id = "", date = "" }) {
  try {
    const { data } = await api.get(
      `livestats/v1/window/${id}?startingTime=${date}`
    );

    if (data?.frames) {
      return {
        gameMetadata: data?.gameMetadata || {},
        framesMetaData: data?.frames[data?.frames?.length - 1] || {},
      };
    }
  } catch (err) {
    throw err;
  }
}

async function getDetailData({ id = "", date = "" }) {
  try {
    const { data } = await api.get(
      `livestats/v1/details/${id}?startingTime=${date}`
    );

    return {
      frames: data?.frames[data?.frames?.length - 1] || {},
    };
  } catch (err) {
    throw err;
  }
}

export const eventsApi = {
  getMatchData: async ({ id = "" }) => {
    try {
      const date = createDate();
      const firstId = id.slice(0, id.length - 2);

      const idDigits = parseInt(id.slice(id.length - 2, id.length)) + 1;

      const lastId = idDigits.toString().length < 2 ? `0${idDigits}` : idDigits;
      const finalId = firstId + lastId;

      const { frames } = await getDetailData({ id: finalId, date });

      const { gameMetadata, framesMetaData } = await getWindowData({
        id: finalId,
        date,
      });

      return {
        gameMetadata,
        framesMetaData,
        frames,
      };
    } catch (err) {
      console.log(err);

      return {
        gameMetadata: {},
        framesMetaData: [],
        frames: {},
      };
    }
  },
};

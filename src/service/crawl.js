import axios from "../api/axios";

export const getCrawlDataTokopediav2 = async () => {
  try {
    const response = await axios.get(
      "http://192.168.1.120:105/crawling-data/tokopedia"
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCrawlDataTokopedia = async () => {
  try {
    const response = await axios.get("/crawling-data/tokopedia");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCrawlDataShopee = async () => {
  try {
    const response = await axios.get("/crawling-data/shopee");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCrawlDataLazada = async () => {
  try {
    const response = await axios.get("/crawling-data/lazada");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCrawlDataBlibli = async () => {
  try {
    const response = await axios.get("/crawling-data/blibli");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCrawlDataBukalapak = async () => {
  try {
    const response = await axios.get("/crawling-data/bukalapak");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

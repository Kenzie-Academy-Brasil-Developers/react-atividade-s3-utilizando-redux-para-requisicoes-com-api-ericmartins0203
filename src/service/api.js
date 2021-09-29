import axios from "axios";

const digimonApi = axios.create({
  baseURL: "https://digimon-api.vercel.app/api",
});

export default digimonApi;

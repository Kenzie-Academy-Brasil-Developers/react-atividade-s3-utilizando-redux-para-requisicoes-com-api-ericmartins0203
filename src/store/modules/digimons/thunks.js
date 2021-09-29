import digimonApi from "../../../service/api";
import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  const digimons = digimon.charAt(0).toUpperCase() + digimon.slice(1);
  digimonApi
    .get(`/digimon/name/${digimons}`)
    .then((response) => dispatch(addDigimon(response.data)))
    .catch((_) => setError(true));
};

export default addDigimonsThunk;

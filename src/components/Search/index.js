import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import { useHistory } from "react-router";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();
  const { digimon } = useSelector((state) => state);

  function handleSearch() {
    const repeted = digimon.filter((item) => item.name === input);
    if (repeted.length > 0) {
      return;
    }
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
  }

  const handleNavigation = () => {
    return history.push("/");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        {error && <p> Digimon não encontrado </p>}
        <button onClick={handleSearch}>Pesquisar</button>
        <button onClick={() => handleNavigation()}>voltar</button>
      </div>
    </div>
  );
};

export default Search;

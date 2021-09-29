import { useHistory } from "react-router";
import { useState } from "react";
import digimonApi from "../../service/api";
import Digimons from "../../components/Digimons";

function DigimonsPage() {
  const [digimons, setdigimons] = useState([]);
  const history = useHistory();

  const allDigimons = () => {
    digimonApi.get("/digimon").then((response) => setdigimons(response.data));
  };
  const handleNavigation = () => {
    return history.push("/");
  };
  return (
    <div>
      <h2>Todos os digimons</h2>
      <button onClick={() => allDigimons()}>pegar</button>
      <button onClick={() => handleNavigation()}>voltar</button>
      <Digimons digimon={digimons} />
    </div>
  );
}

export default DigimonsPage;

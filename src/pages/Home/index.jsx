import { useHistory } from "react-router";

function Home() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <div>
      <h2>Bem-vindo ao site de Digimons</h2>
      <button onClick={() => handleNavigation("/search")}> Pesquisar </button>
      <button onClick={() => handleNavigation("/digimons")}>
        Todos os Digimons
      </button>
    </div>
  );
}

export default Home;

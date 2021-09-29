import Search from "./../../components/Search";
import Digimons from "./../../components/Digimons";
import { useSelector } from "react-redux";

function SearchDigimonPage() {
  const { digimon } = useSelector((state) => state);

  return (
    <div className="container">
      <div>
        <Search />
        <Digimons digimon={digimon} />
      </div>
    </div>
  );
}

export default SearchDigimonPage;

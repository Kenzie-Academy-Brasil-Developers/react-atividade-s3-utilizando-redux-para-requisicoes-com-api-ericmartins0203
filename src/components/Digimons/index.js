const Digimons = ({ digimon }) => {
  return (
    <div>
      <ul>
        {digimon.map((digimon, index) => {
          return (
            <li key={index}>
              <p>{digimon.name}</p>
              <img
                src={digimon.img}
                alt={digimon.name}
                width="200px"
                height="200px"
              />
              <p>{digimon.level}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Digimons;

/* eslint-disable react/prop-types */

export default function Characters(props) {
  
  const { characters, setCharacters } = props,
        resetCharacters = () => {
          setCharacters(null)
        };

  return (
    <div className="characters">
      <h1 className="title">Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver al home</span>
      <div className="container-characters">
        {characters.map((char, i) => (
          <div className="character-container" key={i}>
            <div>
              <img src={char.image} alt={char.name}/>
            </div>
            <div>
              <h3>{char.name}</h3>
              <h6>
                {char.status === "Alive" ? (
                  <>
                    <span className="alive"/>
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead"/>
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{char.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{char.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver al home</span>
    </div>
  );
}
import React, { useEffect, useState } from "react";

function RickAndMortyList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
      })
      .catch((err) => console.error("Erro ao buscar personagens:", err));
  }, [search]);

  return (
    <div>
      <h1>Lista de Personagens de Rick and Morty</h1>
      <input
        type="text"
        placeholder="Buscar personagem..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {characters.map((char) => (
          <div key={char.id} style={{ margin: "10px", width: "150px" }}>
            <img src={char.image} alt={char.name} style={{ width: "100%" }} />
            <h3>{char.name}</h3>
            <p>Espécie: {char.species}</p>
            <p>Status: {char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RickAndMortyList;

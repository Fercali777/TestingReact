import { useState, useEffect } from "react";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error("Error al obtener los personajes:", error));
    }, []);

    return (
        <div>
            <h1>Personajes de Rick and Morty</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}

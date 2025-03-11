import { useState, useEffect } from "react";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error("Error al obtener los personajes:", error));
            console.log ("I did fetch")
    }, []);

    return (
        <div className="container">
            <h1>The Rickest Gallery in the Multiverse!</h1>
            <div className="container-cards">
                {characters.map(character => (
                    
                    <div className="card flex" key={character.id}>
                        <img src={character.image} alt={character.name}></img>
                        {character.name}, { }
                        {character.species}, { }
                        {character.gender}
                    </div>



   
                        
                    
                ))}
            </div>
        </div>
    );
}

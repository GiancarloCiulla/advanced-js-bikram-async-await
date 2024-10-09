// Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
// Función para obtener la imagen y el nombre del Pokémon
async function getImageAndName(pokemon) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;
        return { name, img };
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        return null; // Retornar null si hay un error
    }
}

// Ejercicio 1: Obtener un Pokémon aleatorio (dentro de un rango de 20)
async function getRandomPokemon() {
    const numRandom = Math.floor(Math.random() * 20) + 1; // Rango de 1 a 20
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        const data = await response.json();
        return data.name; // Retornar solo el nombre del Pokémon
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        return null; // Retornar null si hay un error
    }
}

// Ejercicio 2: Función que retorna el nombre y la URL de la imagen de un Pokémon
async function getImageAndName(pokemon) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;
        return { name, img };
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        return null; // Retornar null si hay un error
    }
}

// Ejercicio 3: Pintar la imagen y el nombre del Pokémon en el DOM
async function printImageAndName() {
    const pokemon = await getRandomPokemon(); // Obtener un Pokémon aleatorio
    if (!pokemon) return `<section><h1>No se pudo obtener un Pokémon aleatorio.</h1></section>`;
    
    let data = await getImageAndName(pokemon);
    if (!data) return `<section><h1>No se pudo obtener la información del Pokémon.</h1></section>`;

    let name = data.name;
    let img = data.img;

    let cadena = `
        <section>
            <img src="${img}" alt="${name}">
            <h1>${name}</h1>
        </section>
    `;
    return cadena;
}

// Ejemplo de uso de printImageAndName
printImageAndName().then((cadenaPokemon) => {
    console.log("Ejercicio 3");
    console.log(cadenaPokemon);
    const container = document.getElementById("ejercicio_3");
    container.innerHTML = cadenaPokemon;
});

// Ejercicio 4: Obtener la URL de la imagen de un perro aleatorio
async function getRandomDogImage() {
    try {
        let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        let data = await response.json();
        let urlImagen = data.message;

        return urlImagen;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

// Ejemplo de uso de getRandomDogImage
getRandomDogImage().then((urlImagenPerro) => {
    console.log("Ejercicio 4");
    console.log(urlImagenPerro);
});

// Ejercicio 5: Obtener la URL de la imagen de un Pokémon aleatorio
async function getRandomPokemonImage() {
    try {
        const pokemonName = await getRandomPokemon(); // Obtener un Pokémon aleatorio
        if (!pokemonName) return null; // Verificar que se obtuvo un nombre válido

        const data = await getImageAndName(pokemonName);
        if (!data) return null; // Verificar que se obtuvo información válida

        return data.img; // Retornar la URL de la imagen
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        return null; // Retornar null si hay un error
    }
}

// Ejemplo de uso de getRandomPokemonImage
getRandomPokemonImage().then((url) => {
    if (url) {
        console.log("Imagen de Pokémon aleatorio:", url);
    } else {
        console.log("No se pudo obtener la imagen del Pokémon.");
    }
});

//Ejercicio 6.
//- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)
// Función para obtener una imagen aleatoria de una URL dada
function fetchRandomImage(apiUrl) {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.message || data.sprites.front_default)
        .catch(error => {
            console.error('Error fetching image:', error);
            return null; // Devuelve null en caso de error
        });
}

// Función para mostrar la batalla entre Pug y Pikachu
function printPugVsPikachu() {
    const pikachuImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'; // URL de Pikachu
    const pugApiUrl = 'https://dog.ceo/api/breed/pug/images/random'; 

    // Obtener la imagen del Pug
    fetchRandomImage(pugApiUrl)
        .then(pugImageUrl => {
            if (pugImageUrl) {
                const battleHTML = `
                    <div style="text-align: center;">
                        <img src="${pugImageUrl}" alt="Pug" style="width: 150px;">
                        <h1>VS</h1>
                        <img src="${pikachuImageUrl}" alt="Pikachu" style="width: 150px;">
                    </div>
                `;

                // Añadir el resultado al DOM
                const container = document.getElementById('battle_container');
                container.innerHTML = battleHTML;
            } else {
                const errorHTML = `<p>Error al cargar la imagen del Pug.</p>`;
                const container = document.getElementById('battle_container');
                container.innerHTML = errorHTML;
            }
        });
}

// Llama a la función para mostrar la batalla
printPugVsPikachu();


//Ejercicios con Rick and Morty
//Ejercicio 7.
//Declara una función getRandomCharacter que retorne un personaje aleatorio.
// Función para obtener un personaje aleatorio de la API de Rick and Morty
async function getRandomCharacter() {
    const totalCharacters = 826; // Total de personajes en la API 
    const randomId = Math.floor(Math.random() * totalCharacters) + 1; // ID aleatorio entre 1 y 826

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
        if (!response.ok) {
            throw new Error('Error fetching character');
        }
        const character = await response.json();
        return character; // Retorna el objeto del personaje
    } catch (error) {
        console.error('Error:', error);
        return null; // Devuelve null en caso de error
    }
}

// Ejemplo de uso
getRandomCharacter().then(character => {
    if (character) {
        console.log(`Personaje aleatorio: ${character.name}, Especie: ${character.species}, Estado: ${character.status}`);
    } else {
        console.log('No se pudo obtener un personaje.');
    }
});

//Ejercicio 8.
//- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})
// Función para obtener la información de un personaje aleatorio
// Función para obtener la información de un personaje aleatorio
// Función para obtener la información de un personaje aleatorio
// Función para obtener la información de un personaje aleatorio
// Función para obtener la información de un personaje aleatorio
// Función para obtener la información de un personaje aleatorio
async function getRandomCharacterInfo() {
    const totalCharacters = 826; // Total de personajes en la API
    const randomId = Math.floor(Math.random() * totalCharacters) + 1; // ID aleatorio entre 1 y 826

    try {
        // Obtener datos del personaje
        const characterResponse = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
        if (!characterResponse.ok) {
            throw new Error('Error fetching character');
        }
        const character = await characterResponse.json();

        // Verificar que el personaje tenga episodios
        if (!character.episode || character.episode.length === 0) {
            throw new Error('No episodes found for this character');
        }

        // Obtener el primer episodio en el que aparece
        const firstEpisodeUrl = character.episode[0]; // URL del primer episodio
        const episodeResponse = await fetch(firstEpisodeUrl);
        if (!episodeResponse.ok) {
            throw new Error('Error fetching episode');
        }
        const episode = await episodeResponse.json();

        // Retornar la información requerida en el formato esperado
        return {
            img: character.image,            // Imagen del personaje
            name: character.name,            // Nombre del personaje
            episodes: character.episode.length, // Cantidad de episodios
            firstEpisode: episode.name,      // Nombre del primer episodio
            dateEpisode: episode.air_date     // Fecha de estreno del primer episodio
        };
    } catch (error) {
        console.error('Error:', error);
        return null; // Devuelve null en caso de error
    }
}

// Ejemplo de uso
getRandomCharacterInfo().then(info => {
    if (info) {
        console.log(info);
    } else {
        console.log('No se pudo obtener la información del personaje.');
    }
});

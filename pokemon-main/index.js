const poke = document.querySelector(".box__pokemon");

const fetchData = async () => {
    try {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await result.json();
        
      
        if (data.results) {
            for (const item of data.results) {
                const pokemonResult = await fetch(item.url);
                const pokemonData = await pokemonResult.json();

                poke.innerHTML += `
                <div class="box">
                <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                    <div class="name__pokemon">${pokemonData.name}</div>
                    
                    </div>
                `;
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


fetchData();

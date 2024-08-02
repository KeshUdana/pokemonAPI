async function fetchData() {
    const pname = document.getElementById("pname").value.toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pname}`);

        if (!response.ok) {
            throw new Error("Pokemon doesn't exist");
        }

        const Data = await response.json();
        const Pimg = Data.sprites.front_default;
        const imgElement = document.getElementById("Pimg");
        const pokeInfoElement = document.getElementById("pokeInfo"); // Define pokeInfoElement

        imgElement.src = Pimg;
        imgElement.style.display = "block";

        const name = Data.name;
        const types = Data.types.map(typeInfo => typeInfo.type.name).join(", ");
        const abilities = Data.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ");

        pokeInfoElement.innerHTML = `
            Name: ${name}<br>
            Type: ${types}<br>
            Abilities: ${abilities}<br>
        `;
    } catch (error) {
        console.error(error);
        const pokeInfoElement = document.getElementById("pokeInfo"); // Ensure pokeInfoElement is defined in catch block
        pokeInfoElement.innerHTML = "Error: " + error.message;
    }
}

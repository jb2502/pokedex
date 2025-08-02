async function init(offset, limit) {
    renderLoadingScreen();
    await loadOffsetLimit(offset, limit);
    renderPkm();
};

allPokemon = [];

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species";
const EVO_CHAIN_URL = "https://pokeapi.co/api/v2/evolution-chain";

function renderLoadingScreen() {
    let refCardContent = document.getElementById('card-content');
    refCardContent.innerHTML = getTemplateLoading();
}

function renderPkm() {
    let refCardContent = document.getElementById('card-content');
    refCardContent.innerHTML = "";
    for (let index = 0; index < allPokemon.length; index++) {
        refCardContent.innerHTML += getTemplatePkmCard(index);
    };
};

async function loadOffsetLimit(offset, limit) {
    let idList = [];
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let responseToJson = await response.json();
    console.log(responseToJson);

    for (let id of responseToJson.results) {
        let getId = id.url.split('/')[6];
        idList.push(getId);
    }
    console.log(idList);

    for (let index = 0; index < idList.length; index++) {
        let useId = idList[index];
        await loadData(useId);

    }

    idList = [""]
    console.log(idList);

};


async function loadData(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let responseToJson = await response.json();
    let getEvoChain = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    let evoChainToJson = await getEvoChain.json();
    let getEvoChainUrl = await evoChainToJson.evolution_chain.url;
    let useEvoChainUrl = await fetch(getEvoChainUrl);
    let EvoChainUrlToJson = await useEvoChainUrl.json();

    let data = {
        name: responseToJson.species.name,
        id: responseToJson.id,
        weight: responseToJson.weight,
        height: responseToJson.height,
        type: [responseToJson.types[0].type.name, responseToJson.types[1]?.type.name],
        hp: responseToJson.stats[0].base_stat,
        atk: responseToJson.stats[1].base_stat,
        def: responseToJson.stats[2].base_stat,
        speed: responseToJson.stats[5].base_stat,
        abtility: [responseToJson.abilities[0].ability.name,
        responseToJson.abilities[1]?.ability.name],
        img: responseToJson.sprites.other['official-artwork'].front_default,
        pkm1: EvoChainUrlToJson.chain.species.name,
        pkm2: EvoChainUrlToJson.chain.evolves_to[0].species.name,
        pkm3: EvoChainUrlToJson.chain.evolves_to[0]?.evolves_to[0]?.species.name,

    };

    allPokemon.push(data);
};

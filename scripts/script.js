allPokemon = [];
searchPkm = "";
let input = document.getElementById("pkm-search")
let offset = 0;
let limit = 0;
let newPkm = 20;

async function init() {
    renderLoadingScreen();
    await loadOffsetLimit(offset, limit);
    renderPkm(allPokemon);
};

async function loadNextPkm() {
    offset = allPokemon.length;
    limit += newPkm;
    let nextPkmBtn = document.getElementById("next-pkm-btn");
    nextPkmBtn.innerHTML = "";
    nextPkmBtn.classList.add("next-pkm-loader");
    await loadOffsetLimit(offset, limit);
    renderPkm(allPokemon);
    nextPkmBtn.classList.remove("next-pkm-loader");
    nextPkmBtn.innerHTML = "More";
    limit = 0;
};

function renderLoadingScreen() {
    let refCardContent = document.getElementById('card-content');
    refCardContent.innerHTML = getTemplateLoading();
};

function renderPkm(array) {
    let refCardContent = document.getElementById('card-content');
    refCardContent.innerHTML = "";
    for (let index = 0; index < array.length; index++) {
        refCardContent.innerHTML += getTemplatePkmCard(array, index);
    };
};

async function loadOffsetLimit(offset, limit) {
    let idList = [];
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let responseToJson = await response.json();
    for (let id of responseToJson.results) {
        let getId = id.url.split('/')[6];
        idList.push(getId);
    }
    for (let index = 0; index < idList.length; index++) {
        let useId = idList[index];
        await loadData(useId);
    }
    idList = []
};

async function loadData(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let responseToJson = await response.json();
    let getEvoChain = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    let evoChainToJson = await getEvoChain.json();
    let getEvoChainUrl = await evoChainToJson.evolution_chain.url;
    let useEvoChainUrl = await fetch(getEvoChainUrl);
    let EvoChainUrlToJson = await useEvoChainUrl.json();
    receiveData(responseToJson, EvoChainUrlToJson)
};

let receiveData = (responseToJson, EvoChainUrlToJson) => {
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
        ability: [responseToJson.abilities[0].ability.name,
        responseToJson.abilities[1]?.ability.name],
        img: responseToJson.sprites.other['official-artwork'].front_default,
        pkm1: EvoChainUrlToJson.chain.species.url.split('/')[6],
        pkm2: EvoChainUrlToJson.chain.evolves_to[0]?.species.url.split('/')[6],
        pkm3: EvoChainUrlToJson.chain.evolves_to[0]?.evolves_to[0]?.species.url.split('/')[6]
    };
    allPokemon.push(data);
};

let currentPkm = (array, index) => {
    let currentPkm = document.getElementById('dialog');
    addBoxShadow(array, index);
    currentPkm.innerHTML = getTemplateDialog(array, index);
    let activeAbout = document.getElementById("about-dialog");
    activeAbout.classList.add("d-content-active");
};

let prevPkm = (index) => {
    if (searchPkm !== "") {
        if (index === 0) {
            index = searchPkm.length;
        }
        index -= 1;
        removeBoxShadow(searchPkm);
        currentPkm(searchPkm, index);
    } else {
        if (index === 0) {
            index = allPokemon.length;
        }
        index -= 1;
        removeBoxShadow(allPokemon);
        currentPkm(allPokemon, index);
    }
};

let nextPkm = (index) => {
    if (searchPkm !== "") {
        if (index === searchPkm.length - 1) {
            index = -1;
        }
        index += 1;
        removeBoxShadow(searchPkm);
        currentPkm(searchPkm, index);
    } else {
        if (index === allPokemon.length - 1) {
            index = -1;
        }
        index += 1;
        removeBoxShadow(allPokemon);
        currentPkm(allPokemon, index);
    }

};

let filterPkm = () => {
    if (input.value.length >= 3) {
        let filteredPkm = allPokemon.filter(pokemon => pokemon.name.includes(input.value));
        searchPkm = filteredPkm;
        renderPkm(searchPkm)
        let refCardContent = document.getElementById('card-content');
        refCardContent.innerHTML = "";
        for (let index = 0; index < searchPkm.length; index++) {
            refCardContent.innerHTML += getTemplatePkmCard(searchPkm, index);
        };
    } else {
        searchPkm = "";
        renderPkm(allPokemon)
    }
};


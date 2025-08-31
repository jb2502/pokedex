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
    receiveData(responseToJson)
};

let receiveData = (responseToJson) => {
    let data = {
        name: responseToJson.species.name,
        id: responseToJson.id,
        type: [responseToJson.types[0].type.name, responseToJson.types[1]?.type.name],
        img: responseToJson.sprites.other['official-artwork'].front_default,
        type: [responseToJson.types[0].type.name, responseToJson.types[1]?.type.name],
    };
    allPokemon.push(data);
};

async function loadAboutData(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let responseToJson = await response.json();
    receiveAboutData(responseToJson)
}

let receiveAboutData = (responseToJson) => {
    let data = {
        weight: responseToJson.weight,
        height: responseToJson.height,
        ability: [responseToJson.abilities[0].ability.name,
        responseToJson.abilities[1]?.ability.name],
        type: [responseToJson.types[0].type.name, responseToJson.types[1]?.type.name],
    };
    aboutData.push(data);
};

async function loadStatsData(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let responseToJson = await response.json();
    receiveStatsData(responseToJson)
};

let receiveStatsData = (responseToJson) => {
    let data = {
        hp: responseToJson.stats[0].base_stat,
        atk: responseToJson.stats[1].base_stat,
        def: responseToJson.stats[2].base_stat,
        speed: responseToJson.stats[5].base_stat,
    };
    statsData.push(data);
};

async function loadEvoData(id) {
    let getEvoChain = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    let evoChainToJson = await getEvoChain.json();
    let getEvoChainUrl = await evoChainToJson.evolution_chain.url;
    let useEvoChainUrl = await fetch(getEvoChainUrl);
    let EvoChainUrlToJson = await useEvoChainUrl.json();
    receiveEvoData(EvoChainUrlToJson)
};

let receiveEvoData = (EvoChainUrlToJson) => {
    let data = {
        pkm1: EvoChainUrlToJson.chain.species.url.split('/')[6],
        pkm2: EvoChainUrlToJson.chain.evolves_to[0]?.species.url.split('/')[6],
        pkm3: EvoChainUrlToJson.chain.evolves_to[0]?.evolves_to[0]?.species.url.split('/')[6]
    };
    evoChainData.push(data);
};

async function loadOverlayData(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let responseToJson = await response.json();
    receiveOverlayData(responseToJson)
};

let receiveOverlayData = (responseToJson) => {
    let data = {
        name: responseToJson.species.name,
        id: responseToJson.id,
        type: [responseToJson.types[0].type.name, responseToJson.types[1]?.type.name],
        img: responseToJson.sprites.other['official-artwork'].front_default,
        weight: responseToJson.weight,
        height: responseToJson.height,
        ability: [responseToJson.abilities[0].ability.name,
        responseToJson.abilities[1]?.ability.name],
    };
    openDialogData.push(data);
};

async function currentPkm(array, index) {
    await openOverlay(index);
    addBoxShadow(array, index);
};

async function prevPkm(index) {
    if (searchPkm !== "") {
        if (index === 0) {
            index = searchPkm.length;
        }
        index -= 1;
        removeBoxShadow(searchPkm);
        emptyAllArrays();
        await currentPkm(searchPkm, index);
    } else {
        if (index === 0) {
            index = allPokemon.length;
        }
        index -= 1;
        removeBoxShadow(allPokemon);
        emptyAllArrays();
        await currentPkm(allPokemon, index);
    }
};

async function nextPkm(index) {
    if (searchPkm !== "") {
        if (index === searchPkm.length - 1) {
            index = -1;
        }
        index += 1;
        removeBoxShadow(searchPkm);
        emptyAllArrays();
        await currentPkm(searchPkm, index);
    } else {
        if (index === allPokemon.length - 1) {
            index = -1;
        }
        index += 1;
        removeBoxShadow(allPokemon);
        emptyAllArrays();
        await currentPkm(allPokemon, index);
    }
};

let filterPkm = () => {
    let threeLetter = document.getElementById("three-letter-search");
    let refCardContent = document.getElementById("card-content");
    if (input.value.length < 3) {
        threeLetter.classList.remove("d-none")
    };
    if (input.value.length >= 3) {
        threeLetter.classList.add("d-none")
        let filteredPkm = allPokemon.filter(pokemon => pokemon.name.includes(input.value));
        searchPkm = filteredPkm;
        renderPkm(searchPkm)
        refCardContent.innerHTML = "";
        for (let index = 0; index < searchPkm.length; index++) {
            refCardContent.innerHTML += getTemplatePkmCard(searchPkm, index);
        };
    };
    if (input.value.length === 0 || input.value === "") {
        threeLetter.classList.add("d-none")
        searchPkm = "";
        renderPkm(allPokemon)
    }
};


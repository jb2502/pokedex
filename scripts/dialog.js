let aboutData = [];
let statsData = [];
let evoChainData = [];
let openDialogData = [];
let dialog = document.querySelector("dialog");
let body = document.querySelector("body");

let emptyAllArrays = () => {
    aboutData = [];
    statsData = [];
    evoChainData = [];
    openDialogData = [];
};

let actAbout = () => {
    let activeAbout = document.getElementById("about-dialog");
    let activeStats = document.getElementById("stats-dialog");
    let activeEvoChain = document.getElementById("evochain-dialog");
    activeStats.classList.remove("d-content-active");
    activeEvoChain.classList.remove("d-content-active");
    activeAbout.classList.add("d-content-active");
};

let actStats = () => {
    let activeAbout = document.getElementById("about-dialog");
    let activeStats = document.getElementById("stats-dialog");
    let activeEvoChain = document.getElementById("evochain-dialog");
    activeAbout.classList.remove("d-content-active");
    activeEvoChain.classList.remove("d-content-active");
    activeStats.classList.add("d-content-active");
};

let notActAll = () => {
    let activeAbout = document.getElementById("about-dialog");
    let activeStats = document.getElementById("stats-dialog");
    let activeEvoChain = document.getElementById("evochain-dialog");
    activeAbout.classList.remove("d-content-active");
    activeStats.classList.remove("d-content-active");
    activeEvoChain.classList.remove("d-content-active");
};

let actEvoChain = () => {
    let activeAbout = document.getElementById("about-dialog");
    let activeStats = document.getElementById("stats-dialog");
    let activeEvoChain = document.getElementById("evochain-dialog");
    activeAbout.classList.remove("d-content-active");
    activeEvoChain.classList.add("d-content-active");
    activeStats.classList.remove("d-content-active");
};

let addBoxShadow = (array, index) => {
    let type = array[index].type[0];
    dialog.classList.add('box-shadow-' + type);
};

let removeBoxShadow = () => {
    allPokemon.forEach(pokemon => {
        let type = pokemon.type[0];
        dialog.classList.remove('box-shadow-' + type);
    });
};

async function openOverlay(index) {
    if (searchPkm !== "") {
        await loadOverlayData(searchPkm[index].id)
        renderDialog(openDialogData, index);
        let activeAbout = document.getElementById("about-dialog");
        activeAbout.classList.add("d-content-active");
        dialog.showModal();
    } else {
        await loadOverlayData(allPokemon[index].id)
        renderDialog(openDialogData, index);
        let activeAbout = document.getElementById("about-dialog");
        activeAbout.classList.add("d-content-active");
        dialog.showModal();
    }
};

let closeOverlay = (index) => {
    if (searchPkm !== "") {
        let type = searchPkm[index].type[0];
        dialog.classList.remove('box-shadow-' + type);
        notActAll();
        emptyAllArrays();
        dialog.close()
    } else {
        let type = openDialogData[0].type[0];
        dialog.classList.remove('box-shadow-' + type);
        notActAll();
        emptyAllArrays();
        dialog.close()
    }
};

let renderDialog = (array, index) => {
    let type = array[0].type[0];
    dialog.classList.add('box-shadow-' + type);
    dialog.innerHTML = getTemplateDialog(array, index);
};

//found in internet....sorry :(
dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
    if (!isInDialog) {
        removeBoxShadow();
        dialog.close();
    }
});

async function loadAboutDialog(index) {
    statsData = [];
    evoChainData = [];
    if (searchPkm !== "") {
        await loadAboutData(searchPkm[index].id)
        let about = document.getElementById("d-content");
        actAbout();
        about.innerHTML = getTemplateDialogAbout(aboutData, index);
    } else {
        await loadAboutData(allPokemon[index].id)
        let about = document.getElementById("d-content");
        actAbout();
        about.innerHTML = getTemplateDialogAbout(aboutData, index);
    }
};

async function loadStatsDialog(index) {
    aboutData = [];
    evoChainData = [];
    if (searchPkm !== "") {
        await loadStatsData(searchPkm[index].id)
        let stats = document.getElementById("d-content");
        actStats();
        stats.innerHTML = getTemplateDialogStats(statsData, index);
    } else {
        await loadStatsData(allPokemon[index].id)
        let stats = document.getElementById("d-content");
        actStats();
        stats.innerHTML = getTemplateDialogStats(statsData, index);
    }
};

async function loadEvoChainDialog(index) {
    aboutData = [];
    statsData = [];
    if (searchPkm !== "") {
        await loadEvoData(searchPkm[index].id)
        let evoChainTemplate = document.getElementById("d-content");
        actEvoChain();
        evoChainTemplate.innerHTML = getTemplateEvoChain(evoChainData);
    } else {
        await loadEvoData(allPokemon[index].id)
        let evoChainTemplate = document.getElementById("d-content");
        actEvoChain();
        evoChainTemplate.innerHTML = getTemplateEvoChain(evoChainData);
    }
}
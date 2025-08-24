let dialog = document.querySelector("dialog");
let body = document.querySelector("body");

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

let addBoxShadow = (index) => {
    let type = allPokemon[index].type[0];
    dialog.classList.add('box-shadow-' + type);
};

let removeBoxShadow = () => {
    allPokemon.forEach(pokemon => {
        let type = pokemon.type[0];
        dialog.classList.remove('box-shadow-' + type);
    });
};

let openOverlay = (index) => {
    renderDialog(index);
    let activeAbout = document.getElementById("about-dialog");
    activeAbout.classList.add("d-content-active");
    dialog.showModal();
};

let closeOverlay = (index) => {
    let type = allPokemon[index].type[0];
    dialog.classList.remove('box-shadow-' + type);
    notActAll();
    dialog.close()
};

let renderDialog = (index) => {
    let type = allPokemon[index].type[0];
    dialog.classList.add('box-shadow-' + type);
    dialog.innerHTML = getTemplateDialog(index);
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

let loadAboutDialog = (index) => {
    let about = document.getElementById("d-content");
    actAbout();
    about.innerHTML = getTemplateDialogAbout(index);
};

let loadStatsDialog = (index) => {
    let stats = document.getElementById("d-content");
    actStats();
    stats.innerHTML = getTemplateDialogStats(index);
};

let loadEvoChainDialog = (index) => {
    let evoChainTemplate = document.getElementById("d-content");
    actEvoChain();
    evoChainTemplate.innerHTML = getTemplateEvoChain(index);
};
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

let doesNotExsist = (index) => {
    if (!allPokemon[index]) {
        let notExsist = document.getElementById("img-" + index)
        notExsist.classList.toggle("not-exsist");
        return;
    }
};

let openOverlay = (index) => {
    if (searchPkm !== "") {
        renderDialog(searchPkm, index);
        let activeAbout = document.getElementById("about-dialog");
        activeAbout.classList.add("d-content-active");
        dialog.showModal();
    } else {
        doesNotExsist(index)
        renderDialog(allPokemon, index);
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
        dialog.close()
    } else {
        let type = allPokemon[index].type[0];
        dialog.classList.remove('box-shadow-' + type);
        notActAll();
        dialog.close()
    }
};

let renderDialog = (array, index) => {
    let type = array[index].type[0];
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

let loadAboutDialog = (index) => {
    if (searchPkm !== "") {
        let about = document.getElementById("d-content");
        actAbout();
        about.innerHTML = getTemplateDialogAbout(searchPkm, index);
    } else {
        let about = document.getElementById("d-content");
        actAbout();
        about.innerHTML = getTemplateDialogAbout(allPokemon, index);
    }
};

let loadStatsDialog = (index) => {
    if (searchPkm !== "") {
        let stats = document.getElementById("d-content");
        actStats();
        stats.innerHTML = getTemplateDialogStats(searchPkm, index);
    } else {
        let stats = document.getElementById("d-content");
        actStats();
        stats.innerHTML = getTemplateDialogStats(allPokemon, index);
    }
};

let loadEvoChainDialog = (index) => {
    if (searchPkm !== "") {
        let evoChainTemplate = document.getElementById("d-content");
        actEvoChain();
        evoChainTemplate.innerHTML = searchTemplateEvoChain(searchPkm, index);
    } else {
        let evoChainTemplate = document.getElementById("d-content");
        actEvoChain();
        evoChainTemplate.innerHTML = getTemplateEvoChain(allPokemon, index);
    }
};
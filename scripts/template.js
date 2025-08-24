let getTemplatePkmCard = (index) => {
    let type1 = allPokemon[index].type[0];
    let type2 = allPokemon[index].type[1];
    return `<div class="card card-${type1}" id="open-overlay" onclick="openOverlay(${index})">
                <div class="card-pkm-header">
                    <p class="card-order">#${allPokemon[index].id}</p>
                    <p class="card-pkm-name">${allPokemon[index].name.charAt(0).toUpperCase() + allPokemon[index].name.slice(1)}</p>
                </div>
                <div class="card-pkm-img card-pkm-img-bg-${type1}">
                    <img src="${allPokemon[index].img}"
                        alt="${allPokemon[index].name.charAt(0).toUpperCase() + allPokemon[index].name.slice(1)}">
                </div>
                <div class="card-pkm-type">
                    <div class="card-pkm-type-sub"><img src="./assets/icons/${type1}.svg" alt="${type1}"></div>
                    ${type2 ? `<div class="card-pkm-type-sub"><img src="./assets/icons/${type2}.svg" alt="${type2}"></div>` : ''}
                </div>
            </div>`
};

let getTemplateLoading = () => {
    return `<div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>
            <div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>
            <div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>
            <div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>
            <div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>
            <div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>
            <div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>
            <div class="card2">
                <div class="card2-pkm-header skeleton skeleton-header">
                    <p class="card2-order"></p>
                    <p class="card2-pkm-name"></p>
                </div>
                <div class="card2-pkm-img skeleton">
                </div>
                <div class="card2-pkm-type skeleton skeleton-type">
                </div>
            </div>`
};

let getTemplateDialog = (index) => {
    let type1 = allPokemon[index].type[0];
    let type2 = allPokemon[index].type[1];
    let ability1 = allPokemon[index].ability[0];
    let ability2 = allPokemon[index].ability[1];
    return `<section>
            <div class="d-header">
                <div class="d-header-id">#${allPokemon[index].id}</div>
                <div class="d-header-name">${allPokemon[index].name.charAt(0).toUpperCase() + allPokemon[index].name.slice(1)}</div>
                <div>
                    <img id="close-overlay" onclick="closeOverlay(${index})" src="./assets/icons/close.svg" alt="close dialog">
                </div>
            </div>
            <div class="d-image card-pkm-img-bg-${type1}">
                <img src="${allPokemon[index].img}"
                    alt="${allPokemon[index].name.charAt(0).toUpperCase() + allPokemon[index].name.slice(1)}">
            </div>
            <div class="card-pkm-type">
                <div class="card-pkm-type-sub"><img src="./assets/icons/${type1}.svg" alt="${type1}"></div>
                ${type2 ? `<div class="card-pkm-type-sub"><img src="./assets/icons/${type2}.svg" alt="${type2}"></div>` : ''}
            </div>
            <nav>
                <span id="about-dialog" onclick="loadAboutDialog(${index})">About</span>
                <span id="stats-dialog" onclick="loadStatsDialog(${index})">Stats</span>
                <span id="evochain-dialog" onclick="loadEvoChainDialog(${index})">Evo Chain</span>
            </nav>
            <div id="d-content">
                <table>
                    <tr>
                        <td class="td-left">Height:</td>
                        <td class="td-right">${(allPokemon[index].height / 10).toFixed(1).replace(".", ",")} m</td>
                    </tr>
                    <tr>
                        <td class="td-left">Weight:</td>
                        <td class="td-right">${(allPokemon[index].weight / 10).toFixed(1).replace(".", ",")} kg</td>
                    </tr>
                    <tr>
                        <td class="td-left">Abilities:</td>
                        <td class="td-right">${ability1.charAt(0).toUpperCase() + ability1.slice(1)}${ability2 ? `, ${ability2.charAt(0).toUpperCase() + ability2.slice(1)}` : ''}</td>
                    </tr>
                    <tr>
                        <td class="td-left">Type:</td>
                        <td class="td-right">${type1.charAt(0).toUpperCase() + type1.slice(1)}${type2 ? `, ${type2.charAt(0).toUpperCase() + type2.slice(1)}` : ''}</td>
                    </tr>
                </table>
            </div>
            <div class="d-btn-m">
                <div class="d-btn"><button onclick="prevPkm(${index})"><img src="./assets/icons/arrow_left.svg" alt="back"></button></div>
                <div class="d-btn"><button onclick="nextPkm(${index})"><img src="./assets/icons/arrow_right.svg" alt="forward"></button></div>
            </div>
        </section>`
};

let getTemplateDialogStats = (index) => {
    let hp = allPokemon[index].hp;
    let atk = allPokemon[index].atk;
    let def = allPokemon[index].def;
    let speed = allPokemon[index].speed;
    return `<table>
                <tr>
                    <td class="td-left">HP:</td>
                    <td class="td-right-bar"><div class="bar"><div class="scale" style="width: ${hp/2}%;">${hp}</div></div></td>
                </tr>
                 <tr>
                    <td class="td-left">Attack:</td>
                     <td class="td-right-bar"><div class="bar"><div class="scale" style="width: ${atk/2}%;">${atk}</div></div></td>
                </tr>
                <tr>
                    <td class="td-left">Defense:</td>
                    <td class="td-right-bar"><div class="bar"><div class="scale" style="width: ${def/2}%;">${def}</div></div></td>
                </tr>
                <tr>
                    <td class="td-left">Speed:</td>
                    <td class="td-right-bar"><div class="bar"><div class="scale" style="width: ${speed/2}%;">${speed}</div></div></td>
                </tr>
            </table>`
};

let getTemplateDialogAbout = (index) => {
    let type1 = allPokemon[index].type[0];
    let type2 = allPokemon[index].type[1];
    let ability1 = allPokemon[index].ability[0];
    let ability2 = allPokemon[index].ability[1];
    return `<table>
                <tr>
                    <td class="td-left">Height:</td>
                    <td class="td-right">${(allPokemon[index].height / 10).toFixed(1).replace(".", ",")} m</td>
                </tr>
                <tr>
                    <td class="td-left">Weight:</td>
                    <td class="td-right">${(allPokemon[index].weight / 10).toFixed(1).replace(".", ",")} kg</td>
                </tr>
                <tr>
                    <td class="td-left">Abilities:</td>
                    <td class="td-right">${ability1.charAt(0).toUpperCase() + ability1.slice(1)}${ability2 ? `, ${ability2.charAt(0).toUpperCase() + ability2.slice(1)}` : ''}</td>
                </tr>
                <tr>
                    <td class="td-left">Type:</td>
                    <td class="td-right">${type1.charAt(0).toUpperCase() + type1.slice(1)}${type2 ? `, ${type2.charAt(0).toUpperCase() + type2.slice(1)}` : ''}</td>
                </tr>
            </table>`
};

let getTemplateEvoChain = (index) => {
    let poke1 = allPokemon[index].pkm1;
    let poke2 = allPokemon[index].pkm2;
    let poke3 = allPokemon[index].pkm3;
    return `<div class="d-evo-chain">
                    <div class="d-evo"><img onclick="openOverlay(${(poke1 - 1)})" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke1}.png"
                            alt=""></div>
        ${poke2 ? ` <img class="arrow" src="./assets/icons/arrow_right_small.svg" alt="">
                    <div class="d-evo"><img onclick="openOverlay(${(poke2 - 1)})" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke2}.png"
                            alt=""></div>` : ''}
        ${poke3 ? ` <img class="arrow" src="./assets/icons/arrow_right_small.svg" alt="">
                    <div class="d-evo"><img onclick="openOverlay(${(poke3 - 1)})" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke3}.png"
                            alt=""></div>` : ''}`
};
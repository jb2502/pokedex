let getTemplatePkmCard = (array, index) => {
    let type1 = array[index].type[0];
    let type2 = array[index].type[1];
    return `<div class="card card-${type1}" id="open-overlay" onclick="openOverlay(${index})">
                <div class="card-pkm-header">
                    <p class="card-order">#${array[index].id}</p>
                    <p class="card-pkm-name">${array[index].name.charAt(0).toUpperCase() + array[index].name.slice(1)}</p>
                </div>
                <div class="card-pkm-img card-pkm-img-bg-${type1}">
                    <img src="${array[index].img}"
                        alt="${array[index].name.charAt(0).toUpperCase() + array[index].name.slice(1)}">
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

let getTemplateDialog = (array, index) => {
    let type1 = array[0].type[0];
    let type2 = array[0].type[1];
    let ability1 = array[0].ability[0];
    let ability2 = array[0].ability[1];
    return `<section>
            <div class="d-header">
                <div class="d-header-id">#${array[0].id}</div>
                <div class="d-header-name">${array[0].name.charAt(0).toUpperCase() + array[0].name.slice(1)}</div>
                <div>
                    <img id="close-overlay" onclick="closeOverlay(${index})" src="./assets/icons/close.svg" alt="close dialog">
                </div>
            </div>
            <div class="d-image card-pkm-img-bg-${type1}">
                <img src="${array[0].img}"
                    alt="${array[0].name.charAt(0).toUpperCase() + array[0].name.slice(1)}">
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
                        <td class="td-right">${(array[0].height / 10).toFixed(1).replace(".", ",")} m</td>
                    </tr>
                    <tr>
                        <td class="td-left">Weight:</td>
                        <td class="td-right">${(array[0].weight / 10).toFixed(1).replace(".", ",")} kg</td>
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

let getTemplateDialogAbout = (array) => {
    let type1 = array[0].type[0];
    let type2 = array[0].type[1];
    let ability1 = array[0].ability[0];
    let ability2 = array[0].ability[1];
    return `<table>
                <tr>
                    <td class="td-left">Height:</td>
                    <td class="td-right">${(array[0].height / 10).toFixed(1).replace(".", ",")} m</td>
                </tr>
                <tr>
                    <td class="td-left">Weight:</td>
                    <td class="td-right">${(array[0].weight / 10).toFixed(1).replace(".", ",")} kg</td>
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

let getTemplateDialogStats = (array) => {
    let hp = array[0].hp;
    let atk = array[0].atk;
    let def = array[0].def;
    let speed = array[0].speed;
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

let getTemplateEvoChain = (array) => {
    let poke1 = array[0].pkm1;
    let poke2 = array[0].pkm2;
    let poke3 = array[0].pkm3;
    return `<div class="d-evo-chain">
                    <div class="d-evo"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke1}.png"
                            alt=""></div>
        ${poke2 ? ` <img class="arrow" src="./assets/icons/arrow_right_small.svg" alt="">
                    <div class="d-evo"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke2}.png"
                            alt=""></div>` : ''}
        ${poke3 ? ` <img class="arrow" src="./assets/icons/arrow_right_small.svg" alt="">
                    <div class="d-evo"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke3}.png"
                            alt=""></div>` : ''}`
};
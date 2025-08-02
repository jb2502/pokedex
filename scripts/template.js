let getTemplatePkmCard = (index) => {
    let type0 = allPokemon[index].type[0];
    let type1 = allPokemon[index].type[1] || '';
    return `<div class="card card-${type0}" id="open-overlay" onclick="openOverlay(${allPokemon[index].id})">
                <div class="card-pkm-header">
                    <p class="card-order">#${allPokemon[index].id}</p>
                    <p class="card-pkm-name">${allPokemon[index].name.charAt(0).toUpperCase() + allPokemon[index].name.slice(1)}</p>
                </div>
                <div class="card-pkm-img card-pkm-img-bg-${type0}">
                    <img src="${allPokemon[index].img}"
                        alt="">
                </div>
                <div class="card-pkm-type">
                    <div class="card-pkm-type-sub"><img src="./assets/icons/${type0}.svg" alt="${type0}"></div>
                    ${type1 ? `<div class="card-pkm-type-sub"><img src="./assets/icons/${type1}.svg" alt="${type1}"></div>` : ''}
                </div>
            </div>`};


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
}
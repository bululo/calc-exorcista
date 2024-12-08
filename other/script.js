// Function to populate the equipments selects
function populateItemsSelect(selectId, itemList) {
    const select = document.getElementById(selectId);

    itemList.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        option.data = item.dbname;
        option.setAttribute('data-slot1', item.slot1);
        option.setAttribute('data-slot2', item.slot2);
        option.setAttribute('data-slot3', item.slot3);
        option.setAttribute('data-slot4', item.slot4);
        // Flag de Arma de Duas Mãos
        if (selectId === 'wea' && item.twoHanded)
            option.setAttribute('twoHanded', 'true');

        // Alguns acessórios dependem de lado para equipar
        if (selectId === 'ac1') {
            if (item.position !== '2')
                select.appendChild(option);
        } else if (selectId === 'ac2') {
            if (item.position !== '1')
                select.appendChild(option);
        } else {
            select.appendChild(option);
        }
    });

    populateSlot(selectId);
}

// Function to populate the Costume Enchants and Shadow Equipments selects
function populateCostumeShadowSelect(selectId, itemList) {
    const select = document.getElementById(selectId);

    itemList.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        option.data = item.dbname;
        select.appendChild(option);
    });

    updateImage(selectId, select.value);
}

// Function to populate select slots with cards and enchants options
function populateSlot(position) {
    let select = document.getElementById(position);

    updateImage(position, select.value);

    // For each of the 4 possible slots
    for (let i = 1; i < 5; i++) {
        let slot = document.getElementById(position + '_slot' + i);
        // Clears previous setup
        for (let j = (slot.options.length - 1); j >= 0; j--) {
            slot.options.remove(j);
        }
        // Retrieves slot info
        let text = select.options[select.selectedIndex].getAttribute('data-slot' + i);
        if (text === "card") {
            slot.style.display = "block";
            option = document.createElement('option');
            option.value = null;
            option.textContent = String("Carta");
            slot.appendChild(option);
            // Populate with cards
            for (let j = 0; j < cards.length; j++) {
                let position2 = position;
                if (position === 'ac1' || position === 'ac2') {
                    position2 = 'acc';
                } else if (position === 'mid') {
                    position2 = 'top';
                }
                if (cards[j].position === position2) {
                    option = document.createElement('option');
                    option.value = cards[j].id;
                    option.textContent = cards[j].name;
                    slot.appendChild(option);
                }
            }
        } else if (text !== "undefined" && text !== null) {
            slot.style.display = "block";
            option = document.createElement('option');
            option.value = null;
            option.textContent = String("Encantamento");
            slot.appendChild(option);
            // Encantamentos
            // Splits single string into array of enchants
            enchantArray = text.split(',')
            enchantArray.forEach(item => {
                option = document.createElement('option');
                option.value = item;
                searchObject = enchants.find((enchant) => enchant.id === item);
                //enchants[enchants.indexOf(searchObject)].script();
                //searchObject.script();
                option.textContent = String(searchObject.name);
                slot.appendChild(option);
            });
        } else {
            slot.style.display = "none";
        }
    }
    // Desequipa Escudo ao equipar Arma de 2 Mãos ou o contrário
    if (position === 'wea' && select.options[select.selectedIndex].getAttribute('twoHanded')==='true' && document.getElementById("shi").selectedIndex !== 0){
        document.getElementById("shi").selectedIndex = 0;
        document.getElementById("shi").onchange();
    } else if (position === 'shi' && document.getElementById('wea').options[document.getElementById('wea').selectedIndex].getAttribute('twoHanded') === 'true' && select.selectedIndex !== 0){
        document.getElementById("wea").selectedIndex = 0;
        document.getElementById("wea").onchange();
    }
}

// Function to populate the monster select
function populateTargetSelect() {
    let select = document.getElementById('target_name');
    let option;
    monsters.forEach(monster => {
        const option = document.createElement('option');
        option.value = monster.id;
        option.textContent = monster.name;
        select.appendChild(option);
    });
    select = document.getElementById('target_race');
    // let FORMLESS = 1;
    option = document.createElement('option');
    option.value = FORMLESS;
    option.textContent = 'Amorfo';
    select.appendChild(option);
    // let BRUTE = 2;
    option = document.createElement('option');
    option.value = BRUTE;
    option.textContent = 'Bruto';
    select.appendChild(option);
    // let PLANT = 3;
    option = document.createElement('option');
    option.value = PLANT;
    option.textContent = 'Planta';
    select.appendChild(option);
    // let INSECT = 4;
    option = document.createElement('option');
    option.value = INSECT;
    option.textContent = 'Inseto';
    select.appendChild(option);
    // let FISH = 5;
    option = document.createElement('option');
    option.value = FISH;
    option.textContent = 'Peixe';
    select.appendChild(option);
    // let DEMON = 6;
    option = document.createElement('option');
    option.value = DEMON;
    option.textContent = 'Demônio';
    select.appendChild(option);
    // let DEMI_HUMAN = 7;
    option = document.createElement('option');
    option.value = DEMI_HUMAN;
    option.textContent = 'Humanoide';
    select.appendChild(option);
    // let ANGEL = 8;
    option = document.createElement('option');
    option.value = ANGEL;
    option.textContent = 'Anjo';
    select.appendChild(option);
    // let DRAGON = 9;
    option = document.createElement('option');
    option.value = DRAGON;
    option.textContent = 'Dragão';
    select.appendChild(option);
    // let UNDEAD = 10;
    option = document.createElement('option');
    option.value = UNDEAD;
    option.textContent = 'Morto-Vivo';
    select.appendChild(option);

    select = document.getElementById('target_property');
    // let NEUTRAL = 1;
    option = document.createElement('option');
    option.value = NEUTRAL;
    option.textContent = 'Neutro';
    select.appendChild(option);
    // let WATER = 2;
    option = document.createElement('option');
    option.value = WATER;
    option.textContent = 'Água';
    select.appendChild(option);
    // let EARTH = 3;
    option = document.createElement('option');
    option.value = EARTH;
    option.textContent = 'Terra';
    select.appendChild(option);
    // let FIRE = 4;
    option = document.createElement('option');
    option.value = FIRE;
    option.textContent = 'Fogo';
    select.appendChild(option);
    // let WIND = 5;
    option = document.createElement('option');
    option.value = WIND;
    option.textContent = 'Vento';
    select.appendChild(option);
    // let POISON = 6;
    option = document.createElement('option');
    option.value = POISON;
    option.textContent = 'Veneno';
    select.appendChild(option);
    // let HOLY = 7;
    option = document.createElement('option');
    option.value = HOLY;
    option.textContent = 'Sagrado';
    select.appendChild(option);
    // let DARK = 8;
    option = document.createElement('option');
    option.value = DARK;
    option.textContent = 'Sombrio';
    select.appendChild(option);
    // let GHOST = 9;
    option = document.createElement('option');
    option.value = GHOST;
    option.textContent = 'Fantasma';
    select.appendChild(option);
    // let UNDEAD = 10;
    option = document.createElement('option');
    option.value = UNDEAD;
    option.textContent = 'Maldito';
    select.appendChild(option);

    select = document.getElementById('target_property_level');
    for (let i = 1; i < 5; i++) {
        option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}

// Atualiza a seção de atributos do alvo escolhido
function loadTarget(id) {
    //alert('id: ' + id);
    let searchObject = monsters.find((monster) => monster.id === id);
    //alert('dbname: ' + searchObject.dbname);
    document.getElementById('target_level').value = searchObject.level;
    document.getElementById('target_type').selectedIndex = searchObject.type - 1;

    document.getElementById('target_race').value = searchObject.race;
    document.getElementById('target_property').value = searchObject.property[0];
    document.getElementById('target_property_level').value = searchObject.property[1];
    document.getElementById('target_size').selectedIndex = searchObject.size - 1;
    document.getElementById('target_int').value = searchObject.int;
    document.getElementById('target_mdef').value = searchObject.mdef;
}

// Atualiza o ícone dos equipamentos nos selects
function updateImage(position, value) {
    let image = document.getElementById(position + "_img");
    let id = value;
    //let server = x;
    // equipamentos para as seleções vazias
    if (id === "") {
        switch (position) {
            case "top":
                id = "2220";
                break;
            case "mid":
                id = "2203";
                break;
            case "low":
                id = "2269";
                break;
            case "arm":
                id = "2309";
                break;
            case "wea":
                id = "1551";
                break;
            case "shi":
                id = "2103";
                break;
            case "gar":
                id = "2503";
                break;
            case "sho":
                id = "2404";
                break;
            case "ac1":
                id = "2601";
                break;
            case "ac2":
                id = "2607";
                break;
            // Encantamentos Visuais
            case "c_top":
                id = "19602";
                break;
            case "c_mid":
                id = "19603";
                break;
            case "c_low":
                id = "19604";
                break;
            case "c_gar":
                id = "20506";
                break;
            // Sombrios
            case "s_arm":
                id = "24273";
                break;
            case "s_wea":
                id = "24292";
                break;
            case "s_shi":
                id = "24305";
                break;
            case "s_sho":
                id = "24260";
                break;
            case "s_ear":
                id = "24248";
                break;
            case "s_nec":
                id = "24252";
                break;
        }
    }
    // Seleciona de qual servidor o ícone da image será escolhido
    if (id === '470106') {
        image.src = "https://www.divine-pride.net/img/items/item/jRO/" + id;
    } else if (id === '29516' || id === '310011') {
        image.src = "https://www.divine-pride.net/img/items/item/kRO/" + id;
    } else {
        image.src = "https://www.divine-pride.net/img/items/item/bRO/" + id;
    }
}

// Função para preencher os elementos <select> com valores de refinamento de 0 a 20
function populateRefinementOptions() {
    const refinementsSelects = document.querySelectorAll('[class^="refine"]');

    refinementsSelects.forEach(select => {
        for (let i = 0; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `+${i}`;
            select.appendChild(option);
        }
    });
}

// Função para preencher os elementos <select> com valores de refinamento de 0 a 10
function populateShadowRefinementOptions() {
    const refinementsSelects = document.querySelectorAll('[class^="s_refine"]');

    refinementsSelects.forEach(select => {
        for (let i = 0; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `+${i}`;
            select.appendChild(option);
        }
    });
}

// Tab manager
function switchTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        //tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].classList.remove("active");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "grid";
    //evt.currentTarget.className += " active";
    evt.currentTarget.classList.add("active");
}

// Consumível exclusivo - ativar uma pílula de combate desativa a anterior
function pillSelector (pill){
    if (pill.checked === true){
        if (pill.id === "Combat_Pill"){
            document.getElementById("P_Combat_Pill").checked = false;
        } else {
            document.getElementById("Combat_Pill").checked = false;
        }
    }
}

function classSelector(job) {
    const selectElement = document.getElementById("skill");
    selectElement.innerHTML = "";
    let options = [];
    switch(job) {
        case "ARCHBISHOP":
            options = [
                { value: "AB_ADORAMUS", text: "Adoramus" },
                { value: "AB_JUDEX", text: "Judex" },
                { value: "PR_MAGNUS", text: "Magnus Exorcismus" }
            ];
            break;
        case "SORCERER":
            options = [
                { value: "SO_DIAMONDDUST", text: "Pó de Diamante" }
            ];
            break;
        default:
            options = [
                { value: "FEFEF", text: "FEFEFE" }
            ];
            break;
    }
    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        selectElement.appendChild(option);
    });
}

// Atualiza a imagem das cartas e encantamentos
// function updateImage(element) {
//     alert(element.value);
//     //alert(element.options[element.selectedIndex].text);
//
//     var rect = element.getBoundingClientRect();
//     image = document.getElementById(element.id + "_img");
//     var rect2 = image.getBoundingClientRect();
//
//     image.style.marginTop = (rect.top-rect2.top) + "px";
//     image.style.marginLeft = (1+rect.left-rect2.left) + "px";
//     id = element.value;
//     if (id === "null") {
//         alert("entrou");
//         id = "1252";
//     }
//     image.src = "https://www.divine-pride.net/img/items/item/bRO/" + id;
//
// }
function saveCalc() {
    const elements = document.querySelectorAll('input, select, textarea');
    const data = {};

    elements.forEach(element => {
        if (element.type === 'radio' || element.type === 'checkbox') {
            data[element.id] = element.checked;
        } else {
            data[element.id] = element.value;
        }
    });
    // if (URL){
    //     saveDataToURL(data);
    // } else {
        let slot = document.getElementById('loadout').value;
        if (slot === '0')
            localStorage.setItem('calcData', JSON.stringify(data));
        else
            localStorage.setItem('calcData' + slot, JSON.stringify(data));
    // }
}

function saveDataToURL(data) {
    const jsonData = JSON.stringify(data);
    const b64 = btoa(jsonData);
    const encodedData = encodeURIComponent(b64);
    const currentURL = window.location.href.split('?')[0]; // Get the base URL
    const newURL = `${currentURL}?config=${encodedData}`;
    window.history.pushState({}, '', newURL); // Update the URL without reloading
    navigator.clipboard.writeText(newURL).catch(err => { // Copy the new URL to the clipboard
        console.error('Failed to copy the URL to the clipboard: ', err);
    });
}

function loadSavedCalc() {
    let data = '';
    // if (initial){
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const encodedData = urlParams.get('config');
    //     if (encodedData) {
    //         const decodedData = decodeURIComponent(encodedData);
    //         data = JSON.parse(atob(decodedData));
    //     }
    // }
    if (data === '') {
        let slot = document.getElementById('loadout').value;
        if (slot === '0')
            data = JSON.parse(localStorage.getItem('calcData'));
        else
            data = JSON.parse(localStorage.getItem('calcData' + slot));
    }
    if (data) {
        for (const [id, value] of Object.entries(data)) {
            const element = document.getElementById(id);

            if (element) {
                if (element.type === 'radio' || element.type === 'checkbox') {
                    element.checked = value;
                } else {
                    element.value = value;
                }
                if (element.type === 'radio') {
                    if (element.checked)
                        classSelector(element.value);
                } else {
                    element.dispatchEvent(new Event('change', {bubbles: true}));
                }
            }
        }  
    }
    calcularPontos();
    damage_calculation();
}

function loadDataFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('config');
    if (encodedData) {
        const decodedData = decodeURIComponent(encodedData);
        const data = JSON.parse(decodedData);
        // Now you have the data object to work with
        loadSavedConfig(data); // Use your load function here
    }
}


function load() {
    // const radioButtons = document.querySelectorAll('input[name="class"]');
    // radioButtons.forEach(radio => {
    //     radio.addEventListener('change', (event) => {
    //         classSelector(event.target.value);
    //     });
    // });
    // classSelector(document.querySelector('input[name="class"]:checked').value);
    // Chamada da função para preencher os selects de refinamento com +0~+20
    populateRefinementOptions();
    populateShadowRefinementOptions();
    // Chamada da função para preencher as listas de equipamentos, cartas
    // encantamentos e bônus aleatório
    populateItemsSelect('top', tops);
    populateItemsSelect('mid', mid);
    populateItemsSelect('low', low);
    populateItemsSelect('arm', armors);
    populateItemsSelect('wea', weapons);
    populateItemsSelect('shi', shields);
    populateItemsSelect('gar', garments);
    populateItemsSelect('sho', shoes);
    populateItemsSelect('ac1', accessory);
    populateItemsSelect('ac2', accessory);
    // Encantamentos Visuais
    populateCostumeShadowSelect('c_top', c_top);
    populateCostumeShadowSelect('c_mid', c_mid);
    populateCostumeShadowSelect('c_low', c_low);
    populateCostumeShadowSelect('c_gar', c_gar);
    // Sombrios
    populateCostumeShadowSelect('s_arm', s_armor);
    populateCostumeShadowSelect('s_wea', s_weapon);
    populateCostumeShadowSelect('s_shi', s_shield);
    populateCostumeShadowSelect('s_sho', s_shoes);
    populateCostumeShadowSelect('s_ear', s_earring);
    populateCostumeShadowSelect('s_nec', s_necklace);
    // Chama a função para preencher os alvos
    populateTargetSelect();
    // Calculo dos atributos
    calcularPontos();
    // Seleciona a aba com id="defaultOpen"
    document.getElementById("defaultOpen").click();
    document.getElementById('target_name').selectedIndex = 5;
    loadTarget(document.getElementById('target_name').value);
    // Recupera a configuração salva no slot0 se existe
    loadSavedCalc();
}

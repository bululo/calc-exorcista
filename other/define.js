// #DEFINEs para melhorar a legibilidade do código das funções e facilitar
// criar os scripts dos equipamentos, cartas e encantamentos
let ALL = 0
// TARGET SIZE
let SMALL = 1;
let MEDIUM = 2;
let LARGE = 3;
// MONSTER RACES
let FORMLESS = 1;
let BRUTE = 2;
let PLANT = 3;
let INSECT = 4;
let FISH = 5;
let DEMON = 6;
let DEMI_HUMAN = 7;
let ANGEL = 8;
let DRAGON = 9;
let UNDEAD = 10;
// PLAYER RACES
let HUMAN = 11;
let DORAM = 12;
// PROPERTIES
let NEUTRAL = 1;
let WATER = 2;
let EARTH = 3;
let FIRE = 4;
let WIND = 5;
let POISON = 6;
let HOLY = 7;
let DARK = 8;
let GHOST = 9;
//let UNDEAD = 10;
// MONSTER TYPE
let NORMAL = 1;
let BOSS = 2;
let GUARDIAN = 3;
// WEAPON CLASSES
let ONE_HANDED_STAFF = 1;
let TWO_HANDED_STAFF = 2;
let MACE = 3;
let KNUCKLE = 4;
let BOOK = 5;

// Tabela de Propriedades
const propTableHoly = [
    [100, 100, 100, 100, 100,  75,   0, 125, 100, 125],
    [100, 100, 100, 100, 100,  75,   0, 150, 100, 150],
    [100, 100, 100, 100, 100,  50,   0, 175, 100, 175],
    [100, 100, 100, 100, 100,  50,   0, 200, 100, 200]
];
const propTableWater = [
    [100,  25, 100, 150,  90, 150, 100, 100, 100, 100],
    [100,   0, 100, 175,  80, 150, 100, 100, 100, 100],
    [100,   0, 100, 200,  70, 125, 100, 100, 100, 100],
    [100,   0, 100, 200,  60, 125, 100, 100, 100, 100]
];

const propTable = [
    // NEUTRAL = 1;
    [],
    // WATER = 2;
    propTableWater,
    // EARTH = 3;
    [],
    // FIRE = 4;
    [],
    // WIND = 5;
    [],
    // POISON = 6;
    [],
    // HOLY = 7;
    propTableHoly,
    // DARK = 8;
    [],
    // GHOST = 9;
    [],
    // UNDEAD = 10;
    [],
]
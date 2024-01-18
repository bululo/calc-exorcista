const monsters = [
    //
    {
        id: '2476',
        dbname: 'MG_AMDARAIS',
        name: 'Amdarais',
        level: 150,
        type: BOSS,

        race: UNDEAD,
        property: [UNDEAD, 4],
        size: LARGE,

        hp: 4290000,
        mdef: 40,
        int: 169,
    },
    {
        id: '3150',
        dbname: 'MG_AMDARAIS_H',
        name: 'Amdarais Sombrio',
        level: 180,
        type: BOSS,

        race: UNDEAD,
        property: [UNDEAD, 4],
        size: LARGE,

        hp: 42900000,
        mdef: 40,
        int: 169,
    },
    {
        id: '3450',
        dbname: 'BIJOU',
        name: 'Bijou',
        level: 115,
        type: BOSS,

        race: UNDEAD,
        property: [UNDEAD, 4],
        size: LARGE,

        hp: 10000000,
        mdef: 200,
        int: 150,
    },
    // DUMMIES TAMANHO
    {
        id: '21064',
        dbname: 'S_DUMMY_100_SMALL',
        name: 'Dummy - Pequeno',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [NEUTRAL, 1],
        size: SMALL,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21065',
        dbname: 'S_DUMMY_100_MEDIUM',
        name: 'Dummy - Médio',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21066',
        dbname: 'S_DUMMY_100_LARGE',
        name: 'Dummy - Grande',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [NEUTRAL, 1],
        size: LARGE,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    // DUMMIES RAÇA
    {
        id: '21067',
        dbname: 'S_DUMMY_100_NOTHING',
        name: 'Dummy - Amorfo',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21068',
        dbname: 'S_DUMMY_100_DRAGON',
        name: 'Dummy - Dragão',
        level: 100,
        type: BOSS,

        race: DRAGON,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21069',
        dbname: 'S_DUMMY_100_ANIMAL',
        name: 'Dummy - Bruto',
        level: 100,
        type: BOSS,

        race: BRUTE,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21070',
        dbname: 'S_DUMMY_100_HUMAN',
        name: 'Dummy - Humanoide',
        level: 100,
        type: BOSS,

        race: DEMI_HUMAN,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21071',
        dbname: 'S_DUMMY_100_INSECT',
        name: 'Dummy - Inseto',
        level: 100,
        type: BOSS,

        race: INSECT,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21072',
        dbname: 'S_DUMMY_100_FISH',
        name: 'Dummy - Peixe',
        level: 100,
        type: BOSS,

        race: FISH,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21073',
        dbname: 'S_DUMMY_100_DEMON',
        name: 'Dummy - Demônio',
        level: 100,
        type: BOSS,

        race: DEMON,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21074',
        dbname: 'S_DUMMY_100_PLANT',
        name: 'Dummy - Planta',
        level: 100,
        type: BOSS,

        race: PLANT,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21075',
        dbname: 'S_DUMMY_100_ANGEL',
        name: 'Dummy - Anjo',
        level: 100,
        type: BOSS,

        race: ANGEL,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21076',
        dbname: 'S_DUMMY_100_UNDEAD',
        name: 'Dummy - Morto-Vivo',
        level: 100,
        type: BOSS,

        race: UNDEAD,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    // DUMMIES PROPRIEDADE
    {
        id: '21077',
        dbname: 'S_DUMMY_100_NOTHING2',
        name: 'Dummy - Neutro',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [NEUTRAL, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21078',
        dbname: 'S_DUMMY_100_WATER',
        name: 'Dummy - Água',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [WATER, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21079',
        dbname: 'S_DUMMY_100_GROUND',
        name: 'Dummy - Terra',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [EARTH, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21080',
        dbname: 'S_DUMMY_100_FIRE',
        name: 'Dummy - Fogo',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [FIRE, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21081',
        dbname: 'S_DUMMY_100_WIND',
        name: 'Dummy - Vento',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [WIND, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21082',
        dbname: 'S_DUMMY_100_POISON',
        name: 'Dummy - Veneno',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [POISON, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21083',
        dbname: 'S_DUMMY_100_SAINT',
        name: 'Dummy - Sagrado',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [HOLY, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21084',
        dbname: 'S_DUMMY_100_DARKNESS',
        name: 'Dummy - Sombrio',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [DARK, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21085',
        dbname: 'S_DUMMY_100_TELEKINESIS',
        name: 'Dummy - Fantasma',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [GHOST, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
    {
        id: '21086',
        dbname: 'S_DUMMY_100_UNDEAD2',
        name: 'Dummy - Maldito',
        level: 100,
        type: BOSS,

        race: FORMLESS,
        property: [UNDEAD, 1],
        size: MEDIUM,

        hp: 2000000000,
        mdef: 0,
        int: 1,
    },
];

const properties = [[100, 100, 100, 100, 100, 100,    0 , 125, 100, 150],
                    [100, 100, 100, 100, 100, 100, (-25), 150, 100, 175],
                    [100, 100, 100, 100, 100, 125, (-50), 175, 100, 200],
                    [100,  75,  75,  75,  75, 125,(-100), 200, 100, 200]];
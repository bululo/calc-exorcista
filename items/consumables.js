const consumables = [
    {
        id: '12883',
        dbname: 'Almighty',
        name: 'Bolinho Divino',
        script: function () {
            equipStats.str += 10;
            equipStats.agi += 10;
            equipStats.vit += 10;
            equipStats.int += 10;
            equipStats.dex += 10;
            equipStats.luk += 10;
            equipStats.flatMATK += 30;
        }
    },
    {
        id: '23475',
        dbname: 'Infinity_Drink',
        name: 'Poção Infinita',
        script: function () {
            // Dano mágico de todas as propriedades +5%.
            multipliers.skill_property[ALL] += 5;
        }
    },
    {
        id: '12796',
        dbname: 'Red_Booster',
        name: 'Elixir Rubro',
        script: function () {
            // ATQ e ATQM +30.
            equipStats.flatMATK += 30;
            // Conjuração variável -5%.
            equipStats.VCT += 5;
            // Velocidade de ataque +5%.
            equipStats.percentASPD += 5;
        }
    },
    {
        id: '14601',
        dbname: 'Tyr\'s_Blessing',
        name: 'Bênção de Tyr',
        script: function () {
            // ATQ e ATQM +20
            equipStats.flatMATK += 20;
        }
    },
    {
        id: '12791',
        dbname: 'Combat_Pill',
        name: 'Pílula de Combate',
        script: function () {
            // Dano físico e mágico +5%.
            multipliers.matk += 5;
        }
    },
    {
        id: '12792',
        dbname: 'P_Combat_Pill',
        name: 'Grande Pílula de Combate',
        script: function () {
            // Dano físico e mágico +10%.
            multipliers.matk += 10;
        }
    },
]
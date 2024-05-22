const tops = [
    {
        id: '19308',
        dbname: 'Amistr_Beret',
        name: 'Quepe de Amistr',
        slot1: 'card',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.top / 2) * 10;
            if (refinement.top >= 7) {
                equipStats.VCT += 10;
            }
            if (refinement.top >= 9) {
                multipliers.skill_property[NEUTRAL] += 10;
                multipliers.skill_property[HOLY] += 10;
            }
            if (refinement.top >= 11) {
                multipliers.matk += 3;
            }
            if (refinement.top > 10 && refinement.top <= 15) {
                equipStats.flatFCT += (refinement.top - 10) / 10;
            }
            // Conjunto
            if (document.getElementById('wea').value === '1631') {
                equipStats.flatMATK += Math.floor(refinement.weapon / 2) * 10;
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += Math.floor(refinement.weapon / 2) * 30;
            }
        }
    },
    {
        id: '18972',
        dbname: 'Old_Mitra',
        name: 'Memorável Desejo dos Deuses',
        slot1: 'card',
        slot2: '29071,29072,29073,29074,29075,29076,29077,29078,29079,29080',
        slot3: '4730,4731,4732,4733,4734,4710,4711,4712,4713,4714,4720,4721,4722,4723,4724,4750,4751,4752,4753,4754',
        slot4: '4730,4731,4732,4733,4734,4710,4711,4712,4713,4714,4720,4721,4722,4723,4724,4750,4751,4752,4753,4754',
        script: function () {
            equipStats.str += 1;
            equipStats.agi += 1;
            equipStats.vit += 1;
            equipStats.int += 1;
            equipStats.dex += 1;
            equipStats.luk += 1;
            equipStats.flatMATK += 2 * refinement.top;
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.top / 2) * 20;
        }
    },
    {
        id: '18849',
        dbname: 'Celines_Ribbon',
        name: 'Laço da Celine',
        slot1: 'card',
        slot3: '4730,4731,4732,4710,4711,4712,4720,4721,4722,4750,4751,4752',
        slot4: '4869,4872,4873,4881,4813,4812,4826,4827,4760,4761',
        script: function () {
            equipStats.dex += 3;
            equipStats.flatMATK += 40;
            equipStats.flatMATK += refinement.top * 7;
        }
    },
    {
        id: '19469',
        dbname: 'Crown_Of_Saint_Jp',
        name: 'Coroa Sagrada',
        script: function () {
            equipStats.percentASPD += 10;
            if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                multipliers.skill += 20;
            if (refinement.top >= 9) {
                equipStats.percentASPD += 5;
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
            }
            if (refinement.top >= 11) {
                equipStats.percentASPD += 5;
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            // Ao aprender [Gênese] nv.5:
            multipliers.protocol[BOSS] += 25;
            // A cada nível de [Lauda Ramus]:
            // Dano mágico contra oponentes de propriedade Neutro, Terra, Maldito e Fantasma +5%.
            multipliers.property[NEUTRAL] += 5 * 4;
            multipliers.property[EARTH] += 5 * 4;
            multipliers.property[UNDEAD] += 5 * 4;
            multipliers.property[GHOST] += 5 * 4;
            // A cada nível de [Lauda Agnus]:
            // Dano mágico contra oponentes de propriedade Neutro, Terra, Maldito e Fantasma +5%.
            multipliers.property[NEUTRAL] += 5 * 4;
            multipliers.property[EARTH] += 5 * 4;
            multipliers.property[UNDEAD] += 5 * 4;
            multipliers.property[GHOST] += 5 * 4;
            // A cada refino:
            // Dano mágico contra as raças Humano e Humanoide +2%.
            multipliers.race[HUMAN] += refinement.top * 2;
            multipliers.race[DEMI_HUMAN] += refinement.top * 2;
        }
    },
    {
        id: '400213',
        dbname: 'Faith_Of_Yggdrasil',
        name: 'Asas de Yggdrasil',
        slot1: 'card',
        script: function () {
            multipliers.size[ALL] += 10;
            if (refinement.top >= 10) {
                equipStats.castdelay += 20;
                multipliers.size[ALL] += 15;
            }
            if (refinement.top >= 12) {
                multipliers.size[ALL] += 15;
            }
        }
    },
    {
        id: '400287',
        dbname: 'Legacy_of_Wise_One_J',
        name: 'Capacete de Intensificação',
        slot1: 'card',
        script: function () {
            equipStats.castdelay += 20;
            if (refinement.top >= 10) {
                multipliers.race[ALL] += 30;
            }
        }
    },
    {
        id: '19436',
        dbname: 'VesperHeadGear',
        name: 'Capacete Vesper [Carta Vesper]',
        script: function () {
            // Capacete
            equipStats.dex += 2;
            equipStats.VCT += 10;
            if (refinement.top >= 7)
                equipStats.VCT += 10;
            if (refinement.top >= 9)
                equipStats.VCT += 10;
            // Conjunto [Carta Vesper]
            // Ignora 70% da DEFM de monstros Chefes.
            // Dano mágico de propriedade Neutro e Sagrado +30%.
            if (target.type === BOSS)
                equipStats.bypass += 100;
            multipliers.skill_property[NEUTRAL] += 30;
            multipliers.skill_property[HOLY] += 30;
            // Carta Vesper
            // DES +2.
            equipStats.dex += 2;
            // --------------------------
            // Conjunto
            // [Carta Belzebu]
            // Conjuração variável +30%.
        }
    },
    // {
    //     id: '400059',
    //     dbname: 'Scorpio_Diadem_K',
    //     name: 'Tiara de Escorpião',
    //     slot1: 'card',
    //     script: function () {
    //         flatMATQ += Math.floor(refine / 2) * 20;
    //         if (refine >= 7)
    //             varcast += 15;
    //         if (refine >= 9)
    //             allpropety += 15;
    //         if (refine >= 11) {
    //             flatFCT += 0.2;
    //             small += 15;
    //             medium += 15;
    //         }
    //         // Conjunto
    //         // [Ultio-OS]
    //         // Dano mágico de propriedade Sagrado +5%.
    //         // A cada 2 refinos da arma:
    //         // Dano de [Judex] +3%.
    //     }
    // },
    // {
    //     id: '400044',
    //     dbname: 'Phantom_Cap',
    //     name: 'Cartola Sombria',
    //     slot1: 'card',
    //     script: function () {
    //         flatMATQ += Math.floor(refine / 2) * 20;
    //         if (refine >= 7)
    //             varcast += 15;
    //         if (refine >= 9)
    //             allpropety += 15;
    //         if (refine >= 11) {
    //             flatFCT += 0.2;
    //             small += 15;
    //             medium += 15;
    //         }
    //         // Conjunto
    //         // [Ultio-OS]
    //         // Dano mágico de propriedade Sagrado +5%.
    //         // A cada 2 refinos da arma:
    //         // Conjuração variável -3%.
    //     }
    // },
];

desentupidor = '4730,4710,4720,4750';

const mid = [
    {
        id: '410028',
        dbname: 'Wonder_Egg_Basket_',
        name: 'Cesta das Maravilhas (+10% Tamanho)',
        slot1: 'card',
        script: function () {
            equipStats.percentASPD += 10;
            equipStats.flatMATK += 200;
            multipliers.size[ALL] += 10;
        }
    },
    {
        id: '19380', dbname: 'Floating_Ball', name: 'Fogo Fátuo',
        script: function () {
            equipStats.flatMATK += 35;
            multipliers.protocol[BOSS] += 2;
            if (stats.dex >= 90) {
                equipStats.flatMATK += 70;
                multipliers.protocol[BOSS] += 3;
            }
            if (stats.dex >= 125) {
                equipStats.flatMATK += 140;
                multipliers.protocol[BOSS] += 5;
            }
        }
    },
    {
        id: '19444', dbname: 'Star_Eyepatch_JP_', name: 'Tapa-Olho Cósmico [Carta Orc Herói]', slot4: desentupidor,
        script: function () {
            equipStats.vit += 3;
            equipStats.flatMATK += Math.floor(stats.vit / 10) * 30;
            equipStats.vit += Math.floor(stats.luk / 10) * 3;
            equipStats.luk += Math.floor(stats.luk / 10) * 3;
            // Carta Orc Herói
            equipStats.vit += 3;
        }
    },
    {
        id: '410015', dbname: 'Cor_Core_Headset_', name: 'Fones COR', slot1: 'card', script: function () {
            equipStats.castdelay += 10;
            if (document.getElementById('wea').value === '16089')
                equipStats.flatMATK += 200;
        }
    },
    {
        id: '400114',
        dbname: 'Victory_Ear_JP_',
        name: 'Adorno da Vitória',
        slot1: 'card',
        slot4: desentupidor,
        script: function () {
            multipliers.size[ALL] += 10;
            equipStats.castdelay += 15;
        }
    },
    {
        id: '410026',
        dbname: 'Magic_Heir_J_',
        name: 'Herança Real',
        slot1: 'card',
        slot4: desentupidor,
        script: function () {
            equipStats.flatMATK += stats.baseLv;
        }
    },
    {
        id: '2202',
        dbname: 'Sunglasses_',
        name: 'Óculos Escuros',
        slot1: 'card',
        slot4: desentupidor,
        script: function () {
        }
    },
];

const low = [
    {
        id: '420110', dbname: 'ScarfOfHero_J', name: 'Cachecol Camuflado', script: function () {
            multipliers.size[ALL] += Math.floor(stats.baseLv / 10);
        }
    },
    {
        id: '19499',
        dbname: 'FortunetellinSealed',
        name: 'Echarpe Misteriosa',
        slot4: '4730,4710,4720,4750,4883,4807',
        script: function () {
            equipStats.percentASPD += Math.floor(stats.int / 50) * 2;
            multipliers.size[ALL] += Math.floor(stats.int / 50) * 4;
            equipStats.percentASPD += Math.floor(stats.dex / 50) * 2;
            multipliers.size[ALL] += Math.floor(stats.dex / 50) * 4;
        }
    },
    {
        id: '28502', dbname: 'Mob_Scarf', name: 'Lenço Infame', script: function () {
            if (document.getElementById('wea').value === '2202') {
                equipStats.flatMATK += Math.floor((stats.int + stats.dex) / 80) * 120;
                equipStats.VCT += Math.floor((stats.int + stats.dex) / 80) * 3;
                equipStats.percentASPD += Math.floor((stats.agi + stats.vit) / 80) * 5;
            }
        }
    },
    {
        id: '18536', dbname: 'Foxtail', name: 'Rabo de Gato', script: function () {
            equipStats.flatMATK += 10;
            equipStats.flatFCT += 0.1;
        }
    },
    {
        id: '420028',
        dbname: 'Imperial_Glory',
        name: 'Ombreiras da Glória',
        slot4: '4730,4710,4720,4750,4883,4807',
        script: function () {
            equipStats.castdelay += Math.floor((stats.agi + stats.vit) / 50) * 3;
        }
    },
    {
        id: '420187',
        dbname: 'Sacred_Lapel',
        name: '(jRO) Sacred Lapel',
        script: function () {
            multipliers.skill_property[ALL] += 10;
            multipliers.size[ALL] += 15;
        }
    },
];

const armors = [
    {
        id: '450179', dbname: 'Celine_Dress', name: 'Vestido Mágico da Celine', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 50;
            if (refinement.armor >= 7)
                equipStats.VCT += 10;
            if (refinement.armor >= 9)
                multipliers.skill_property[ALL] += 10;
            if (refinement.armor >= 11)
                equipStats.castdelay += 10;
            if (refinement.armor >= 12)
                equipStats.castdelay += 5;
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                // A cada refino do Laço:
                // Dano mágico de propriedade Sagrado, Sombrio, Veneno e Fantasma +1%.
                // A cada refino da Armadura:
                // Dano mágico de propriedade Sagrado, Sombrio, Veneno e Fantasma +1%.
                multipliers.skill_property[HOLY] += refinement.top + refinement.armor;
                multipliers.skill_property[DARK] += refinement.top + refinement.armor;
                multipliers.skill_property[POISON] += refinement.top + refinement.armor;
                multipliers.skill_property[GHOST] += refinement.top + refinement.armor;
                // Soma dos refinos +19 ou mais:
                // Dano mágico +15%.
                if ((refinement.top + refinement.armor) >= 19)
                    multipliers.matk += 15;
                // Soma dos refinos +23 ou mais:
                // Dano mágico de todas as propriedades +20% adicional.
                if ((refinement.top + refinement.armor) >= 23)
                    multipliers.] += 23;
            }
            // Conjunto [Adereço da Celine]
            if (document.getElementById('ac1').value === '32237' || document.getElementById('ac2').value === '32237') {
                equipStats.flatMATK += refinement.armor * 10
                if (refinement.armor >= 9)
                    equipStats.VCT += 5;
                if (refinement.armor >= 11) {
                    multipliers.skill_property[WATER] += 10;
                    multipliers.skill_property[WIND] += 10;
                    multipliers.skill_property[EARTH] += 10;
                    multipliers.skill_property[FIRE] += 10;
                    multipliers.skill_property[NEUTRAL] += 10;
                }
            }
        }
    },
    {
        id: '15254', dbname: 'Abyss_Dress_BR', name: 'Vestido Abissal', slot1: 'card',
        script: function () {
            if (refinement.armor >= 7) {
                multipliers.race[DEMON] += 10;
                multipliers.race[UNDEAD] += 10;
                multipliers.property[DARK] += 10;
                multipliers.property[UNDEAD] += 10;
            }
            if (refinement.armor >= 9) {
                multipliers.race[DEMON] += 15;
                multipliers.race[UNDEAD] += 15;
                multipliers.property[DARK] += 15;
                multipliers.property[UNDEAD] += 15;
            }
            if (refinement.armor >= 11) {
                multipliers.race[DEMON] += 15;
                multipliers.race[UNDEAD] += 15;
                multipliers.property[DARK] += 15;
                multipliers.property[UNDEAD] += 15;
            }
        }
    },
    {
        id: '15420', dbname: 'Icefall_Dress', name: 'Vestido Glacial',
        script: function () {
            if (refinement.armor >= 5) {
                multipliers.race[FORMLESS] += 10;
                multipliers.race[HUMAN] += 10;
                multipliers.race[DEMI_HUMAN] += 10;
                multipliers.race[DORAM] += 10;
                multipliers.property[FIRE] += 10;
                multipliers.property[WATER] += 10;
            }
            if (refinement.armor >= 7) {
                multipliers.race[FORMLESS] += 15;
                multipliers.race[HUMAN] += 15;
                multipliers.race[DEMI_HUMAN] += 15;
                multipliers.race[DORAM] += 15;
                multipliers.property[FIRE] += 15;
                multipliers.property[WATER] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[FORMLESS] += 15;
                multipliers.race[HUMAN] += 15;
                multipliers.race[DEMI_HUMAN] += 15;
                multipliers.race[DORAM] += 15;
                multipliers.property[FIRE] += 15;
                multipliers.property[WATER] += 15;
            }
        }
    },
    {
        id: '15352', dbname: 'Nature_Dress', name: 'Vestido Natural',
        script: function () {
            if (refinement.armor >= 5) {
                multipliers.race[HUMAN] += 10;
                multipliers.race[DEMI_HUMAN] += 10;
                multipliers.race[BRUTE] += 10;
                multipliers.property[WIND] += 10;
                multipliers.property[EARTH] += 10;
            }
            if (refinement.armor >= 7) {
                multipliers.race[HUMAN] += 15;
                multipliers.race[DEMI_HUMAN] += 15;
                multipliers.race[BRUTE] += 15;
                multipliers.property[WIND] += 15;
                multipliers.property[EARTH] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[HUMAN] += 15;
                multipliers.race[DEMI_HUMAN] += 15;
                multipliers.race[BRUTE] += 15;
                multipliers.property[WIND] += 15;
                multipliers.property[EARTH] += 15;
            }
        }
    },
    {
        id: '450143', dbname: 'Samael_Dress', name: 'Vestido Infernal',
        script: function () {
            if (refinement.armor >= 5) {
                multipliers.race[PLANT] += 10;
                multipliers.race[BRUTE] += 10;
                multipliers.property[HOLY] += 10;
                multipliers.property[POISON] += 10;
            }
            if (refinement.armor >= 7) {
                multipliers.race[PLANT] += 15;
                multipliers.race[BRUTE] += 15;
                multipliers.property[HOLY] += 15;
                multipliers.property[POISON] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[PLANT] += 15;
                multipliers.race[BRUTE] += 15;
                multipliers.property[HOLY] += 15;
                multipliers.property[POISON] += 15;
            }
        }
    },
    {
        id: '450181', dbname: 'White_Lily_Robe__', name: '[MEGA] Vestimenta de Seda', slot1: 'card',
        script: function () {
            equipStats.castdelay += 10;
            if (refinement.armor >= 7)
                multipliers.size[ALL] += 20;
            if (refinement.armor >= 9)
                multipliers.size[ALL] += 20;
        }
    },
    {
        id: '450286', dbname: '', name: '[MEGA] Vestes de Cardeal', slot1: 'card',
        script: function () {
            equipStats.percentASPD += 10;
            multipliers.size[ALL] += 40;
        }
    },
    {
        id: '450224', dbname: '', name: 'Robe do Governante', slot1: 'card',
        script: function () {
            equipStats.percentASPD += 5;
            multipliers.matk += Math.floor(refinement.garment / 3) * 10;
        }
    },
    {
        id: '15121', dbname: 'Robe_Of_Sarah', name: 'Manto da Sara',
        slot1: 'card',
        slot3: '29447,4876,4876 ,4831',
        slot4: '4889,4950,4881',
        script: function () {
        }
    },
    {
        id: '15121 ', dbname: 'Robe_Of_Sarah', name: 'Manto da Sara (Ativado)',
        slot1: 'card',
        slot3: '29447,4876,4876 ,4831',
        slot4: '4889,4950,4881',
        script: function () {
            equipStats.flatMATK += refinement.armor * 8;
        }
    },
    {
        id: '450291', dbname: 'Amazing_Grace', name: '(jRO) Amazing Grace', slot1: 'card',
        script: function () {
            equipStats.percentASPD += 10;
            if (refinement.armor >= 5) {
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            if (refinement.armor >= 7) {
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            if (refinement.armor >= 10) {
                multipliers.skill_property[HOLY] += 15;
            }
            // A cada nível de [Oratio]:
            // INT +3. ATQM +15.
            equipStats.int += 30;
            equipStats.flatMATK += 150;
            // A cada nível de [Gênese]:
            // Dano mágico contra todas as raças +14%.
            multipliers.race[ALL] += 70;
        }
    },
    {
        id: '450291 ', dbname: 'Amazing_Grace', name: 'Graça Alcançada', slot1: 'card',
        script: function () {
            equipStats.percentASPD += 10;
            if (refinement.armor >= 9) {
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            if (refinement.armor >= 11) {
                if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 50;
            }
            if (refinement.armor >= 13) {
                multipliers.skill_property[HOLY] += 15;
            }
            // A cada nível de [Oratio]:
            // INT +3. ATQM +15.
            equipStats.int += 30;
            equipStats.flatMATK += 150;
            // A cada nível de [Gênese]:
            // Dano mágico contra todas as raças +4%.
            multipliers.race[ALL] += 20;
        }
    },
];

malangdo = '29446,29445,4827,4826,4812,4813,4761';
brasilis = '29446,4831';
const weapons = [
    // {
    //     id: '16039', dbname: 'Spoon', name: 'Colher', slot1: 'card',
    //     script: function () {
    //         weapon.baseMATK = 0;
    //         weapon.lv = 3;
    //     }
    // },
    {
        id: '540011', dbname: 'Up_Demon_Hunting_Bible', name: 'Tomo Primordial', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            // A cada 2 refinos:
            // ATQ e ATQM +10.
            equipStats.flatMATK += Math.floor(refinement.weapon / 2) * 10;
            // A cada 3 refinos:
            // Dano de [Gemini Lumen] e [Judex] +25%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 25;
            if (refinement.weapon >= 7) {
                equipStats.percentASPD += 10;
                multipliers.skill_property[HOLY] += 15;
            }
            if (refinement.weapon >= 9)
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
        }
    },
    {
        id: '1631', dbname: 'Holy_Stick', name: 'Vara Sagrada', slot1: 'card', slot3: malangdo, slot4: malangdo,
        script: function () {
            weapon.baseMATK = 140;
            weapon.lv = 4;
        }
    },
    {   // Adicionar BAs
        id: '16089', dbname: 'Ultio_Spes_OS', name: 'Ultio-OS', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 170;
            weapon.lv = 4;
            multipliers.matk += 3;
            if (refinement.weapon >= 7)
                equipStats.percentASPD += 7
            if (refinement.weapon >= 9)
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 20;
            if (refinement.weapon >= 11)
                multipliers.skill_property[HOLY] += 15;
        }
    },
    {
        id: '590014', dbname: 'Meer_Sceptre', name: 'Mastro da Princesa', slot1: 'card',
        script: function () {
            weapon.baseMATK = 360;
            weapon.lv = 4;
            equipStats.int += 3;
            equipStats.dex += 5;
            multipliers.skill_property[HOLY] += refinement.weapon * 10;
        }
    },
    {
        id: '550021', dbname: 'Deus_Ex_Machina_JP', name: 'O Criador', slot1: 'card', slot2: 'card', slot3: 'card',
        script: function () {
            weapon.baseMATK = 180;
            weapon.lv = 4;
            multipliers.matk += refinement.weapon * 6;
            equipStats.castdelay += refinement.weapon;
            if (refinement.weapon >= 10)
                if (equipStats.percentFCT < 70)
                    equipStats.percentFCT = 70;
        }
    },
    {
        id: '590012', dbname: 'Up_Saint_Hall', name: 'Clava Primordial', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 200;
            weapon.lv = 4;
            multipliers.matk += 3;
            multipliers.skill_property[HOLY] += Math.floor(refinement.weapon / 2);
            if (skill.id === "AB_ADORAMUS")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 5;
            if (refinement.weapon >= 7) {
                equipStats.VCT += 10;
                multipliers.skill_property[HOLY] += 10;
            }
            if (refinement.weapon >= 9)
                multipliers.race[ALL] += 15;
            if (refinement.weapon >= 11)
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 15;
            // Conjunto [Botas Primordiais]
            // INT +10.
            // Dano mágico +7% adicional.
        }
    }, // Adicionar BAs
    {
        id: '590003', dbname: 'Saint_Hall', name: 'Clava Ancestral', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 165;
            weapon.lv = 4;
            multipliers.matk += 3;
            multipliers.skill_property[HOLY] += Math.floor(refinement.weapon / 2);
            if (skill.id === "AB_ADORAMUS")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 5;
            if (refinement.weapon >= 9)
                equipStats.VCT += 10;
            if (refinement.weapon >= 11)
                multipliers.skill_property[HOLY] += 10
        }
    }, // Adicionar BAs
    // {
    //     id: '26104', dbname: 'Blue_Staff', name: 'Cetro de Oxum', slot1: 'card', slot2: 'card', slot4: brasilis,
    //     script: function () {
    //         weapon.baseMATK = 140;
    //         weapon.lv = 4;
    //     }
    // },
    // {
    //     id: '26113', dbname: 'Overfishing_Staff', name: 'Cetro de Xangô', slot1: 'card', slot2: 'card', slot4: brasilis,
    //     script: function () {
    //         weapon.baseMATK = 140;
    //         weapon.lv = 4;
    //     }
    // },
    // {
    //     id: '26102', dbname: 'UnrivaledStaff', name: 'Cetro de Oxóssi', slot1: 'card', slot2: 'card', slot4: brasilis,
    //     script: function () {
    //         weapon.baseMATK = 140;
    //         weapon.lv = 4;
    //     }
    // },
    // {
    //     id: '1688',
    //     dbname: 'Staff_of_Trust',
    //     name: 'Cetro de Iansã',
    //     slot1: 'card',
    //     slot2: 'card',
    //     slot3: 'card',
    //     slot4: brasilis,
    //     script: function () {
    //         weapon.baseMATK = 140;
    //         weapon.lv = 4;
    //     }
    // },
    {
        id: '1675',
        dbname: 'Walking_Stick_',
        name: 'Cajado do Cavalheiro',
        slot1: 'card',
        slot2: 'card',
        slot3: 'card',
        slot4: malangdo,
        script: function () {
            weapon.baseMATK = 125;
            weapon.lv = 4;
            equipStats.dex += 1;
        }
    },
];

const shields = [
    {
        id: '28946', dbname: 'Bloody_Knight_Shield__', name: 'Sanguinário Purificado (50% Bypass Chefe)', slot1: 'card',
        script: function () {
            if (target.type === BOSS)
                equipStats.bypass += 50;

            multipliers.matk += 5;
            equipStats.percentASPD += 10;
            if (refinement.shield >= 7)
                equipStats.flatMATK += 20;
            if (refinement.shield >= 9)
                equipStats.flatASPD += 2;
            if (refinement.shield >= 12)
                equipStats.castdelay += 5;
        }
    },
    {
        id: '460015', dbname: 'Auto_Shield_A', name: 'Escudo Ilusión C', slot1: 'card',
        script: function () {
            equipStats.bypass += refinement.shield * 5;
        }
    },
    {
        id: '460003', dbname: 'Feather_Shield', name: 'Escudo de Penas', slot1: 'card',
        script: function () {
            equipStats.castdelay += 4;
            equipStats.percentASPD += 4;
            if (refinement.shield >= 7) {
                equipStats.castdelay += 4;
                equipStats.percentASPD += 4;
            }
            if (refinement.shield >= 8) {
                equipStats.flatMATK += 50;
            }
            if (refinement.shield >= 9) {
                equipStats.castdelay += 4;
                equipStats.percentASPD += 4;
            }
        }
    },
    {
        id: '28941', dbname: 'Excelion_Shield', name: 'Escudo E.X.C (A-INT/A-ATQM bi)', slot1: 'card',
        script: function () {
            // A-ATQM bi (4987)
            equipStats.flatMATK += 40;
            // A-INT (4983)
            equipStats.flatMATK += Math.floor(stats.int / 10) * 5;
            if (refinement.shield >= 7)
                equipStats.flatMATK += 10;
        }
    },
    {
        id: '460000', dbname: 'Magic_Shield', name: 'Égide das Divindades', slot1: 'card',
        script: function () {
            if (refinement.shield >= 8)
                equipStats.castdelay += 10;
            if (refinement.shield >= 10)
                equipStats.castdelay += 10;
        }
    },
    {
        id: '28902', dbname: 'Mad_Bunny_K_', name: 'Coelho Macabro [1]', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            if (refinement.shield >= 7)
                equipStats.flatMATK += 5;
            if (refinement.shield >= 9)
                equipStats.flatMATK += 15;
        }
    },
    {
        id: '28901', dbname: 'Mad_Bunny_K', name: 'Coelho Macabro [0]', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            equipStats.flatASPD += 3;
            if (refinement.shield >= 7)
                equipStats.flatMATK += 5;
            if (refinement.shield >= 9)
                equipStats.flatMATK += 15;
        }
    },
    // {
    //     id: '28962', dbname: 'Haurvatat', name: 'Escudo Divino',
    //     script: function () {
    //     }
    // },
];

explo_capa = '4856,4854,4858,4950,4949,4827,4826,4812,4872,4869'
const garments = [
    {
        id: '480088', dbname: 'Ultio_Cape_TW', name: 'Capa Ultio-OS', slot1: 'card',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.garment / 2) * 10;
            multipliers.skill_property[NEUTRAL] += Math.floor(refinement.garment / 4) * 3;
            multipliers.skill_property[HOLY] += Math.floor(refinement.garment / 4) * 3;
            if (refinement.garment >= 9)
                multipliers.matk += 10;
            if (refinement.garment >= 11)
                equipStats.castdelay += 12;
            if (refinement.garment >= 13)
                if (target.type === BOSS)
                    equipStats.bypass += 10;
            if (document.getElementById('wea').value === '16089') {
                equipStats.flatMATK += 30;
                if (refinement.weapon >= 12) {
                    if (skill.id === "AB_ADORAMUS")
                        skill.cooldown += -0.5;
                    if (target.race === DEMON || target.race === UNDEAD)
                        equipStats.bypass += 15;
                }
            }
        }
    },
    {
        id: '20966', dbname: 'Temporal_M_Int', name: 'Manto Temporal INT', slot1: 'card',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.garment / 2) * 10;
            multipliers.matk += Math.floor(refinement.garment / 2);
            multipliers.] += Math.floor(refinement.garment / 4) * 3;
            if (refinement.garment >= 7)
                multipliers.matk += 7;
            if (refinement.garment >= 9)
                if (target.race === BRUTE || target.race === DEMON)
                    equipStats.bypass += 20;
            if (refinement.garment >= 11)
                if (target.race === BRUTE || target.race === DEMON)
                    equipStats.bypass += 10;
        }
    },
    {
        id: '480125', dbname: 'Cvt_Magical_Wing', name: 'Jetpack Mágico', slot1: 'card',
        script: function () {
            equipStats.flatMATK += Math.floor(refinement.garment / 2) * 5;
            multipliers.matk += Math.floor(refinement.garment / 2);
            multipliers.size[ALL] += Math.floor(refinement.garment / 3) * 3;
            if (refinement.garment >= 7)
                equipStats.VCT;
            if (refinement.garment >= 11)
                multipliers.] += 10;
        }
    },
    {
        id: '20991', dbname: 'Fairy_Of_Eden', name: 'Fada do Éden', slot1: 'card',
        script: function () {
            multipliers.matk += refinement.garment * 2;
            equipStats.percentASPD += refinement.garment;
            if (refinement.garment >= 9) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (document.getElementById('wea_slot1').value === '27087' ||
                document.getElementById('wea_slot2').value === '27087' ||
                document.getElementById('wea_slot3').value === '27087' ||
                document.getElementById('wea_slot4').value === '27087')
                equipStats.int += 40;
            // Conjunto
            // [Carta Veritas]
            // INT +40.
        }
    },
    {
        id: '480025', dbname: 'Owl_Baron_Mantle', name: 'Manto do Barão', slot1: 'card',
        script: function () {
            equipStats.int += 2;
            equipStats.percentASPD += 10;
            equipStats.flatMATK += refinement.garment * 6;
            // Conjunto [Carta Executor]
            if (document.getElementById('shi_slot1').value === '4250')
                multipliers.size[LARGE] += 25;
            // Conjunto [Carta Tirfing]
            if (document.getElementById('shi_slot1').value === '4254')
                multipliers.size[MEDIUM] += 25;
            // Conjunto [Carta Mysteltainn]
            if (document.getElementById('shi_slot1').value === '4207')
                multipliers.size[SMALL] += 25;
        }
    },
    // {
    //     id: '480025 ', dbname: 'Owl_Baron_Mantle', name: 'Manto do Barão (Ativado)', slot1: 'card',
    //     script: function () {
    //         equipStats.int += 2;
    //         equipStats.percentASPD += 10;
    //         equipStats.flatMATK += refinement.garment * 6;
    //         // Efeito Ativado
    //         if (refinement.garment >= 7)
    //             equipStats.percentASPD += 10;
    //         if (refinement.garment >= 9)
    //             equipStats.percentASPD += 10;
    //         if (refinement.garment >= 10)
    //             equipStats.percentASPD += 10;
    //         // Conjunto [Carta Executor]
    //         if (document.getElementById('shi_slot1').value === '4250')
    //             multipliers.size[LARGE] += 25;
    //         // Conjunto [Carta Tirfing]
    //         if (document.getElementById('shi_slot1').value === '4254')
    //             multipliers.size[MEDIUM] += 25;
    //         // Conjunto [Carta Mysteltainn]
    //         if (document.getElementById('shi_slot1').value === '4207')
    //             multipliers.size[SMALL] += 25;
    //     }
    // },
    // {
    //     id: '20925',
    //     dbname: 'Commander_manteau_J',
    //     name: 'Capa do Comandante',
    //     slot1: 'card',
    //     slot2: explo_capa,
    //     slot3: explo_capa,
    //     slot4: explo_capa,
    //     script: function () {
    //         equipStats.flatMATK += 10;
    //         if (refinement.garment >= 5)
    //             equipStats.flatMATK += 20;
    //         if (refinement.garment >= 7)
    //             equipStats.flatMATK += 30;
    //     }
    // },
    {
        id: '480319', dbname: 'Divine_Phoenix', name: '(jRO) Divine Phoenix', slot1: 'card',
        script: function () {
            if (refinement.garment >= 7) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
                multipliers.property[ALL] += 10;
            }
            if (refinement.garment >= 9)
                multipliers.property[ALL] += 15;
        }
    },
];
lab_sho4 = '4730,4731,4720,4721,4733,4734,4723,4724';
lab_sho3 = '4950,4949,' + lab_sho4;
lab_sho2 = '4856,4858,4854,' + lab_sho3;

const shoes = [
    {
        id: '22225', dbname: 'Shoes_Of_Punishment_', name: 'Sapatos da Penitência [1]', slot1: 'card',
        script: function () {
            if (skill.id === "AB_JUDEX")
                multipliers.skill += 30;
            multipliers.matk += 2;
            multipliers.skill_property[HOLY] += 2;
            if (refinement.shoes >= 5) {
                multipliers.matk += 3;
                multipliers.skill_property[HOLY] += 3;
            }
            if (refinement.shoes >= 7) {
                multipliers.matk += 5;
                multipliers.skill_property[HOLY] += 5;
            }
            // Conjunto [Vara Sagrada]
            if (document.getElementById('wea').value === '1631') {
                // A cada nível aprendido de [Lauda Ramus], [Lauda Agnus] ou [Gênese]:
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 13 * 10;
                // A cada nível aprendido de [Oratio]:
                // Conjuração variável de [Adoramus] e [Judex] -5%.
                if (refinement.weapon >= 7) {
                    multipliers.race[UNDEAD] += 30;
                    multipliers.race[DEMON] += 30;
                    multipliers.property[UNDEAD] += 30;
                    multipliers.property[DARK] += 30;
                }
                if (refinement.weapon >= 7) {
                    if (skill.id === "AB_ADORAMUS")
                        multipliers.skill += 20;
                    multipliers.race[UNDEAD] += 20;
                    multipliers.race[DEMON] += 20;
                    multipliers.property[UNDEAD] += 20;
                    multipliers.property[DARK] += 20;
                }
            }
        }
    },
    {
        id: '470047', dbname: 'Awakening_Nergal_Shoes', name: '[MEGA] Patas de Raposas [Carta Flor do Luar]',
        slot2: lab_sho2,
        slot3: lab_sho3,
        slot4: lab_sho4,
        script: function () {
            multipliers.protocol[BOSS] += 15;
            equipStats.flatMATK += refinement.shoes * 5;
            equipStats.VCT += refinement.shoes * 2;
            multipliers.property[EARTH] += refinement.shoes * 2;
            multipliers.property[GHOST] += refinement.shoes * 2;
            multipliers.property[NEUTRAL] += refinement.shoes * 2;
            multipliers.property[UNDEAD] += refinement.shoes * 2;
            equipStats.int += refinement.shoes * 10;
        }
    },
    {
        id: '470112', dbname: 'Moaning_of_EvilSpirits', name: 'Botas Decadentes', slot1: 'card',
        script: function () {
            multipliers.matk += 15;
            if (refinement.shoes >= 7) {
                multipliers.skill_property[NEUTRAL] += 20;
                multipliers.skill_property[DARK] += 20;
            }
            if (refinement.shoes >= 9)
                multipliers.matk += 25;
            // Conjunto [Carta Bispo Decadente]
            if (document.getElementById('sho_slot1').value === '4441') {
                // Dano mágico +10% adicional.
                multipliers.matk += 10;
                // Dano mágico contra as raças Humano, Humanoide e Anjo +50%.
                multipliers.race[HUMAN] += 50;
                multipliers.race[DEMI_HUMAN] += 50;
                multipliers.race[ANGEL] += 50;
            }
            // Conjunto [Carta Bispo Decadente Selada]
            if (document.getElementById('sho_slot1').value === '4539') {
                // Dano mágico contra as raças Humano, Humanoide e Anjo +20%.
                multipliers.race[HUMAN] += 20;
                multipliers.race[DEMI_HUMAN] += 20;
                multipliers.race[ANGEL] += 20;
            }
            // Conjunto [Epifania]
            if (document.getElementById('arm_slot3').value ==='4876' || document.getElementById('arm_slot3').value ==='4876 ') {
                // INT +40.
                // Pós-conjuração -40%.
                equipStats.int+=40;
                equipStats.castdelay+=40;
            }

        }
    },
    {
        id: '470021', dbname: 'Grace_Magic_Boots', name: 'Grácil Bota Magica', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 20;
            if (refinement.shoes >= 7)
                equipStats.flatFCT += 0.5;
            if (refinement.shoes >= 9)
                multipliers.skill_property[ALL] += 10;
        }
    },
    // {
    //     id: '22182', dbname: 'Shoes_Of_Punishment_BR', name: 'Sapatos da Penitência [0]', slot1: 'card',
    //     script: function () {
    //         equipStats.castdelay += Math.floor((stats.agi + stats.vit) / 50) * 3;
    //     }
    // },
    {
        id: '22214', dbname: 'Authority_Sandals', name: 'Sapato de Salto Dourado', slot1: 'card',
        script: function () {
            equipStats.bypass += 50;
            equipStats.str += 10;
            equipStats.agi += 10;
            equipStats.vit += 10;
            equipStats.int += 10;
            equipStats.dex += 10;
            equipStats.luk += 10;
            if (refinement.shoes >= 7) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (refinement.shoes >= 9) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
        }
    },
    {
        id: '22244', dbname: 'Chic_Silent_Shoes', name: 'Sapato Grã-fino', slot1: 'card',
        script: function () {
            multipliers.property[ALL] += 10;
            if (refinement.shoes >= 7)
                multipliers.property[ALL] += 10;
            if (refinement.shoes >= 9)
                multipliers.property[ALL] += 10;
        }
    },
    {
        id: '470075', dbname: 'Peep_Toe_Sandals', name: 'Sandálias Antigas', slot1: 'card',
        script: function () {
            equipStats.flatMATK += stats.baseLv;
        }
    },
    {
        id: '470106', dbname: 'Shoes_Of_Judex_', name: '(jRO) Purge Shoes (Ativado)', slot1: 'card',
        script: function () {
            equipStats.VCT += 50;
            equipStats.castdelay += 50;
            multipliers.property[ALL] += 25;
            // Efeito
            if (skill.id === 'AB_JUDEX')
                multipliers.skill += stats.baseLv;
            //
            if (refinement.shoes >= 5)
                equipStats.castdelay += 10;
            if (refinement.shoes >= 7)
                equipStats.castdelay += 10;
        }
    },
];

explo_acc = '4814,4815,4869,4872,4897';
const accessory = [
    {
        id: '490118', dbname: 'RingOfAdoramus', name: 'Anel de Adoramus', slot1: 'card',
        script: function () {
            equipStats.int += 7;
            multipliers.size[ALL] += 10;
            if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(stats.baseLv / 3);
            // Ao aprender [Adoramus] nv.10:
            equipStats.percentASPD += 15;
            // Ao aprender [Offertorium] nv.5:
            equipStats.VCT += 30;
            // Ao aprender [Gênese] nv.5:
            multipliers.skill_property[WIND] += 10;
            multipliers.skill_property[HOLY] += 10;
            multipliers.skill_property[NEUTRAL] += 10;
        }
    },
    {
        id: '490036', dbname: 'Pendant_of_Solomon_', name: 'Colar do Mago Salomão', slot1: 'card',
        script: function () {
            equipStats.int += 5;
            equipStats.dex += 5;
            multipliers.matk += 10;
            // Ao usar [Amplificação Mística]:
            // Ativa um [efeito] por 10 segundos.
            multipliers.property[NEUTRAL] += 30;
            multipliers.property[WATER] += 30;
            multipliers.property[FIRE] += 30;
            multipliers.property[EARTH] += 30;
            multipliers.property[WIND] += 30;
            multipliers.property[HOLY] += 30;
            // Conjunto [Pedra de Amplificação 1]
            // Ignora 70% da DEFM de todas as raças.
            // Dano mágico contra todas as raças +10%.
            if (document.getElementById('wea_slot4').value === '29445' || document.getElementById('wea_slot3').value === '29445'){
                equipStats.bypass+=70;
                multipliers.race[ALL]+=10;
            }
            // Conjunto [Pedra de Amplificação 2]
            if (document.getElementById('wea_slot4').value === '29446' || document.getElementById('wea_slot3').value === '29446'){
                equipStats.bypass+=70;
                multipliers.race[ALL]+=10;
            }
            // Conjunto [Pedra de Amplificação 3]
            // Conjunto [Pedra de Amplificação 2]
            if (document.getElementById('arm_slot3').value === '29447'){
                equipStats.bypass+=70;
                multipliers.race[ALL]+=10;
            }
        }
    },
    {
        id: '28572', dbname: 'Celine_Brooch_BR', name: 'Broche da Celine', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            equipStats.VCT += 10;
            equipStats.flatASPD += 1;
            // Conjunto
            // [Laço da Celine]
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                if (equipStats.percentFCT < 50)
                    equipStats.percentFCT = 50;
                multipliers.protocol[BOSS] += 20;
                limit = Math.min(3, Math.floor(refinement.top / 3));
                equipStats.str += limit;
                equipStats.agi += limit;
                equipStats.vit += limit;
                equipStats.int += limit;
                equipStats.dex += limit;
                equipStats.luk += limit;
                if (refinement.top >= 9)
                    multipliers.protocol[BOSS] += 20;
                if (refinement.top >= 11)
                    multipliers.protocol[BOSS] += 20;
            }
        }
    },
    {
        id: '32237', dbname: 'Celine_Brooch_K', name: 'Adereço da Celine', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            equipStats.VCT += 10;
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                equipStats.flatFCT += 0.3;
                equipStats.flatMATK += refinement.top * 10;
                if (refinement.top >= 7) {
                    multipliers.race[HUMAN] += 10;
                    multipliers.race[DEMI_HUMAN] += 10;
                    multipliers.race[DEMON] += 10;
                }
                if (refinement.top >= 9) {
                    multipliers.skill_property[WATER] += 10;
                    multipliers.skill_property[WIND] += 10;
                    multipliers.skill_property[EARTH] += 10;
                    multipliers.skill_property[FIRE] += 10;
                    multipliers.skill_property[NEUTRAL] += 10;
                }
                if (refinement.top >= 11)
                    multipliers.protocol[BOSS] += 20;
            }
        }
    },
    {
        id: '490174', dbname: 'Old_DetachmentsRing_BR', name: 'Memorável Anel Rústico',
        slot1: 'card',
        slot3: explo_acc,
        slot4: explo_acc,
        script: function () {
            equipStats.str += 3;
            equipStats.agi += 3;
            equipStats.vit += 3;
            equipStats.int += 3;
            equipStats.dex += 3;
            equipStats.luk += 3;
            // Conjunto [Memorável Desejo dos Deuses]
            if (document.getElementById('top').value === '18972') {
                equipStats.castdelay += 20;
                equipStats.bypass += 70;
            }
        }
    },
    {
        id: '28564', dbname: 'Valkyrie_Drop', name: 'Lágrima de Valquíria', slot1: 'card',
        script: function () {
            equipStats.castdelay += 5;
            equipStats.VCT += 10;
            // A cada nível de [Impositio Manus]:
            // Dano mágico contra todos os tamanhos +3%.
            multipliers.size[ALL] += 15;
        }
    },
    {
        id: '28565', dbname: 'Perverse_Demon_Mask', name: 'Máscara de Oni', position: '2', slot1: 'card',
        script: function () {
            equipStats.int += Math.floor(stats.str / 18) * 3;
            equipStats.bypass += Math.floor(stats.str / 18) * 15;
            equipStats.luk += Math.floor(stats.agi / 18) * 3;
            equipStats.dex += Math.floor(stats.vit / 18) * 3;
            equipStats.VCT += Math.floor(stats.vit / 18);
            equipStats.castdelay += Math.floor(stats.int / 18);
            equipStats.agi += Math.floor(stats.luk / 18) * 3;
        }
    },
    // {id: '490022', dbname: 'TrustRing', name: 'Anel de Iansã', slot1: 'card'},
    // {
    //     id: '490290', dbname: 'Ameretat', name: 'Anel de Ameretat', position: '2', slot1: 'card',
    //     script: function () {
    //         multipliers.matk += 10;
    //         // Conjunto
    //         // [Super Agilidade]
    //         // Velocidade de ataque +15%.
    //
    //         // Conjunto
    //         // [Super Inteligência]
    //         // Dano mágico +30%.
    //
    //         // Conjunto
    //         // [Super Sorte]
    //         // Pós-conjuração -30%.
    //     }
    // },
    {
        id: '28538', dbname: 'Glove_Of_Wizard_BR', name: 'Luvas de H. Motto', slot1: 'card',
        script: function () {
            equipStats.VCT += 5;
            equipStats.bypass += 20;
            multipliers.skill_property[FIRE] += 5;
            multipliers.skill_property[WATER] += 5;
            multipliers.skill_property[EARTH] += 5;
            multipliers.skill_property[WIND] += 5;
            multipliers.skill_property[NEUTRAL] += 5;
        }
    },
    {
        id: '490068', dbname: 'RingofVenus', name: 'Anel de Vênus', slot1: 'card',
        script: function () {
            // Lado Direito
            if (currentEquip === 'ac1') {
                if (stats.dex >= 125)
                    if (equipStats.percentFCT < 70)
                        equipStats.percentFCT = 70;
            }
            // Lado Esquerdo
            if (currentEquip === 'ac2') {
                multipliers.matk += Math.floor(stats.agi / 10);
                if (stats.agi >= 125)
                    equipStats.castdelay += 25;
            }
        }
    },
];

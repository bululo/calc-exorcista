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
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + (refinement.top - 10) ) / 10;
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
            if (skill.id === "PR_MAGNUS")
                multipliers.skill += Math.floor(refinement.top / 2) * 10;
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
            if(learned_skills.genese >= 5){
                multipliers.protocol[BOSS] += 25;
            }
            
            
            // A cada nível de [Lauda Ramus]:
            if(learned_skills.lauda_ramus > 0){
                // Dano mágico contra oponentes de propriedade Neutro, Terra, Maldito e Fantasma +5%.
                multipliers.property[NEUTRAL] += 5 * learned_skills.lauda_ramus;
                multipliers.property[EARTH] += 5 * learned_skills.lauda_ramus;
                multipliers.property[UNDEAD] += 5 * learned_skills.lauda_ramus;
                multipliers.property[GHOST] += 5 * learned_skills.lauda_ramus;
            }
           
            // A cada nível de [Lauda Agnus]:
            if(learned_skills.lauda_agnus > 0){
                 // Dano mágico contra oponentes de propriedade Neutro, Terra, Maldito e Fantasma +5%.
                multipliers.property[NEUTRAL] += 5 * learned_skills.lauda_agnus;
                multipliers.property[EARTH] += 5 * learned_skills.lauda_agnus;
                multipliers.property[UNDEAD] += 5 * learned_skills.lauda_agnus;
                multipliers.property[GHOST] += 5 * learned_skills.lauda_agnus;
            }
           
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
    {
        id: '400687',
        dbname: '',
        name: 'Garra Diabólica',
        slot1: 'card',
        script: function () {
            multipliers.matk += refinement.top * 5;
            equipStats.flatMATK += Math.floor(refinement.top / 2) * 15;
            if (refinement.top >= 7) {
                equipStats.castdelay += 8;
                equipStats.VCT += 8;
            }
            if (refinement.top >= 9) {
                //bugado
                //multipliers.skill_property+=10;
            }
            if (refinement.top >= 11)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 2 ) / 10;
            //Conjuntos
            if (document.getElementById('arm').value === '15146' || document.getElementById('arm').value === '15163') {
                multipliers.race[ALL] += Math.floor(refinement.armor / 3) * 8;
            }
        }
    },
    {
        id: '400118', dbname: 'BioWeapon_Helm_AB', name: 'Espólio de Margaretha', slot1: 'card',
        script: function (){
            // A cada 2 refinos: ATQ e ATQM +20.
            equipStats.flatMATK += Math.floor(refinement.top/2) * 20;
            // Refino +7 ou mais:
            if (refinement.top >= 7){
                // Conjuração variável -10%.
                equipStats.VCT += 10;
                // Velocidade de ataque +10%.
                equipStats.percentASPD += 10;
            }
            // Refino +9 ou mais:
            if (refinement.top >= 9) {
                // ATQ da arma +15%.
                // Dano mágico +15%.
                multipliers.matk += 15;
            }
            // Refino +11 ou mais:
            if (refinement.top >= 11){
                // Dano físico contra todos os tamanhos +10%.
                // Dano mágico de todas as propriedades +10%.
                multipliers.skill_property[ALL] += 10;
            }
            // Conjunto [Adorare]
            if (document.getElementById('wea').value === '2057') {
                // Dano mágico de propriedade Sagrado +10%.
                multipliers.skill_property[HOLY] += 10;
                // A cada refino da arma: Dano de [Adoramus] +5%.
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += refinement.weapon * 5;
            }
            // Conjunto [Penitência]
            if (document.getElementById('wea').value === '26161') {
                // Dano mágico de propriedade Sagrado +10%.
                multipliers.skill_property[HOLY] += 10;
                // A cada refino da arma: Dano de [Judex] +10%.
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += refinement.weapon * 10;
            }
            // Conjunto [Mangual Lucis]
            // Dano físico contra todos os tamanhos +10% adicional.
            // A cada refino da arma:
            // Dano de [Gemini Lumen] +10%.
            // --------------------------
            // Tipo: Equip. para Cabeça
            // Equipa em: Topo
            // DEF: 10 DEFM.: 0
            // Peso: 10
            // Nível necessário: 170
            // Classes: Arcebispos e evoluções
        }
    },
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
            if(learned_skills.praefatio >= 10){
                equipStats.castdelay += 15;
            }
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
            equipStats.flatFCT = ( (equipStats.flatFCT*10) + 1 ) / 10;
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
        name: 'Lapela Sagrada',
        script: function () {
            equipStats.castdelay += 15;

            if(learned_skills.genese >= 5){
                multipliers.size[ALL] += 15;
            }
        }
    },
    {
        id: '420236',
        dbname: 'Moroc_Slave_TW',
        name: 'Servos de Morroc',
        script: function () {
            // Increases damage against demihuman race enemies and angel race monster by 5%.
            // Inclui a raça humano jogador conforme descrição do twRO embora essa não tenha como ser selecionada como alvo KEKW
            // 對人類型、玩家人類型、天使型的傷害+5%。 -> +5% de dano a tipos humanos, jogadores-humanos e anjos.
            multipliers.race[HUMAN]+=5;
            multipliers.race[DEMI_HUMAN]+=5;
            multipliers.race[ANGEL]+=5;
            // When equipped with Darklord Essence Intelligence 3,
            // Increases all property magical damage by 20%.
            // Increases damage taken from all race enemies by 15%.

            // Set Bonus Demon God's Apostle Shnaim Card
            // Increases physical and magical damage against all race enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27323' || document.getElementById('ac2_slot1').value === '27323') {
                multipliers.race[ALL] += 15;
            }
            // Set Bonus Demon God's Apostle Ahat Card
            // Increases physical and magical damage against all size enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27322' || document.getElementById('ac2_slot1').value === '27322') {
                multipliers.size[ALL] += 15;
            }
        }
    },
    {
        id: '420236 ',
        dbname: 'Moroc_Slave_TW',
        name: 'Servos de Morroc (Conjunto INT3 Ativado)',
        script: function () {
            // Increases damage against demihuman race enemies and angel race monster by 5%.
            // Inclui a raça humano jogador conforme descrição do twRO embora essa não tenha como ser selecionada como alvo KEKW
            // 對人類型、玩家人類型、天使型的傷害+5%。 -> +5% de dano a tipos humanos, jogadores-humanos e anjos.
            multipliers.race[HUMAN]+=5;
            multipliers.race[DEMI_HUMAN]+=5;
            multipliers.race[ANGEL]+=5;
            // When equipped with Darklord Essence Intelligence 3,
            // Increases all property magical damage by 20%.
            // Increases damage taken from all race enemies by 15%.
            multipliers.skill_property[ALL] += 20;
            // Set Bonus Demon God's Apostle Shnaim Card
            // Increases physical and magical damage against all race enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27323' || document.getElementById('ac2_slot1').value === '27323') {
                multipliers.race[ALL] += 15;
            }
            // Set Bonus Demon God's Apostle Ahat Card
            // Increases physical and magical damage against all size enemies by 15%.
            if (document.getElementById('ac1_slot1').value === '27322' || document.getElementById('ac2_slot1').value === '27322') {
                multipliers.size[ALL] += 15;
            }
        }
    },
    {
        id: '19439', dbname: 'Subject_Aura', name: 'Aura Fantasma', script: function () {},
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
                    multipliers.property[ALL] += 20;
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
    // {
    //     id: '450291', dbname: 'Amazing_Grace', name: '(jRO) Amazing Grace', slot1: 'card',
    //     script: function () {
    //         equipStats.percentASPD += 10;
    //         if (refinement.armor >= 5) {
    //             if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
    //                 multipliers.skill += 50;
    //         }
    //         if (refinement.armor >= 7) {
    //             if (skill.id === "AB_ADORAMUS" || skill.id === "AB_JUDEX")
    //                 multipliers.skill += 50;
    //         }
    //         if (refinement.armor >= 10) {
    //             multipliers.skill_property[HOLY] += 15;
    //         }
    //         // A cada nível de [Oratio]:
    //         // INT +3. ATQM +15.
    //         equipStats.int += 30;
    //         equipStats.flatMATK += 150;
    //         // A cada nível de [Gênese]:
    //         // Dano mágico contra todas as raças +14%.
    //         multipliers.race[ALL] += 70;
    //     }
    // },
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
            if(learned_skills.oratio > 0){
                equipStats.int += learned_skills.oratio  * 3;
                equipStats.flatMATK += learned_skills.oratio  * 15;
            }

            // A cada nível de [Gênese]:
            // Dano mágico contra todas as raças +4%.
            if(learned_skills.genese > 0) {
                multipliers.race[ALL] += learned_skills.genese * 4;
            }
           
            
        }
    },
    {
        id: '15146', dbname: 'Robe_Of_Flattery', name: 'Vestimenta Arrogante', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 50;
            if (stats.baseLv >= 120)
                equipStats.flatMATK += 50;
            if (stats.baseLv >= 140)
                equipStats.flatMATK += 50;

        }
    },
    {
        id: '15163', dbname: 'Agenda_Robe', name: 'Vestimenta Atraente', slot1: 'card',
        script: function () {
            multipliers.matk += 5;
            if (stats.baseLv >= 120)
                multipliers.matk += 4;
            if (stats.baseLv >= 140)
                multipliers.matk += 5;

        }
    },
    {
        id: '450338', dbname: 'Screaming_Ghoost_Party', name: 'Algazarra', slot1: 'card',
        script: function () {
            equipStats.flatMATK += 30 * refinement.armor;
            if (refinement.armor >= 7) {
                equipStats.percentASPD += 10;
                multipliers.race[ALL] += 15;
            }
            if (refinement.armor >= 9) {
                multipliers.race[ALL] += 25;
            }            
        }
    },
    {
        id: '15377', dbname: 'Illusion_Armor_B', name: 'Colete Ilusión B', slot1: 'card', slot2: '29540', slot3: '29535', slot4: '29535',
        script: function () {
            // ATQM +100
            equipStats.flatMATK += 100;
            // A cada 2 refinos: ATQM +10.
            equipStats.flatMATK += Math.floor(refinement.armor/2) * 10;
            // Refino +7 ou mais: Conjuração variável -10%.
            if (refinement.armor >= 7)
                equipStats.VCT += 10;
            // Conjunto [Motor Ilusión A]
            // Velocidade de ataque +10%.
            if (document.getElementById('gar').value === '20933')
                equipStats.percentASPD += 10;
            // Conjunto [Motor Ilusión B]
            // ATQM +50 adicional.
            if (document.getElementById('gar').value === '20934')
                equipStats.flatMATK += 50;
        }
    },
    {
        id: '15387', dbname: 'Jirant_Dress', name: 'Vestido da Bruxa', slot1: 'card',
        script: function () {
            // Ignora 50% da DEFM dos monstros Chefes.
            if (target.type === BOSS)
                equipStats.bypass += 50;
            // A cada refino:
            // ATQM +15.
            // Dano mágico de propriedade Vento +2%.
            equipStats.flatMATK += 15 * refinement.armor;
            multipliers.skill_property[WIND] += 2 * refinement.armor;
            // Conjunto [Manto da Bruxa]
            if (document.getElementById('gar').value === '20908'){
                // A cada refino da capa:
                // Dano mágico +2%.
                // Conjuração variável -2%.
                multipliers.matk += 2 * refinement.garment;
                equipStats.VCT += 2 * refinement.garment;
            }
            // Conjunto
            // [Cajado da Bruxa]
            // Habilita [Aumentar Agilidade] nv.1.
            // A cada refino da arma a partir do +1:
            // Dano de [Passos de Salamandra] e [Passos de Sílfide] +30%.
            // Regenera +50 de HP ao derrotar monstros com ataques mágicos.
            // Refino da arma +7 ou mais:
            // Nível de [Aumentar Agilidade] igual ao nível de refino da arma até o +10.
            // --------------------------
            // Conjunto
            // [Carta Professora Celia]
            // Tolerância a Congelamento +100%.
            // Conjuração variável de [Onda Psíquica] -100%.
            // Desativa a autoconjuração de [Proteger Terreno].
        }
    },
];

malangdo = '29446,29445,4827,4826,4812,4813,4761';
brasilis = '29446,4831';
const weapons = [
    {
        id: '540011', dbname: 'Up_Demon_Hunting_Bible', name: 'Tomo Primordial', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = BOOK;
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
        id: '540011 ', dbname: 'Up_Demon_Hunting_Bible', name: 'Tomo Primordial (12% Sagrado)', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = BOOK;
            // Random Options
            multipliers.skill_property[HOLY] +=12;
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
        id: '540011  ', dbname: 'Up_Demon_Hunting_Bible', name: 'Tomo Primordial (12% Sagrado/12% Chefe)', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = BOOK;
            // Random Options
            multipliers.protocol[BOSS] += 12;
            multipliers.skill_property[HOLY] +=12;
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
            weapon.class = ONE_HANDED_STAFF;
        }
    },
    {
        id: '16089', dbname: 'Ultio_Spes_OS', name: 'Ultio-OS', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 170;
            weapon.lv = 4;
            weapon.class = MACE;
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
            weapon.class = MACE;
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
            weapon.class = ONE_HANDED_STAFF;
            multipliers.matk += refinement.weapon * 6;
            equipStats.castdelay += refinement.weapon;
            if (refinement.weapon >= 10)
                if (equipStats.percentFCT < 70)
                    equipStats.percentFCT = 70;
        }
    },
    {
        id: '550031', dbname: 'Dea_Staff_IL Dea_Staff_IL', name: 'Dea Ilusional', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = ONE_HANDED_STAFF;
            //
            equipStats.int += 6;
            equipStats.vit += 2;
            // A cada 3 refinos:
            // Dano de [Judex] +20%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 20;
            if (refinement.weapon >= 7) {
                multipliers.skill_property[HOLY] += 15;
            }
            if (refinement.weapon >= 9) {
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
                equipStats.castdelay += 10;
            }
        }
    },
    {
        id: '550031 ', dbname: 'Dea_Staff_IL Dea_Staff_IL', name: 'Dea Ilusional (Ativado)', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 190;
            weapon.lv = 4;
            weapon.class = ONE_HANDED_STAFF;
            //
            equipStats.int += 6;
            equipStats.vit += 2;
            // A cada 3 refinos:
            // Dano de [Judex] +20%
            if (skill.id === "AB_JUDEX")
                multipliers.skill += Math.floor(refinement.weapon / 3) * 20;
            if (refinement.weapon >= 7) {
                multipliers.skill_property[HOLY] += 15;
            }
            if (refinement.weapon >= 9) {
                if (skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
                equipStats.castdelay += 10;
            }
            if (refinement.weapon >= 11) {
                multipliers.size[ALL] += 20;
            }
        }
    },
    {
        id: '590012', dbname: 'Up_Saint_Hall', name: 'Clava Primordial', slot1: 'card', slot2: 'card',
        script: function () {
            weapon.baseMATK = 200;
            weapon.lv = 4;
            weapon.class = MACE;
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
            weapon.class = MACE;
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
            weapon.class = ONE_HANDED_STAFF;
            equipStats.dex += 1;
        }
    },
    {
        id: '2057', dbname: 'Adorare_Staff', name: 'Adorare', slot1: 'card', slot2: 'card', slot3: '29599', slot4: '4813,4814,4815',
        twoHanded: true,
        script: function () {
            weapon.baseMATK = 240;
            weapon.lv = 4;
            weapon.class = TWO_HANDED_STAFF;

            multipliers.skill_property[HOLY] += 5;
            equipStats.flatMATK += refinement.weapon * 4;
            if (refinement.weapon >= 9)
                if (skill.id === "AB_ADORAMUS")
                    multipliers.skill += 30;
        }

    },
    {
        id: '26161', dbname: 'Ponitendtia',name: 'Penitência', slot1: 'card', slot2: 'card', slot3: '29599', slot4: '4813,4814,4815',
        script: function () {
            weapon.baseMATK = 175;
            weapon.lv = 4;
            weapon.class = ONE_HANDED_STAFF;

            multipliers.skill_property[HOLY] += 5;
            equipStats.flatMATK += refinement.weapon * 4;
            if (refinement.weapon >= 9)
                if (skill.id === "PR_MAGNUS" || skill.id === "AB_JUDEX")
                    multipliers.skill += 30;
            if (refinement.weapon >= 11 && skill.id === 'PR_MAGNUS')
                multipliers.skill += 20;
        }
    },
];

const shields = [
    {
        id: '460091', dbname: '', name: 'Escudo Clerical', slot1: 'card',
        script: function () {
            // Ao realizar ataques físicos:
            // 5% de chance de autoconjurar [Luz da Criação] nv.3.
            // A cada refino:
            // Chance de autoconjuração +1%.
            // --------------------------
            // Dano mágico +5%.
            multipliers.matk += 5;
            // Refino +7 ou mais: Dano mágico +5% adicional.
            if (refinement.shield >= 7)
                multipliers.matk += 5;
            // Refino +9 ou mais: Dano mágico +5% adicional.
            if (refinement.shield >= 9)
                multipliers.matk += 5;
            // Conjunto [Manto Clerical]
            // Ao realizar ataques físicos:
            // 2,5% de chance de autoconjurar [Escudo Mágico] nv.7.
            // A cada refino do escudo:
            // DEF +20. DEFM +2.
            // Escudo com refino +8 ou mais:
            // O usuário não pode ser empurrado.
            // Resistência as propriedades Sombrio e Sagrado +50%.
        }
    },
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
    {
        id: '28962', dbname: 'Haurvatat', name: 'Escudo Divino',
        script: function () {
            // Resistência a propriedade Neutro +10%
            // Resistência a oponentes de todos os Tamanhos +30%
            // Conjunto [Super AGI]
            if (document.getElementById('sho_slot2').value === '4854' ||
                document.getElementById('arm_slot2').value === '4854' ||
                document.getElementById('gar_slot2').value === '4854' ||
                document.getElementById('gar_slot3').value === '4854' ||
                document.getElementById('gar_slot4').value === '4854') {
                // Velocidade de ataque +15%
                equipStats.percentASPD += 15;
            }
            // Conjunto [Super INT]
            if (document.getElementById('sho_slot2').value === '4856' ||
                document.getElementById('arm_slot2').value === '4856' ||
                document.getElementById('gar_slot2').value === '4856' ||
                document.getElementById('gar_slot3').value === '4856' ||
                document.getElementById('gar_slot4').value === '4856') {
                // Dano mágico +15%
                multipliers.matk += 15;
            }
            // Conjunto [Super SOR]
            if (document.getElementById('sho_slot2').value === '4858' ||
                document.getElementById('arm_slot2').value === '4858' ||
                document.getElementById('gar_slot2').value === '4858' ||
                document.getElementById('gar_slot3').value === '4858' ||
                document.getElementById('gar_slot4').value === '4858') {
                // Pós-conjuração -15%
                equipStats.castdelay += 15;
            }
        }
    },
    {
        id: '28956', dbname: 'Jirant_Mirror', name: 'Espelho da Bruxa', slot1: 'card',
        script: function () {
            // Resistência as propriedades Fogo, Vento, Fantasma e Sagrado +20%.
            // --------------------------
            // A cada nível de [Fé]:
            // Resistência a propriedade Sagrado -2%
            // Conjunto [Vestido da Bruxa]
            if (document.getElementById('arm').value === '15387'){
                // Dano mágico +5%.
                multipliers.matk += 5;
                // Ignora 25% da DEFM dos monstros Chefes.
                if (target.type === BOSS)
                    equipStats.bypass += 25;
                // Armadura com refino +8 ou mais:
                if (refinement.armor >= 8){
                    // Dano mágico +5% adicional.
                    multipliers.matk += 5;
                    // Ignora +25% adicional da DEFM dos monstros Chefes.
                    if (target.type === BOSS)
                        equipStats.bypass += 25;
                }
            }
            // Conjunto [Manto da Bruxa]
            if (document.getElementById('gar').value === '20908'){
                // Dano mágico +5%.
                multipliers.matk += 5;
                // Conjuração variável -5%.
                equipStats.VCT += 5;
                // Escudo com refino +8 ou mais:
                if (refinement.shield >= 8){
                    // Esquiva perfeita +20.
                    // Dano mágico +5% adicional.
                    multipliers.matk += 5;
                    // Conjuração variável -5% adicional.
                    equipStats.VCT += 5;
                }
            }

        }
    },
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
        id: '480088 ', dbname: 'Ultio_Cape_TW', name: 'Capa Ultio-OS (10% Chefe)', slot1: 'card',
        script: function () {
            // BA
            multipliers.protocol[BOSS]+=10;
            //
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
            multipliers.skill_property[ALL] += Math.floor(refinement.garment / 4) * 3;
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
                equipStats.VCT += 7;
            if (refinement.garment >= 11)
                multipliers.skill_property[ALL] += 10;
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
    {
        id: '20925',
        dbname: 'Commander_manteau_J',
        name: 'Capa do Comandante',
        slot1: 'card',
        slot2: explo_capa,
        slot3: explo_capa,
        slot4: explo_capa,
        script: function () {
            equipStats.flatMATK += 10;
            if (refinement.garment >= 5)
                equipStats.flatMATK += 20;
            if (refinement.garment >= 7)
                equipStats.flatMATK += 30;
        }
    },
    {
        id: '480319', dbname: 'Divine_Phoenix', name: 'Relíquia Divina', slot1: 'card',
        script: function () {
            if (refinement.garment >= 10) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
                multipliers.property[ALL] += 10;
            }
            if (refinement.garment >= 12)
                multipliers.property[ALL] += 15;
        }
    },
    {
        id: '480251', dbname: 'Mystical_Wing', name: 'Asas Majestosas', slot1: 'card',
        script: function () {
            let sum = stats.str + stats.agi + stats.vit + stats.int + stats.dex + stats.luk;
            multipliers.matk += Math.floor(sum/100) * 5;
            if (sum >= 400){
                equipStats.percentASPD += 15;
                equipStats.castdelay += 15;
            }
        }
    },
    {
        id: '20908', dbname: 'Jirant_Cloak_BR', name: 'Manto da Bruxa', slot1: 'card',
        script: function () {
            // A cada 2 refinos:
            // Resistência as propriedades Fogo e Vento +5%.
            // Refino +5 ou mais:
            if (refinement.garment >= 5) {
                // Dano mágico +5%.
                multipliers.matk += 5;
                // Conjuração variável -5%.
                equipStats.VCT += 5;
            }
            if (refinement >= 7){
                // Dano mágico +5%.
                multipliers.matk += 5;
                // Conjuração variável -5%.
                equipStats.VCT += 5;
            }
            // Refino +7 ou mais:
            // Dano mágico +5% adicional.
            // Conjuração variável -5% adicional.
            // Refino +15 ou mais:
            // Mantém [Vigor] ativo.
            // Conjunto [Cajado da Bruxa]
            // Dano mágico +5%.
            // Resistência as propriedades Fogo e Vento +10%.
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
                multipliers.skill_property[ALL]+=10;
        }
    },
    {
        id: '470106 ', dbname: 'Shoes_Of_Judex_', name: 'Sapatos da Persistência', slot1: 'card',
        script: function () {
            equipStats.VCT += 20;
            equipStats.castdelay += 10;
            multipliers.property[ALL] += 25;
            //
            if (refinement.shoes >= 5)
                equipStats.castdelay += 10;
            if (refinement.shoes >= 7)
                equipStats.castdelay += 10;
        }
    },
    // {
    //     id: '22182', dbname: 'Shoes_Of_Punishment_BR', name: 'Sapatos da Penitência [0]', slot1: 'card',
    //     script: function () {
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
    // {
    //     id: '470106', dbname: 'Shoes_Of_Judex_', name: '(jRO) Purge Shoes (Ativado)', slot1: 'card',
    //     script: function () {
    //         equipStats.VCT += 50;
    //         equipStats.castdelay += 50;
    //         multipliers.property[ALL] += 25;
    //         // Efeito
    //         if (skill.id === 'AB_JUDEX')
    //             multipliers.skill += stats.baseLv;
    //         //
    //         if (refinement.shoes >= 5)
    //             equipStats.castdelay += 10;
    //         if (refinement.shoes >= 7)
    //             equipStats.castdelay += 10;
    //     }
    // },
    {
        id: '470180', dbname: 'Starry_Sky_Twin_Prime', name: 'Botas Três Marias', slot1: 'card',
        script: function () {
            equipStats.castdelay += refinement.shoes * 2;
            if (refinement.shoes >= 10) {
                equipStats.str += 15;
                equipStats.agi += 15;
                equipStats.vit += 15;
                equipStats.int += 15;
                equipStats.dex += 15;
                equipStats.luk += 15;
                multipliers.matk += 15;
            }
            if (refinement.shoes >= 12) {
                equipStats.str += 15;
                equipStats.agi += 15;
                equipStats.vit += 15;
                equipStats.int += 15;
                equipStats.dex += 15;
                equipStats.luk += 15;
                multipliers.matk += 25;
            }
        }
    },
    {
        id: '470014', dbname: 'Virgo_Shoes_J', name: 'Sapatos de Virgem',
        script: function () {
            equipStats.flatMATK += 50;
            equipStats.percentASPD += 10;
            // Arcebispos e evoluções:
            equipStats.flatMATK += 80;
            if (skill.id === "AB_JUDEX")
                multipliers.skill += 100;
            multipliers.skill_property[HOLY] += 20;
        }
    },
    {
        id: '470298', dbname: '', name: 'Sapatilha Fantasma', slot1: 'card',
        script: function () {
            // Dano mágico +5%.
            multipliers.matk += 5;
            // HP e SP máx. +7%.
            // Refino +8 ou mais:
            // Conjuração variável -10%.
            if (refinement.shoes >= 8)
                equipStats.VCT+= 10;
            // Refino +10 ou mais:
            // Conjuração fixa -0,5 segundos.
            if (refinement.shoes >= 10)
                equipStats.flatFCT+= 0.5;
            // Refino +12 ou mais:
            // Dano mágico de todas as propriedades +15%.
            if (refinement.shoes >= 12)
                multipliers.skill_property[ALL]+= 15;
            // Conjunto [Aura Fantasma]
            if (document.getElementById('low').value === '19439'){
                // INT base 130 ou mais:
                if (stats.int >= 130){
                    // Conjuração fixa -0,5 segundos adicional
                    equipStats.flatFCT+= 0.5;
                }
            }
        }
    },
    {
        id: '470298 ', dbname: '', name: 'Sapatilha Fantasma (Efeito Ativado)', slot1: 'card',
        script: function () {
            // Dano mágico +5%.
            multipliers.matk += 5;
            // HP e SP máx. +7%.
            // Refino +8 ou mais:
            // Conjuração variável -10%.
            if (refinement.shoes >= 8)
                equipStats.VCT+= 10;
            // Refino +10 ou mais:
            // Conjuração fixa -0,5 segundos.
            if (refinement.shoes >= 10)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
            // Refino +12 ou mais:
            // Dano mágico de todas as propriedades +15%.
            if (refinement.shoes >= 12)
                multipliers.skill_property[ALL]+= 15;
            // Conjunto [Aura Fantasma]
            if (document.getElementById('low').value === '19439'){
                // INT base 130 ou mais:
                if (stats.int >= 130){
                    // Conjuração fixa -0,5 segundos adicional
                    equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
                    // Ao realizar ataques mágicos, 1,5% de chance de ativar um Efeito por 5 segundos.
                    // Efeito: INT +70.
                    equipStats.int += 70;
                }
            }
        }
    },
    // Especulação Sapato Edda (Efeito base bRO, efeito de conjunto jRO)
    // {
    //     id: '470091',
    //     dbname: 'Disappointment_P_Shoes',
    //     name: 'Sapato da Especulação',
    //     script: function (){
    //         // Dano mágico +5%.
    //         multipliers.matk += 5;
    //         // HP e SP máx. +7%.
    //         // Refino +8 ou mais:
    //         // Conjuração variável -10%.
    //         if (refinement.shoes >= 8)
    //             equipStats.VCT+= 10;
    //         // Refino +10 ou mais:
    //         // Conjuração fixa -0,5 segundos.
    //         if (refinement.shoes >= 10)
    //             equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
    //         // Refino +12 ou mais:
    //         // Dano mágico de todas as propriedades +15%.
    //         if (refinement.shoes >= 12)
    //             multipliers.skill_property[ALL]+= 15;
    //         //Conjunto
    //         // [Penitência]
    //         // A cada nível de base:
    //         // Dano de [Magnus Exorcismus] +1%.
    //         // Dano de [Luz Divina] +20%.
    //         if (document.getElementById('wea').value === '26161'){
    //             if (skill.id === "AL_HOLYLIGHT"){
    //                 multipliers.skill += stats.baseLv * 20;
    //             }
    //         }
    //     }
    // },
    {
        id: '470318', dbname: '', name: 'Galocha Fantasma', slot1: 'card',
        script: function () {
            // Dano mágico +5%.
            multipliers.matk += 5;
            // Refino +8 ou mais:
            // Dano mágico contra todas as raças +15%.
            if (refinement.shoes >= 8)
                multipliers.race[ALL] += 15;
            // Refino +10 ou mais:
            // Conjuração fixa -0,5 segundos.
            if (refinement.shoes >= 10)
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
            // Refino +12 ou mais:
            // INT e DES +10.
            // Dano mágico contra oponentes de todas as propriedades +15%.
            if (refinement.shoes >= 12){
                equipStats.int += 10;
                equipStats.dex += 10;
                multipliers.property[ALL] += 15;
            }
            // Conjunto [Aura Fantasma]
            if (document.getElementById('low').value === '19439'){
                // INT base 130 ou mais:
                if (stats.int >= 130){
                    // Conjuração fixa -0,5 segundos adicional
                    equipStats.flatFCT = ( (equipStats.flatFCT*10) + 5 ) / 10;
                    // Ao realizar ataques mágicos, 1,5% de chance de ativar um Efeito por 5 segundos.
                    // Efeito: INT +70.
                    //equipStats.int += 70;
                }
            }
            // Conjunto
            // [Adorare]
            if (document.getElementById('wea').value === '2057') {
                // Dano mágico contra monstros Chefes +20%.
                multipliers.protocol[BOSS] += 20;
                // A cada refino do Calçado:
                // Dano mágico contra todas as raças +2%.
                multipliers.race[ALL] += refinement.shoes * 2;
                // Soma dos refinos 18 ou mais:
                // Recarga de [Adoramus] -0,3 segundos.
                if ((refinement.shoes + refinement.weapon) >= 18 && skill.id === "AB_ADORAMUS")
                    skill.cooldown += 0.3;
                    //skill.cooldown += -0.3;
                // Soma dos refinos 22 ou mais:
                // Anula o consumo de Gemas ao usar habilidades.
            }
            // Conjunto
            // [Penitência]
            if (document.getElementById('wea').value === '26161'){
                // Velocidade de ataque +10%.
                equipStats.percentASPD += 10;
                // A cada refino do Calçado:
                // Dano mágico contra todas as raças +2%.
                multipliers.race[ALL] += refinement.shoes * 2;
                // Soma dos refinos 18 ou mais:
                // Recarga de [Magnus Exorcismus] -4 segundos.
                if ((refinement.shoes + refinement.weapon) >= 18 && skill.id === "PR_MAGNUS")
                    skill.cooldown -= 4;
                // Soma dos refinos 22 ou mais:
                // Ao usar [Judex] 8% de chance de autoconjurar [Vituperatum] nv.4.
            }

        }
    }
];

explo_acc = '4814,4815,4869,4872,4897';
tumulo = '4721,4722,4723,4711,4713,4715,4813,4812,4826,4760,4883';
const accessory = [
    {
        id: '490118', dbname: 'RingOfAdoramus', name: 'Anel de Adoramus', slot1: 'card', slot4: tumulo,
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
            if(learned_skills.genese >= 5){
                multipliers.skill_property[WIND] += 10;
                multipliers.skill_property[HOLY] += 10;
                multipliers.skill_property[NEUTRAL] += 10;
            }   
        }
    },
    {
        id: '490036', dbname: 'Pendant_of_Solomon_', name: 'Colar do Mago Salomão', slot1: 'card', slot4: tumulo,
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
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
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
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                if (equipStats.percentFCT < 50)
                    equipStats.percentFCT = 50;
                multipliers.protocol[BOSS] += 20;
                let limit = Math.min(4, Math.floor(refinement.top / 3));
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
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Laço da Celine]
            if (document.getElementById('top').value === '18849') {
                equipStats.flatFCT = ( (equipStats.flatFCT*10) + 3 ) / 10;
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
            // Impede que um segundo acc ative efeitos de conjunto
            if (document.getElementById('ac1').value === document.getElementById('ac2').value && currentEquip === 'ac2')
                return
            // Conjunto [Memorável Desejo dos Deuses]
            if (document.getElementById('top').value === '18972') {
                equipStats.castdelay += 20;
                equipStats.bypass += 70;
            }
        }
    },
    {
        id: '28564', dbname: 'Valkyrie_Drop', name: 'Lágrima de Valquíria', slot1: 'card', slot4: tumulo,
        script: function () {
            equipStats.castdelay += 5;
            equipStats.VCT += 10;
            // A cada nível de [Impositio Manus]:
            if(learned_skills.impositio_manus >= 0){
                // Dano mágico contra todos os tamanhos +3%.
                multipliers.size[ALL] += 3 * learned_skills.impositio_manus;
            }
            // A cada 2 níveis de base: Dano de [Magnus Exorcismus] +3%.
            if (skill.id === "PR_MAGNUS")
                multipliers.skill += Math.floor(stats.baseLv/2) * 3;
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
            equipStats.str += Math.floor(stats.int / 18) * 3;
            equipStats.castdelay += Math.floor(stats.int / 18);
            equipStats.agi += Math.floor(stats.luk / 18) * 3;
        }
    },
    {
        id: '28538', dbname: 'Glove_Of_Wizard_BR', name: 'Luvas de H. Motto', slot1: 'card', slot4: tumulo,
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
        id: '490068', dbname: 'RingofVenus', name: 'Anel de Vênus', slot1: 'card', slot4: tumulo,
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
    {
        id: '490290', dbname: 'Ameretat', name: 'Anel de Ameretat', position: '2', slot1: 'card',
        script: function () {
            multipliers.matk += 10;
            // Super Agilidade
            if (document.getElementById('sho_slot2').value === '4854' ||
                document.getElementById('arm_slot2').value === '4854' ||
                document.getElementById('gar_slot2').value === '4854' ||
                document.getElementById('gar_slot3').value === '4854' ||
                document.getElementById('gar_slot4').value === '4854') {
                equipStats.percentASPD+=15;
            }
            // Super Inteligência
            if (document.getElementById('sho_slot2').value === '4856' ||
                document.getElementById('arm_slot2').value === '4856' ||
                document.getElementById('gar_slot2').value === '4856' ||
                document.getElementById('gar_slot3').value === '4856' ||
                document.getElementById('gar_slot4').value === '4856') {
                multipliers.matk+=30;
            }
            // Super Sorte
            if (document.getElementById('sho_slot2').value === '4858' ||
                document.getElementById('arm_slot2').value === '4858' ||
                document.getElementById('gar_slot2').value === '4858' ||
                document.getElementById('gar_slot3').value === '4858' ||
                document.getElementById('gar_slot4').value === '4858') {
                equipStats.castdelay+=30;
            }
        }
    },
];

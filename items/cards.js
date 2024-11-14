const cards = [
    // headgear cards
    {
        id: '4374',
        dbname: 'Apocalips_H_Card',
        name: 'Carta Vesper',
        position: 'top',
        script: function () {
            equipStats.dex += 2;
            if (target.type === BOSS)
                equipStats.bypass += 30;
        }
    },
    {
        id: '27309',
        dbname: 'High_Sanare_Card',
        name: 'Carta Sanare Mutante',
        position: 'top',
        script: function () {
            equipStats.flatMATK += 10;
            multipliers.skill_property[HOLY] += 5;
            if (currentEquip === 'top' && refinement.top >= 9)
                multipliers.skill_property[HOLY] += 5;
        }
    },
    {
        id: '4403',
        dbname: 'Kiel_Card',
        name: 'Carta Kiel-D-01',
        position: 'top',
        script: function () {
            equipStats.castdelay += 30;
        }
    },
    {
        id: '4556',
        dbname: 'Fenrir_Card',
        name: 'Carta Fenrir',
        position: 'top',
        script: function () {
            equipStats.flatMATK += 50;
            if (equipStats.percentFCT < 70)
                equipStats.percentFCT = 70;
            if (currentEquip === 'top')
                equipStats.flatMATK += refinement.top * 5;
        }
    },
    {
        id: '4557',
        dbname: 'Fenrir_Card_',
        name: 'Carta Fenris',
        position: 'top',
        script: function () {
            equipStats.flatMATK += 25;
        }
    },
    {
        id: '4528',
        dbname: 'Mutant_Coelacanth_Card',
        name: 'Carta Celacanto Mutante',
        position: 'top',
        script: function () {
            multipliers.matk += 2;
            if (currentEquip === 'top')
                multipliers.matk += Math.floor(refinement.top / 2);
        }
    },

    // armor cards
    {
        id: '4652',
        dbname: 'Grave_Amon_Ra_Card',
        name: 'Carta Amon Ra do Pesadelo',
        position: 'arm',
        script: function () {
            multipliers.race[DEMON] += 50;
            multipliers.race[UNDEAD] += 50;
            multipliers.property[DARK] += 50;
            multipliers.property[UNDEAD] += 50;
        }
    },
    {
        id: '4602', dbname: 'AmdaraisH_Card', name: 'Carta Amdarais Sombrio', position: 'arm',
        script: function () {
            multipliers.matk += 20;
        }
    },
    {
        id: '300308', dbname: 'S_Meyer_Card', name: 'Carta Meyer', position: 'arm',
        script: function () {
            multipliers.skill_property[ALL] += Math.floor(refinement.armor / 3) * 4;
        }
    },
    {
        id: '4601', dbname: 'Amdarais_Card', name: 'Carta Amdarais', position: 'arm',
        script: function () {
            multipliers.matk += 15;
        }
    },
    {
        id: '4451', dbname: 'Ant_Buyanne_Card', name: 'Carta Entweihen Crothen', position: 'arm',
        script: function () {
            equipStats.flatMATK += 100;
        }
    },

    // weapon cards
    {
        id: '4685', dbname: 'Real_Magaleta_Card', name: 'Carta Alma de Margaretha', position: 'wea',
        script: function () {
            if (skill.id === "AB_ADORAMUS") {
                multipliers.skill += 20;
                if (refinement.weapon >= 10)
                    multipliers.skill += 20;
                if (weapon.lv === 4)
                    multipliers.skill += 20;
            }
        }
    },
    {
        id: '4625', dbname: 'Timeholder_Card', name: 'Carta Vigia do Tempo', position: 'wea',
        script: function () {
            multipliers.matk += 20;
        }
    },
    {
        id: '27286', dbname: 'Colorful_T_Bear_Card', name: 'Carta Ursinhos Coloridos', position: 'wea',
        script: function () {
            equipStats.flatMATK += 5;
            multipliers.size[LARGE] += 15;
        }
    },
    {
        id: '27289', dbname: 'Fragment_Of_Soul_Card', name: 'Carta Fragmento de Alma', position: 'wea',
        script: function () {
            equipStats.flatMATK += 5;
            multipliers.size[MEDIUM] += 15;
        }
    },
    {
        id: '31023', dbname: 'XM_Celine_Kimi_Card', name: 'Carta Celine Kimi', position: 'wea',
        script: function () {
            multipliers.matk += 10;
        }
    },
    {
        id: '31025', dbname: 'As_Wind_Ghost_Card', name: 'Carta Xamã Imortal', position: 'wea',
        script: function () {
            multipliers.matk += 10;
        }
    },
    {
        id: '27225', dbname: 'SLD_Timeholder_Card', name: 'Carta Vigia do Tempo Selada', position: 'wea',
        script: function () {
            multipliers.matk += 10;
            if (refinement.weapon >= 15)
                multipliers.matk += 5;
        }
    },
    {
        id: '27087', dbname: 'WizardOfVeritas_Card', name: 'Carta Veritas', position: 'wea',
        script: function () {
            equipStats.flatMATK += 25;
        }
    },
    {
        id: '300011', dbname: 'Holy_Frus_Card', name: 'Carta Frus Angelical', position: 'wea',
        script: function () {
            if (weapon.class === ONE_HANDED_STAFF || weapon.class === TWO_HANDED_STAFF){
                multipliers.skill_property[HOLY] += 10;
                if (refinement.weapon >= 10)
                    multipliers.skill_property[HOLY] += 10;
                if (refinement.weapon >= 14)
                    multipliers.skill_property[HOLY] += 10;
            }
        }
    },


    // shield cards
    {
        id: '4636', dbname: 'Bijou_Card', name: 'Carta Bijou', position: 'shi',
        script: function () {
            multipliers.matk += 10;
        }
    },
    {
        id: '4250', dbname: 'Executioner_Card', name: 'Carta Executor', position: 'shi',
        script: function () {
        }
    },
    {
        id: '4254', dbname: 'Tirfing_Card', name: 'Carta Tirfing', position: 'shi',
        script: function () {
        }
    },
    {
        id: '4207', dbname: 'Mysteltainn_Card', name: 'Carta Mysteltainn', position: 'shi',
        script: function () {
        }
    },

    // garment cards
    {
        id: '4596', dbname: 'AntiqueBook_Card', name: 'Carta Antigo Livro Danificado', position: 'gar',
        script: function () {
            equipStats.flatMATK += Math.floor(stats.int / 10) * 5;
        }
    },
    {
        id: '4675', dbname: 'Archbishop_Card', name: 'Carta Arcebispa Margaretha', position: 'gar',
        script: function () {
            if (refinement.garment >= 10) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (stats.baseLv >= 175) {
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
        id: '4675 ', dbname: 'Archbishop_Card', name: 'Carta Arcebispa Margaretha (Transformação)', position: 'gar',
        script: function () {
            if (refinement.garment >= 10) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (stats.baseLv >= 175) {
                equipStats.str += 10;
                equipStats.agi += 10;
                equipStats.vit += 10;
                equipStats.int += 10;
                equipStats.dex += 10;
                equipStats.luk += 10;
            }
            if (document.getElementById('wea_slot1').value === '4685' ||
                document.getElementById('wea_slot2').value === '4685' ||
                document.getElementById('wea_slot3').value === '4685' ||
                document.getElementById('wea_slot4').value === '4685') {
                equipStats.flatMATK += 100;

            }
        }
    },
    {
        id: '27381', dbname: 'C_Himel_Card', name: '(kRO) Phantom of Himmelmez Card', position: 'gar',
        script: function () {
            // Increases holy and neutral property magical damage by 100%.
            multipliers.skill_property[HOLY] += 100;
            multipliers.skill_property[NEUTRAL] += 100;
        }
    },
    {
        id: '300122', dbname: 'Pitaya_Y_Card', name: '(kRO) Yellow Pitaya Card', position: 'gar',
        script: function () {
            // Increases holy property magical damage by 3% per refine rate.
            multipliers.skill_property[HOLY] += refinement.garment * 3;
        }
    },
    {
        id: '300424', dbname: 'S_Friedrich_Card', name: 'Carta Friedrich', position: 'gar',
        script: function () {
            // Increases all property magical damage by 5%.
            multipliers.skill_property[ALL] += 5;
            // Increases all property magical damage by additional 4% per 2 refine rate.
            multipliers.skill_property[ALL] += Math.floor(refinement.garment / 2) * 4;
            // When equipped with Meyer Lugenburg Card, increases all property magical damage by 5%.
            if (document.getElementById('arm_slot1').value === '300308')
                multipliers.skill_property[ALL] += 5;
        }
    },
    {
        id: '27177', dbname: 'Rr_Arclouse_Card', name: '(kRO) Carta Tapuru', position: 'gar',
        script: function () {
            // A cada 10 de INT, ATQM +3, ASPD +1%.
            equipStats.flatMATK += Math.floor(stats.int / 10) * 3;
            equipStats.percentASPD += Math.floor(stats.int / 10);
            // INT 120 ou mais ATQM+ 40.
            if (stats.int >= 120)
                equipStats.flatMATK += 40;
        }
    },

    // shoes cards
    {
        id: '27287', dbname: 'Shining_T_Bear_Card', name: 'Carta Ursinho Brilhante', position: 'sho',
        script: function () {
            multipliers.skill_property[HOLY] += refinement.shoes * 3;
        }
    },
    {
        id: '4658', dbname: 'Grave_Verit_Card', name: 'Carta Verit do Pesadelo', position: 'sho',
        script: function () {
            multipliers.matk += 5;
            if (refinement.shoes >= 7)
                multipliers.matk += 3;
            if (refinement.shoes >= 9)
                multipliers.matk += 2;
        }
    },
    {
        id: '27259', dbname: 'Rechenier_Card', name: 'Carta Shaula', position: 'sho',
        script: function () {
            multipliers.matk += 3;
            multipliers.skill_property[HOLY] += 5;
        }
    },
    {
        id: '4441', dbname: 'Fallen_Bishop_Card', name: 'Carta Bispo Decadente', position: 'sho',
        script: function () {
            multipliers.matk += 10;
            multipliers.race[HUMAN] += 50;
            multipliers.race[DEMI_HUMAN] += 50;
            multipliers.race[ANGEL] += 50;
        }
    },
    {
        id: '4539', dbname: 'Sealed_F_Bishop_Card', name: 'Carta Bispo Decadente Selada', position: 'sho',
        script: function () {
            multipliers.matk += 5;
            multipliers.race[HUMAN] += 25;
            multipliers.race[DEMI_HUMAN] += 25;
            multipliers.race[ANGEL] += 25;
            if (refinement.shoes >= 15) {
                multipliers.matk += 3;
                multipliers.race[HUMAN] += 8;
                multipliers.race[DEMI_HUMAN] += 8;
                multipliers.race[ANGEL] += 8;
            }
        }
    },

    // acc cards
    {
        id: '27125', dbname: 'Headless_Mule_Card', name: 'Carta Mula Sem Cabeça', position: 'acc',
        script: function () {
            multipliers.skill_property[WATER] += 20;
            multipliers.skill_property[HOLY] += 20;
        }
    },
    {
        id: '27323', dbname: 'Shnaim_Card', name: 'Carta Shenime', position: 'acc',
        script: function () {
        }
    },
    {
        id: '27322', dbname: 'Ahat_Card', name: 'Carta Ahat', position: 'acc',
        script: function () {
        }
    },
];

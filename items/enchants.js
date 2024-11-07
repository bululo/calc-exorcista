const enchants = [
    // Pedras de Atributo AGI
    {id: '4730', dbname: 'Agility1', name: 'AGI +1', script:function() { equipStats.agi+=1;}},
    {id: '4731', dbname: 'Agility2', name: 'AGI +2', script:function() { equipStats.agi+=2;}},
    {id: '4732', dbname: 'Agility3', name: 'AGI +3', script:function() { equipStats.agi+=3;}},
    {id: '4733', dbname: 'Agility4', name: 'AGI +4', script:function() { equipStats.agi+=4;}},
    {id: '4734', dbname: 'Agility5', name: 'AGI +5', script:function() { equipStats.agi+=5;}},
    // Pedras de Atributo INT
    {id: '4710', dbname: 'Inteligence1', name: 'INT +1', script:function() { equipStats.int+=1;}},
    {id: '4711', dbname: 'Inteligence2', name: 'INT +2', script:function() { equipStats.int+=2;}},
    {id: '4712', dbname: 'Inteligence3', name: 'INT +3', script:function() { equipStats.int+=3;}},
    {id: '4713', dbname: 'Inteligence4', name: 'INT +4', script:function() { equipStats.int+=4;}},
    {id: '4714', dbname: 'Inteligence5', name: 'INT +5', script:function() { equipStats.int+=5;}},
    {id: '4715', dbname: 'Inteligence6', name: 'INT +6', script:function() { equipStats.int+=6;}},
    // Pedras de Atributo DES
    {id: '4720', dbname: 'Dexterity1', name: 'DES +1', script:function() { equipStats.dex+=1;}},
    {id: '4721', dbname: 'Dexterity2', name: 'DES +2', script:function() { equipStats.dex+=2;}},
    {id: '4722', dbname: 'Dexterity3', name: 'DES +3', script:function() { equipStats.dex+=3;}},
    {id: '4723', dbname: 'Dexterity4', name: 'DES +4', script:function() { equipStats.dex+=4;}},
    {id: '4724', dbname: 'Dexterity5', name: 'DES +5', script:function() { equipStats.dex+=5;}},
    // Pedras de Atributo SOR
    {id: '4750', dbname: 'Luck1', name: 'SOR +1', script:function() { equipStats.luk+=1;}},
    {id: '4751', dbname: 'Luck2', name: 'SOR +2', script:function() { equipStats.luk+=2;}},
    {id: '4752', dbname: 'Luck3', name: 'SOR +3', script:function() { equipStats.luk+=3;}},
    {id: '4753', dbname: 'Luck4', name: 'SOR +4', script:function() { equipStats.luk+=4;}},
    {id: '4754', dbname: 'Luck5', name: 'SOR +5', script:function() { equipStats.luk+=5;}},
    // Pedras de ATQM%
    {id: '4760', dbname: 'Matk1', name: 'ATQM +1%', script:function() { multipliers.matk+=1;}},
    {id: '4761', dbname: 'Matk2', name: 'ATQM +2%', script:function() { multipliers.matk+=2;}},
    // Pedra de ASPD flat
    {id: '4807', dbname: 'Atk_Speed1', name: 'Vel. Ataque 1', script:function() { }},
    // Pedras de Encantamento
    {id: '4815', dbname: 'Spell1',  name: 'Pedra de Encantamento 1',  script:function() { equipStats.flatMATK+= 6; equipStats.VCT+= 3;}},
    {id: '4814', dbname: 'Spell2',  name: 'Pedra de Encantamento 2',  script:function() { equipStats.flatMATK+= 9; equipStats.VCT+= 6;}},
    {id: '4813', dbname: 'Spell3',  name: 'Pedra de Encantamento 3',  script:function() { equipStats.flatMATK+=12; equipStats.VCT+= 8;}},
    {id: '4812', dbname: 'Spell4',  name: 'Pedra de Encantamento 4',  script:function() { equipStats.flatMATK+=15; equipStats.VCT+=10;}},
    {id: '4826', dbname: 'Spell5',  name: 'Pedra de Encantamento 5',  script:function() { equipStats.flatMATK+=18; equipStats.VCT+=10;}},
    {id: '4827', dbname: 'Spell6',  name: 'Pedra de Encantamento 6',  script:function() { equipStats.flatMATK+=21; equipStats.VCT+=10;}},
    {id: '4831', dbname: 'Spell10', name: 'Pedra de Encantamento 10', script:function() { equipStats.flatMATK+=50; equipStats.VCT+=20;}},
    // Pedras Super
    {id: '4854', dbname: 'S_Agi', name: 'Super Agilidade',
        script:function() {
            equipStats.agi+=1;
            if (sourceRefine()>=8)
                equipStats.agi+=3
            // Refino +9 ou mais:
            // Dano físico +1%.
            // Refino +12 ou mais:
            if(sourceRefine()>=12){
                equipStats.flatASPD+=1;
                if (equipStats.percentFCT < 7)
                    equipStats.percentFCT = 7;
            }
            // Velocidade de Ataque +1.
            // Tempo de conjuração fixa -7%.
        }
    },
    {id: '4856', dbname: 'S_Int', name: 'Super Inteligência',
        script:function() {
            equipStats.int+=1;
            if (sourceRefine()>=8)
                equipStats.int+=3
            if (sourceRefine()>=9)
                multipliers.matk+=1;
            if(sourceRefine()>=12){
                equipStats.flatASPD+=1;
                if (equipStats.percentFCT < 7)
                    equipStats.percentFCT = 7;
            }
        }
    },
    {id: '4858', dbname: 'S_Luck', name: 'Super Sorte',
        script:function() {
            equipStats.luk+=1;
            if (sourceRefine()>=8)
                equipStats.luk+=3
            if(sourceRefine()>=12){
                equipStats.flatASPD+=1;
                if (equipStats.percentFCT < 7)
                    equipStats.percentFCT = 7;
            }
        }
    },
    // Anti-Atraso
    {id: '4869', dbname: 'Attack_Delay_1', name: 'Anti-Atraso 1', script:function() { equipStats.percentASPD+=  4;}}, // ASPD + 4%
    {id: '4872', dbname: 'Attack_Delay_2', name: 'Anti-Atraso 2', script:function() { equipStats.percentASPD+=  6;}}, // ASPD + 6%
    {id: '4873', dbname: 'Attack_Delay_3', name: 'Anti-Atraso 3', script:function() { equipStats.percentASPD+=  8;}}, // ASPD + 8%
    {id: '4881', dbname: 'Attack_Delay_4', name: 'Anti-Atraso 4', script:function() { equipStats.percentASPD+= 10;}}, // ASPD +10%
    // Pedras de ATQM%
    {id: '4883', dbname: 'Matk1p', name: 'ATQM 1', script:function() { multipliers.matk+=1; }},
    {id: '4897', dbname: 'Matk3p', name: 'ATQM 3', script:function() { multipliers.matk+=3; }},
    // Anti-Horário
    {id: '4949', dbname: 'Skill_Delay2', name: 'Anti-Horário 2', script:function() { equipStats.castdelay+=4; }},
    {id: '4950', dbname: 'Skill_Delay3', name: 'Anti-Horário 3', script:function() { equipStats.castdelay+=6; }},
    // Insígnias da Virtude
    {id: '29071', dbname:  'MagicEessence1', name:  'Insígnia da Virtude 1', script:function() { multipliers.matk+= 3; equipStats.flatFCT+=0.1;}},
    {id: '29072', dbname:  'MagicEessence2', name:  'Insígnia da Virtude 2', script:function() { multipliers.matk+= 6; equipStats.flatFCT+=0.2;}},
    {id: '29073', dbname:  'MagicEessence3', name:  'Insígnia da Virtude 3', script:function() { multipliers.matk+= 9; equipStats.flatFCT+=0.3;}},
    {id: '29074', dbname:  'MagicEessence4', name:  'Insígnia da Virtude 4', script:function() { multipliers.matk+=12; equipStats.flatFCT+=0.4;}},
    {id: '29075', dbname:  'MagicEessence5', name:  'Insígnia da Virtude 5', script:function() { multipliers.matk+=15; equipStats.flatFCT+=0.5;}},
    {id: '29076', dbname:  'MagicEessence6', name:  'Insígnia da Virtude 6', script:function() { multipliers.matk+=18; equipStats.flatFCT+=0.6;}},
    {id: '29077', dbname:  'MagicEessence7', name:  'Insígnia da Virtude 7', script:function() { multipliers.matk+=21; equipStats.flatFCT+=0.7;}},
    {id: '29078', dbname:  'MagicEessence8', name:  'Insígnia da Virtude 8', script:function() { multipliers.matk+=24; equipStats.flatFCT+=0.8;}},
    {id: '29079', dbname:  'MagicEessence9', name:  'Insígnia da Virtude 9', script:function() { multipliers.matk+=27; equipStats.flatFCT+=0.9;}},
    {id: '29080', dbname: 'MagicEessence10', name: 'Insígnia da Virtude 10', script:function() { multipliers.matk+=33; equipStats.flatFCT+=1.0;}},
    // Pedras de Amplificação
    {id: '29445', dbname: 'Amplification1', name: 'Pedra de Amplificação 1', script:function() { multipliers.matk+=sourceRefine();}},
    {id: '29446', dbname: 'Amplification2', name: 'Pedra de Amplificação 2', script:function() { multipliers.matk+=sourceRefine()*2;}},
    {id: '29447', dbname: 'Amplification3', name: 'Pedra de Amplificação 3', script:function() { multipliers.matk+=sourceRefine()*3;}},
    // Epifania
    {id: '4876', dbname: 'Runaway_Magic', name: 'Epifania', script:function() {}},
    {id: '4876 ', dbname: 'Runaway_Magic', name: 'Epifania (Ativado)', script:function() { equipStats.int+=200; }},
    // Pedra de Feitiço
    {id: '4889', dbname: 'Conjure5',  name: 'Pedra de Feitiço 5',  script:function() { equipStats.flatMATK+= 30; equipStats.VCT+= 3;}},
    // Módulos 17.1
    {id: '29535', dbname: 'Improve_Orb_Matk', name: 'S-ATQM',
        script: function (){
            // Dano mágico +5%
            multipliers.matk += 5;
            // Refino +7 ou mais: ATQM +25
            if (sourceRefine() >= 7)
                equipStats.flatMATK += 25;
            // Refino +9 ou mais: ATQM +25 adicional
            if (sourceRefine() >= 9)
                equipStats.flatMATK += 25;
        }
    },
    {id: '29540', dbname: 'Improve_Orb_Delay', name: 'U-Pós',
        script: function (){
            // Pós-conjuração -5%
            equipStats.castdelay += 5;
            // Refino +7 ou mais: Pós-conjuração -5% adicional
            if (sourceRefine() >= 7)
                equipStats.castdelay += 5;
            // Refino +9 ou mais: Pós-conjuração -5% adicional
            if (sourceRefine() >= 9)
                equipStats.castdelay += 5;
        }
    },
    // Enchants Biolab
    {id: '29599', dbname: 'Magaleta_Memory', name: 'Memória de Margaretha',
        script: function (){
            // Conjunto [Penitência]
            if (document.getElementById('wea').value === '26161'){
                if (skill.id === "PR_MAGNUS"){
                    multipliers.skill += Math.floor(refinement.weapon/3) * 10;
                }
                else if (skill.id === "AB_JUDEX"){
                    multipliers.skill += Math.floor(refinement.weapon/3) * 5;
                }
            }
        },
    },
];

function sourceRefine(){
    switch (currentEquip){
        case 'top':
            return refinement.top;
        case 'arm':
            return refinement.armor;
        case 'wea':
            return refinement.weapon;
        case 'shi':
            return refinement.shield;
        case 'gar':
            return refinement.garment;
        case 'sho':
            return refinement.shoes;
    }
}

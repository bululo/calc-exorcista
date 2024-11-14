const c_top = [
    {
        id: '29513', dbname: 'Highpriest_Top', name: '(kRO) High Priest Stone (Upper)', script: function () {
        }
    },
    {
        id: '310008', dbname: 'Highpriest_Top2', name: '(kRO) High Priest Stone II(Upper)', script: function () {
        }
    },
    {
        id: '311356', dbname: 'Archbishop_Top3', name: '(kRO) Archbishop Stone (Upper)', script: function () {
            // For every level of Clementia learned, reduces global cooldown by 3%.
            equipStats.castdelay += 15;
            // Conjunto Archbishop Stone (Garment)
            // Increases all property magical damage by 15%.
            if (document.getElementById('c_gar').value === '29516')
                multipliers.skill_property[ALL] += 15;
            // Conjunto Archbishop Stone II (Garment)
            // Increases magical damage against all size enemies by 15%.
            if (document.getElementById('c_gar').value === '310011')
                multipliers.size[ALL] += 15;
        }
    },
];

const c_mid = [
    {
        id: '29514', dbname: 'Highpriest_Middle', name: '(kRO) High Priest Stone (Middle)', script: function () {
        }
    },
    {
        id: '310009', dbname: 'Highpriest_Middle2', name: '(kRO) High Priest Stone II(Middle)', script: function () {
            multipliers.skill_property[HOLY] += 5;
        }
    },
    {
        id: '311357', dbname: 'Archbishop_Middle3', name: '(kRO) Archbishop Stone (Middle)', script: function () {
            // For every level of Lauda Agnus learned, reduces variale casting by 3%.
            equipStats.VCT += 12;
            // Conjunto Archbishop Stone (Garment)
            // Increases Adoramus damage by 15%.
            if (document.getElementById('c_gar').value === '29516')
                if (skill.id === 'AB_ADORAMUS')
                    multipliers.skill += 15;
            // Conjunto Archbishop Stone II (Garment)
            // Increases Judex damage by 15%.
            if (document.getElementById('c_gar').value === '310011')
                if (skill.id === 'AB_JUDEX')
                    multipliers.skill += 15;
        }
    },

];

const c_low = [
    {
        id: '29515', dbname: 'Highpriest_Bottom', name: '(kRO) High Priest Stone (Lower)', script: function () {
        }
    },
    {
        id: '310010', dbname: 'Highpriest_Bottom2', name: '(kRO) High Priest Stone II(Lower)', script: function () {
            equipStats.VCT += 5;
        }
    },
    {
        id: '311358', dbname: 'Archbishop_Bottom3', name: '(kRO) Archbishop Stone (Lower)', script: function () {
            // For every level of Expiatio learned, reduces fixed casting time by 0.1 seconds.
            equipStats.flatFCT += 0.5;
            // Conjunto Archbishop Stone (Garment)
            // Increases magical damage against all race monsters (except players) by 15%.
            if (document.getElementById('c_gar').value === '29516')
                multipliers.race[ALL] += 15;
            // Conjunto Archbishop Stone II (Garment)
            // Increases all property magical damage by 15%.
            if (document.getElementById('c_gar').value === '310011')
                multipliers.skill_property[ALL] += 15;
        }
    },
];

const c_gar = [
    {
        id: '29516', dbname: 'Archbishop_Robe', name: '(kRO) Archbishop Stone (Garment)',
        script: function () {
            if (skill.id === 'AB_ADORAMUS')
                multipliers.skill += 15;
            if (document.getElementById('c_top').value === '29513')
                if (skill.id === 'AB_ADORAMUS')
                    multipliers.skill += 15;
            if (document.getElementById('c_mid').value === '29514')
                if (skill.id === 'AB_ADORAMUS')
                    skill.cooldown = ( (skill.cooldown*10) - 10 )/10;
            if (document.getElementById('c_low').value === '29515')
                equipStats.flatFCT += 0.5;
        }
    },
    {
        id: '310011', dbname: 'Archbishop_Robe2', name: '(kRO) Arch Bishop Stone II(Garment)',
        script: function () {
            // Increase damage of Judex by 15%.
            if (skill.id === 'AB_JUDEX')
                multipliers.skill += 15;
            // When equipped with High Priest Stone II(Upper), increase damage of Judex by 15%.
            if (document.getElementById('c_top').value === '310008')
                if (skill.id === 'AB_JUDEX')
                    multipliers.skill += 15;
            // When equipped with High Priest Stone II(Middle), reduce SP consumption of Judex by 10%.
            // if (document.getElementById('c_mid').value === '310009')
            //
            // When equipped with High Priest Stone II(Lower), increase holy property magic damage by 10%.
            if (document.getElementById('c_low').value === '310010')
                multipliers.skill_property[HOLY] += 10;
        }
    },
    {
        id: '25067', dbname: 'CastingStone_Robe', name: '(kRO) Casting Stone (Garment)',
        script: function () {
            equipStats.flatFCT += 0.5;
        }
    },
    {
        id: '25170', dbname: 'MinorCastingStone_Robe', name: '(kRO) Minor Casting Stone(Garment)',
        script: function () {
            equipStats.flatFCT += 0.3;
        }
    },
];

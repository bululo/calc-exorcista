skills = [
    {
        name: "Adoramus",
        id: "AB_ADORAMUS",
        script(){
            return (Math.floor((330 + (70 * learned_skills.adoramus) ) * (stats.baseLv / 100)) / 100);
        },
        property: HOLY,
        hits: 10,
        cooldown: 2.5,
        fct: 0.5,
        vct: 2,
        castdelay: 0.5
    },
    {
        name: "Judex",
        id: "AB_JUDEX",
        script(){
            return (Math.floor((300 + (40 * learned_skills.judex) ) * (stats.baseLv / 100)) / 100);
        },
        property: HOLY,
        hits: 3,
        cooldown: 0,
        fct: 0.5,
        vct: 2,
        castdelay: 0.5
    },
    {
        name: "Luz Divina",
        id: "AL_HOLYLIGHT",
        script(){
            return 1.25;
        },
        property: HOLY,
        hits: 1,
        cooldown: 0,
        fct: 0.2,
        vct: 0.8,
        castdelay: 0
    },
]

buffs = [
    {
        name: "Clementia",
        id: "AB_CLEMENTIA",
        max_level: 3,
        script(level){
            let bonus = Math.floor(stats.jobLv/10)
            equipStats.str += 10 + bonus;
            equipStats.int += 10 + bonus;
            equipStats.dex += 10 + bonus;
        },
    },
    {
        name: "Canto Candidus",
        id: "AB_CANTO",
        max_level: 3,
        script(level){
            let bonus = Math.floor(stats.jobLv/10)
            equipStats.agi += 12 + bonus;
            equipStats.percentASPD += 10 + bonus;
        },
    },
    {
        name: "Oratio",
        id: "AB_ORATIO",
        max_level: 10,
        script(level){
            buffs.oratio = learned_skills.oratio;
        },
    },
    {
        name: "Expiatio",
        id: "AB_EXPIATIO",
        max_level: 5,
        script(level){
            equipStats.bypass+= level*5;
        },
    },
    {
        name: "Impositio Manus",
        id: "PR_IMPOSITIO",
        max_level: 5,
        script(level){
            equipStats.flatMATK += learned_skills.impositio_manus*5;
        },
    },
    {
        name: "Lex Aeterna",
        id: "PR_LEXAETERNA",
        max_level: 1,
        script(level){
            buffs.lex_aeterna = true;
        },
    },
    {
        name: "Glória",
        id: "PR_GLORIA",
        max_level: 1,
        script(level){
            equipStats.luk += 30;
        },
    },
    {
        name: "Basílica",
        id: "HP_BASILICA",
        max_level: 5,
        script(level){
            multipliers.skill_property[HOLY] += level * 3;
        },
    },
    {
        name: "Poder de Odin",
        id: "ALL_ODINS_POWER",
        max_level: 2,
        script(level){
            if (level === 2){
                equipStats.flatMATK += 100;
            } else {
                equipStats.flatMATK +=70;
            }
        },
    },
    {
        name: "Amplificação Mística",
        id: "HW_MAGICPOWER",
        max_level: 5,
        script(level){
            buffs.mystical_amplification = level;
        },
    },
    {
        name: "Espírito do Sacerdote",
        id: "SL_PRIEST",
        max_level: 5,
        script(level){
            if (skill.id === "AL_HOLYLIGHT")
                skill.dmg = 6.25;
        },
    },
]
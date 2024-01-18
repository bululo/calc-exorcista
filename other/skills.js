skills = [
    {
        name: "Adoramus",
        id: "AB_ADORAMUS",
        script(){
            return (Math.floor(1030 * (stats.baseLv / 100)) / 100);
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
            return (Math.floor(700 * (stats.baseLv / 100)) / 100);
        },
        property: HOLY,
        hits: 3,
        cooldown: 0,
        fct: 0.5,
        vct: 2,
        castdelay: 0.5
    },
]
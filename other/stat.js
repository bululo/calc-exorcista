function calcularPontos() {
    // Obter o valor do nível
    var nivel = document.getElementById("base_lvl").value;

    // Calcular pontos cumulativos com base nas regras fornecidas
    let pontos = 100;
    for (var i = 1; i < nivel; i++) {
        if (i < 100) {
            pontos += Math.floor(i / 5) + 3;
        } else if (i >= 100 && i <= 150) {
            pontos += Math.floor(i / 10) + 13;
        } else if (i > 150 && i <= 200) {
            pontos += Math.floor((i - 150) / 7) + 28;
        }
    }

    // Obter o valor do atributo
    //var atributo = document.getElementById("atributo").value;
    var atributos  = document.getElementsByClassName("atributo");
    //alert(atributos[0].value);
    //alert(atributos[1].value);

    var custo = 0;
    for (var j = 0; j < 6; j++) {
        for (var i = 1; i < atributos[j].value; i++) {
            if (i >= 1 && i <= 99) {
                custo += Math.floor((i - 1) / 10) + 2;
            } else if (i >= 100 && i <= 129) {
                custo += 4 * Math.floor((i - 100) / 5) + 16;
            }
        }
    }
    custo = pontos - custo;

    // Atualizar o texto na página
    document.getElementById("custoAtributo").textContent = "Pontos: " + custo;
}

// function calcularCustoAtributo() {
//     // Obter o valor do atributo
//     //var atributo = document.getElementById("atributo").value;
//     var atributos  = document.getElementsByClassName("atributo");
//     //alert(atributos[0].value);
//     //alert(atributos[1].value);
//
//     var custo = 0;
//     for (var j = 0; j < 6; j++) {
//         for (var i = 1; i < atributos[j].value; i++) {
//             if (i >= 1 && i <= 99) {
//                 custo += Math.floor((i - 1) / 10) + 2;
//             } else if (i >= 100 && i <= 129) {
//                 custo += 4 * Math.floor((i - 100) / 5) + 16;
//             }
//         }
//     }
//     custo = pontos - custo;
//     // // Calcular o custo cumulativo de aumentar o atributo com base nas regras fornecidas
//     // var custo = 0;
//     // for (var i = 1; i < atributo; i++) {
//     //     if (i >= 1 && i <= 99) {
//     //         custo += Math.floor((i - 1) / 10) + 2;
//     //     } else if (i >= 100 && i <= 129) {
//     //         custo += 4 * Math.floor((i - 100) / 5) + 16;
//     //     }
//     // }
//
//     // Atualizar o texto na página
//     document.getElementById("custoAtributo").textContent = "Pontos: " + custo;
// }

function imposeMinMax(el) {
    let value = el.value;
    if (value != "") {
        value = parseInt(el.value);
        if (value < parseInt(el.min)) {
            el.value = el.min;
        } else if (value > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}
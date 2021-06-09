function solucao(ano) {
    let multiplo2 = (ano%2);
    let multiplo4 = (ano%4);
    if (multiplo2 == 0 && multiplo4 != 0) {
        console.log("COPA");
    } else if (multiplo4==0) {
        console.log ("JOGOS")
    } else {
        console.log("MEH")
    }
}

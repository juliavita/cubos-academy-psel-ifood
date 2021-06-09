function solucao(letra, palavras) {
    let vencedores = 0;
    for (item of palavras) {
        if (item[0] === letra) {
            vencedores = vencedores + 1;
        }
    }
    let perdedores = palavras.length - vencedores
    console.log(perdedores)   
}
function solucao(precos) {
    let total = 0;
    
    if (precos.length >=5) {
        let desconto = precos[0];
        for (item of precos) {
            total = total + item
            if (desconto > item) {
                desconto = item;
            } 
        }
        let pagamento = total - desconto;
        console.log(pagamento)
    } else {
        for (item of precos) {
            total = total + item; 
        }
        console.log(total)
    }
}

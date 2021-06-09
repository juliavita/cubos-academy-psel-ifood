function solucao(produtos) {
	let valorTotal = 0;
    let valorTop = 0;
    
    for (item of produtos) {
        valorTotal = valorTotal + item.preco;
        if (item.preco > 10000) {
            valorTop = valorTop + item.preco;
        }
    }
    
    const resposta = {
        totalTop: valorTop,
        percentual: valorTop / valorTotal
    };
    
    console.log(resposta)
}
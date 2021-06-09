function solucao(tempo, distancia) {
    
    let precoCurta = 600;
    let precoMedia = 100*tempo + 50*distancia;
    let precoLongaMenorQueCem = 200*distancia;
    let precoLongaMaiorOuIgualQueCem = 150*distancia;
    
	if (tempo >= 5 && tempo <= 60) {
        console.log(precoMedia);
    } else if (tempo > 60) {
        if (distancia < 100) {
            console.log(precoLongaMenorQueCem);
        } else {
            console.log(precoLongaMaiorOuIgualQueCem);
        }
    } else {
        console.log(precoCurta);
    }
}
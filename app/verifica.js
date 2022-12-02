function verificaChute(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido</div>`
        return
    }

    if(numberoDiferente(numero)){
        elementoChute.innerHTML += `<div>O valor precisa estão entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `<section><h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        </section>`
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numberoDiferente(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
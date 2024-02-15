function alterarStatus(numero_do_jogo) {
    let jogoImagem = document.querySelector(`#game-${numero_do_jogo} .dashboard__item__img`);
    if (jogoImagem.classList.contains('dashboard__item__img--rented')) {
        jogoImagem.classList.remove('dashboard__item__img--rented');
    } else {
        jogoImagem.classList.add('dashboard__item__img--rented');
    }

    let jogoTexto = document.querySelector(`#game-${numero_do_jogo} .dashboard__item__button`);
    if (jogoTexto.classList.contains('dashboard__item__button--return')) {
        jogoTexto.classList.remove('dashboard__item__button--return');
        jogoTexto.innerHTML = 'Alugar';
    } else {
        jogoTexto.classList.add('dashboard__item__button--return');
        jogoTexto.innerHTML = 'Devolver'
    }
}

function alterarStatus(numero_do_jogo) {
    let jogoImagem = document.querySelector(`#game-${numero_do_jogo} .dashboard__item__img`);
    if (jogoImagem.classList.contains('dashboard__item__img--rented')) {
        jogoImagem.classList.remove('dashboard__item__img--rented');
    } else {
        jogoImagem.classList.add('dashboard__item__img--rented');
    }

    let jogoTexto = document.querySelector(`#game-${numero_do_jogo} .dashboard__item__button`);
    let jogoNome = document.querySelector(`#game-${numero_do_jogo} .dashboard__item__name`);
    if (jogoTexto.classList.contains('dashboard__item__button--return')) {
        let confirmacaoUsuario = prompt(`Tem certeza que deseja devolver ${jogoNome.textContent}? S/N`).toLowerCase()
        if (confirmacaoUsuario == 's') {
            jogoTexto.classList.remove('dashboard__item__button--return');
            jogoTexto.innerHTML = 'Alugar';
        } else {
            return;
        }
    } else {
        jogoTexto.classList.add('dashboard__item__button--return');
        jogoTexto.innerHTML = 'Devolver'

    }
}

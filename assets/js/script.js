const corVerde = document.querySelector('.cGreen');
const corAmarelo = document.querySelector('.cYellow');
const corVermelho = document.querySelector('.cRed');
const legenda = document.querySelector('.legenda');

/* Contador e Emoji da Legenda*/
function legendas(contador) {
    let valor = contador;
    let emoji = '';
    
    if (corVerde.classList.contains('ativo')) {
        emoji = '&#x1F697;';
    } else if (corAmarelo.classList.contains('ativo')) {
        emoji = '&#9888;&#65039';
    } else {
        emoji = '&#x1F6B6';
    }

    legenda.innerHTML = `${emoji} <br> Tempo restante: ${valor}`;

    const intervalo = setInterval(function() {
        valor--;
        legenda.innerHTML = `${emoji} <br> Tempo restante: ${valor}`;
        if (valor === 0) {
                clearInterval(intervalo);
        }
    }, 1000)
} 

/* Função do Semáforo */
function semaforo() {
    if (corVerde.classList.contains('ativo')) {
        legendas(5);

        corVerde.style.background = '#73ff01';
        corVerde.style.boxShadow = '0px 0px 20px green';

        setTimeout(function() {
            corVerde.classList.remove('ativo');
            corVerde.style.background = '#004700';
            corVerde.style.boxShadow = 'none';

            corAmarelo.classList.add('ativo');
            
            semaforo();
        }, 5000);
    } else if (corAmarelo.classList.contains('ativo')) {
        legendas(3);

        corAmarelo.style.background = '#fffb00';
        corAmarelo.style.boxShadow = '0px 0px 20px yellow';

        setTimeout(function() {
            corAmarelo.classList.remove('ativo');
            corAmarelo.style.background = '#474700';
            corAmarelo.style.boxShadow = 'none';

            corVermelho.classList.add('ativo');

            semaforo();
        }, 3000);
    } else if (corVermelho.classList.contains('ativo')) {
        legendas(5);

        corVermelho.style.background = '#ff0000';
        corVermelho.style.boxShadow = '0px 0px 20px red';

        setTimeout(function() {
            corVermelho.classList.remove('ativo');
            corVermelho.style.background = '#470000';
            corVermelho.style.boxShadow = 'none';

            corAmarelo.classList.add('ativo');

            if (corAmarelo.classList.contains('ativo')) {
                legendas(3);

                corAmarelo.style.background = '#fffb00';
                corAmarelo.style.boxShadow = '0px 0px 20px yellow';

                setTimeout(function() {
                    corAmarelo.classList.remove('ativo');
                    corAmarelo.style.background = '#474700';
                    corAmarelo.style.boxShadow = 'none';

                    corVerde.classList.add('ativo');

                    semaforo();
                }, 3000);
            };
        }, 5000);
    } else {
        corVerde.classList.add('ativo')

        semaforo();
    }
}

semaforo();
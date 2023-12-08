//Selecionando botão pelo ID
const botao = document.querySelector('button');
const contadorElemento = document.querySelector('#contador');

//Inicializando contador 
let contador = 0;

//Função que será chamada pelo EventListener
function contando()
{
    contador++;
    contadorElemento.textContent = contador++;
}

//Adicionando ouvinte do evento de click
botao.addEventListener('click', contando);
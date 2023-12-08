canvas = document.querySelector('#pintarCanvas');
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');

//Variação que armazenará a cor 
const corEscolhida = documennt.querySelector('#corEscolhida');
const botao = document.querySelector('#limpar');
let pintando = false;

//Define a variavel como true indicando que o usuario começou a desenhar
canvas.addEventListener('mousedown', () => {
    pintando = true;
})

//define a variavel como false indicando que o usuario soltou o click
canvas.addEventListener('mouseup', () => {
    pintando = false;
    context.beginPath();//começa uma nova trajetória.

})

//a ação é indicada assim que o mouse se move, desde que o mouse se move,
//desde que o mousedown continue pressionado
canvas.addEventListener('mousemove', desenhar);

//seleciona a cor a ser utilizada 
corEscolhida.addEventListener('input', atualizarCor);

//chamamos a função  desenhar e passamos o event como parametro.
//o event é um objeto que contem atributos que são acionados de acordo
//com o evento ocorrido

function desenhar(event)
{
    if(!pintando) return;
    //retornam a posiçao do elemento na tela
    const {clientX, clientY } = event;
    //obtem as coordernadas do canto esquerdo do topo
    const {left, top } = canvas.getBoundingClienteRect();
    
    //subtrai as coordenadas do canvas nos dando a relatividade
    //com o canvas

    const x = clientX - left;
    const y = clientY = top;

    context.lineTo(x,y);
    context.stroke();
    context.beginPath();
    context.moveTo(x,y);

}

function atualizarCor(event){
    context.strokeStyle = event.target.value;
}

function limpar()
{
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();

}

botao.addEventListener('click', limpar);
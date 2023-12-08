const coluna = document.querySelector(".column");

//variavel para armazenar o item atual arrastado
let ItemArrastado = null;

//Adicionar um ouvinte ao evento "dragstar" a cada elemento com a classe "column"
colunas.forEach(item => {
    item.addEventListener("dragstar", (e) => {
        //define o item sendo arrastado
        ItemArrastado = e.target;

        //Adicionando a classe "dragging" ao item para destaca-lo visualmente
        ItemArrastado.classList.Add("dragging");
    });


//Adicionar um ouvinte ao evento "dragstar" para limpar o estado do arrastado
item.addEventListener("dragend", () => {
    ItemArrastado.classList.remove("dragging");

    ItemArrastado = null;
});
});

//Adiciona um ouvinte ao evento "dragover" a cada elemento com a classe "column"
colunas.forEach((item) =>
        {

        item.addEventListener("dragover", (e) =>{
            e.preventDefault();//previne o comportamento padrao de dragover 
            //verifica se há um item sendo arrastado
            if(!ItemArrastado) return;

            const aplicarDepois = getNewPosition(item, e.clientY);

            //insere o item arrastado após o de referencia ou inicio da coluna

            if(aplicarDepois){  
                aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
            }else{
                item.prepend(ItemArrastado);
            }
        });
    });

    //Função para calcular a nova posição do item na coluna 
    function getNewPosition(column, posY){
        const cards = column.querySelectorAll(" .item:not(.dragging)");
        let result;

        for(let refer_card of cards){
            const box = refer_card.getBoundingClientRect();
            const boxCenterY = box.top + box.height /2;

            //verifica se a posição do mouse esta em cima do centro do item de referencia 
            if(posY >= boxCenterY) result = refer_card;
        }
    }
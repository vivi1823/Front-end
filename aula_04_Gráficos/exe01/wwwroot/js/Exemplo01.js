//dados para o gráfico 
var data = {
    //rótulos do gráfico
    labels: ['Serviços', 'Industrias', 'Construção', 'Comércio', 'Agrupecuaria'],

    //Propriedades do gráfico
    datasets: [{
        label: 'Vendas 2023',
        backgroundColor: 'rgba(30,144,255, 0.6)',
        borderColor: 'rgba(0,255,0)',
        data: [12, 18, 3, 5, 23,5]
    },
    { 
        label: 'Vendas 2022',
        backgroundColor: 'rgba(127,255,0, 0.6)',
        borderColor: 'rgba(0,255,0)',
        data: [10, 6, 9, 15, 20,14]
    },
    { 
        label: 'Vendas 2021',
        backgroundColor: 'rgba(46,139,87, 0.6)',
        borderColor: 'rgba(0,255,0)',
        data: [2, 4, 8, 12, 16,18]
    },
    { 
        label: 'Vendas 2020',
        backgroundColor: 'rgba(0,0,205, 0.6)',
        borderColor: 'rgba(0,255,0)',
        data: [5,10,15,20,25,30]
    },
]
};

//configurações do gráfico
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

//Criar o gráfico de barras 
var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
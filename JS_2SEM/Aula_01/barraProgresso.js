function animarBarraProgresso()
{
    //Declarando as variáveis e atribuindo os valores dos elementos do DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function(){
          if(progresso > 100)
          {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1692533823876-e659c090a4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")`
          }

          else{
            progresso += 10;
            barra.css("width", progresso + "%");
          }
    },50);
}
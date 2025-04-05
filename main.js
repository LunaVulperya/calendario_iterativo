// codigo para tornar calendario iterativo usando função declarativa
function colorirDia(){
    // bloco de variáveis(escopo de função)
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendario = document.getElementById('calendario');
    //Bloco de validação de info
    if(!days){
        alert('Informe um dia existente no calendário');
    } else {
        if((days > 0) && (days < 31)){
            let td = calendario.getElementsByTagName('td')[parseInt(days)+1];
            td.style.backgroundColor = color;
        } else {
            alert('Favor informar uma data constante no calendário');
        }        
    }

    var elementos = document.querySelectorAll('td');

    // contador de cores utilizadas
    var contAzul = 0, contVerde = 0, contRosa = 0, contRoxo = 0;

    // loop de verificação de estilo de cada célula e contar quantas tem cores e quais
    for(let i=0; i<elementos.length;i++){
        // obtem o estilo aplicado de elemento atual
        var estilo = window.getComputedStyle(elementos[i]);

        // obtem a cor de fundo atual da celula
        var corEstilo = estilo.backgroundColor;

        var contadorAzul = document.getElementById('azul');
        var contadorVerde = document.getElementById('verde');
        var contadorRosa = document.getElementById('rosa');
        var contadorRoxo = document.getElementById('roxo');

        // verifica a cor e incrementa o contador correspondente
        if(corEstilo === 'rgb(173, 216, 230)' || corEstilo === 'LightBlue'){
            contAzul++;
            contadorAzul.textContent = contAzul;
        }
        else if(corEstilo === 'rgb(152, 251, 152)' || corEstilo === 'PaleGreen'){
            contVerde++;
            contadorVerde.textContent = contVerde;
        }
        else if(corEstilo === 'rgb(255, 182, 193)' || corEstilo === 'LightPink'){
            contRosa++;
            contadorRosa.textContent = contRosa;
        }
        else if(corEstilo === 'rgb(106, 90, 205)' || corEstilo === 'SlateBlue'){
            contRoxo++;
            contadorRoxo.textContent = contRoxo;
        }
    }

}
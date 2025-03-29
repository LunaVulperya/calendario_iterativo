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
            let td = calendario.getElementsByTagName('td');
            td.style.backgroundColor = color;
        } else {
            alert('Favor informar uma data constante no calendário');
        }        
    }

    var elementos = document.querySelectorAll('td');
    

}
//logica de calculo
function calcular(){
    var nota1 = window.document.getElementById('nota1s')
    var nota2 = window.document.getElementById('nota2s')
    var nota3 = window.document.getElementById('nota3s')
    var nota4 = window.document.getElementById('nota4s')
    var responder = window.document.getElementById('responder')

    var n1 = Number (nota1.value);
    var n2 = Number (nota2.value);
    var n3 = Number (nota3.value);
    var n4 = Number (nota4.value);


if(nota1.value == '' || nota2.value == '' || nota3.value == '' || nota4.value == ''|| nota3.value == '' || nota4.value == '' || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10) {
 window.alert('Error! Por favor preencha todos os campos ')

}else{
    responder.innerHTML=""
    var soma = n1 + n2 + n3 + n4
    var total = soma / 4 
    var resi = window.document.getElementById('resi')

}if (total >= 6){
    responder.innerHTML = `sua nota média final foi <strong>${total}</strong>!  A média mínima para aprovação é <strong>6 !</strong><br><br>`
    responder.innerHTML += "Você está <strong>APROVADO (a) ! </strong><br><br>"

}else if(nota1.value == '' || nota2.value == '' ||
nota3.value == '' || nota4.value == '' || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 ||
n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10){
    responder.innerHTML=""

}else{
    responder.innerHTML = `Sua nota média final foi <strong>${total}</strong>! A média mínima para aprovação é <strong> 6! </strong><br><br>`
    responder.innerHTML += `Lamento lhe informar, mas você está <strong> REPROVADO (a) ! </strong><br><br>`
    
  }
}

//ler e obter todos dados,
//nome do funcionário
//dados do select
//dados do calendário
//dados de metragem realizada

//funções a serem executadas com respectivos dados*/




//ler nome do funcionário
const lineInput = document.querySelector('#form');
const nomeFuncionario = document.querySelector('.funcionarioBsm')


lineInput.addEventListener('submit', function(event){
  event.preventDefault()
  const input = nomeFuncionario.value
    console.log(input)
})

//ler dados do select
function atualizaSelectProfissao(){
  let select = document.querySelector('#profissaoBsm');
  let optionValue= select.options[select.selectedIndex];
  let value = optionValue.value;
  let text = optionValue.text;

 
  console.log(value,text)
}
atualizaSelectProfissao()

function atualizaSelectServico(){
  let select = document.querySelector('#servicoBsm');
  let optionValue= select.options[select.selectedIndex];
  
  let value = optionValue.value;
  let text = optionValue.text;

  console.log(value,text);  
}
atualizaSelectServico()
 
/* 
function atualizaSelect(elementId1,elementId2) {
  let select = document.querySelector(elementId1, elementId2);
  let optionValue = select.options[select.selectedIndex];
  let value = optionValue.value;
  let text = optionValue.text;

  console.log(value, text);
} 

atualizaSelect('#profissaoBsm');
atualizaSelect('#servicoBsm');
 */
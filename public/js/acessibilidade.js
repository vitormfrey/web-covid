const indexText = new SpeechSynthesisUtterance();
indexText.text =  "A COVID-19 é uma doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um espectro clínico variando de infecções assintomáticas a quadros graves. De acordo com a Organização Mundial de Saúde, a maioria (cerca de 80%) dos pacientes com COVID-19 podem ser assintomáticos ou oligossintomáticos (poucos sintomas), e aproximadamente 20% dos casos detectados requer atendimento hospitalar por apresentarem dificuldade respiratória, dos quais aproximadamente 5% podem necessitar de suporte ventilatório.";
indexText.lang = "pt-BR";
indexText.rate = 1;
daltonicoMode = false;
daltonicoModeAtual = localStorage.getItem('mode')


function speak() {
    speechSynthesis.speak(indexText);
}

function stop() {
  speechSynthesis.cancel();
}
const conteudo = document.querySelector('.conteudo').classList
function daltonico() {
  document.querySelector('.conteudo').classList.toggle('daltonico');
  if(daltonicoModeAtual == 'false'){
    localStorage.setItem('mode',daltonicoMode = true)
  }else{
    localStorage.setItem('mode',daltonicoMode = false)
  }
  
 }
window.onload = initPage

function initPage() {
  
  if (daltonicoModeAtual == 'true') {
    console.log('teste')
    document.querySelector('.conteudo').classList.add('daltonico')
   }
  
}
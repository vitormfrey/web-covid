 const url = 'https://api.covid19api.com/summary'

 setInterval (() => {fetch(url)
  .then(res => res.json())
  .then(json =>{
    const casos = document.getElementById('Covid-cases')

    casos.innerHTML = json.Global.TotalConfirmed
    console.log(json.Global.TotalConfirmed)
  })}, 5000) 
  
  // const url ='https://covid19-brazil-api.now.sh/api/report/v1/brazil'
  // setInterval(()=>{
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(json =>{
  //     const casos = document.getElementById('Covid-cases')
  //     console.log(json.data.confirmed)
  //   })
  // }, 5000)

  function btRotate(){
    document.getElementById("button").classList.toggle('giro')
    
  }

  var data = new Date();

  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear()
  var hora = data.getHours();          
  var min = data.getMinutes();     
  
  // Formata a data e a hora (note o mês + 1)
  var str_data = dia + '/' + (mes+1) + '/' + ano + ' ' + hora + ':' + min;

  var inputDate = document.getElementById('inputDate').innerHTML = str_data
  

  console.log(str_data)
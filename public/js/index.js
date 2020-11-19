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
    document.getElementById("bt").classList.toggle('giro')
    
  }
  //Função do Collapse
  
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  })}
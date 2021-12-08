// window.onload = start();
// function start(){
// let boton = document.getElementById("btnestadisticas")
// boton.addEventListener('click',clickBoton);
// }

async function url(url){
let response= await fetch(url);
return response.json();
}

const clickBoton = async () =>{
  let fecha = document.getElementById('inputFecha').value;
  let json = await url("https://api.covid19api.com/summary")
  let uruguay = json.Countries["185"]
  console.log(uruguay)
  document.getElementById('NewConfirmed').innerHTML= uruguay.NewConfirmed;
  document.getElementById('TotalConfirmed').innerHTML= uruguay.TotalConfirmed;
  document.getElementById('NewDeaths').innerHTML= uruguay.NewDeaths;
  document.getElementById('TotalDeaths').innerHTML= uruguay.TotalDeaths;
}

document.getElementById('btnestadisticas').addEventListener('click', clickBoton);
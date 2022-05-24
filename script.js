const ubicacion = (objeto) => {
    console.log(objeto);
    let resultado = window.document.getElementById("button");
    console.log(resultado);
    const googlemaps=`https://www.google.cl/maps/@${objeto.coords.latitude},${objeto.coords.longitude},18z`;
    resultado.onclick=function() {abrir()};
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const abrir = async () => {window.open(googlemaps);await delay(3000);location.reload();}};
console.log(window.navigator.geolocation.getCurrentPosition(ubicacion));
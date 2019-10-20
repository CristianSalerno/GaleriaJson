var url = "https://jsonplaceholder.typicode.com/photos";
var galeriaFotos = document.querySelector('.container')
var JsonImagenes = new XMLHttpRequest();
var JsonData = new Array();

JsonImagenes.open('GET', url, true);
JsonImagenes.send();
//Evento listener del Json
JsonImagenes.addEventListener('readystatechange', cargarJson);

//Cargo el Json
function cargarJson(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        //console.log(event.target.response)
        JsonData = JSON.parse(event.target.response);

    }
}

//Display por categoria para mortales.
function displayCategoria(pJsonData, pAlbumId) {
    var filtroCategoria = new Array();

    for (foto of pJsonData) {
        if (foto.albumId === pAlbumId) {
            filtroCategoria.push(foto)
        }
    }
    return filtroCategoria;
}



//Display por categoria con filter 
function displayFilter(pJsonData, pAlbumId) {
    return pJsonData.filter(elemento => {
        return elemento.albumId === pAlbumId
    })
}


//Display imagenes.
function displayFotos(pJsonData) {
    var galeria = '';

    for (foto of pJsonData) {

        galeria += `<div class="imagenes" album-id="${foto.AlbumId} img-id="${foto.id}">
        <img src="${foto.url}" alt=""> 
        </div>`

    }
    galeriaFotos.innerHTML = galeria;
}
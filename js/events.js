var botonuno = document.querySelector('#btnuno');
botonuno.addEventListener('click', (e) => {
    displayFotos(displayFilter(JsonData, 1))
})
var botondos = document.querySelector('#btndos');
botondos.addEventListener('click', (e) => {
    displayFotos(displayFilter(JsonData, 2))
})
var botontres = document.querySelector('#btntres');
botontres.addEventListener('click', (e) => {
    displayFotos(displayFilter(JsonData, 3))
})
var botoncuatro = document.querySelector('#btncuatro');
botoncuatro.addEventListener('click', (e) => {
    displayFotos(displayFilter(JsonData, 4))
})
const vercurriculum = document.querySelector(".halt-ver-curriculum");
const listado = document.querySelector(".halt-entrenador-containter");
const haltvideo = document.querySelector(".halt-video");
const items = document.querySelector(".halt-entrenador-item")
let cont = 0;

vercurriculum.addEventListener("click",()=> {
manejoClicks()})


const mostrarCurriculum = ()=>{
    listado.style.display = "block";
    items.style.width = "100%";
    listado.style.margin = "0.75rem";
    haltvideo.style.display = "none";
    vercurriculum.innerHTML = "VER DEMOSTRACIÓN";
}

const mostrarVideo = ()=>{
    listado.style.display = "none";
    haltvideo.style.display = "block";
    vercurriculum.innerHTML = "VER MÁS LOGROS";
}

const manejoClicks = () => {
    cont += 1;
    if (cont%2!=0) {
        mostrarCurriculum();
    } else {
        mostrarVideo();
    }
}
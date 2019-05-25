const quadrado = document.querySelector('.quadrado');
const imgLuffy = document.querySelector('img');
const mostrarQuadrado = function(){
    quadrado.classList.toggle('visivel');
}
const destaqueImagem = function () {
    imgLuffy.classList.toggle('destaque');
}

quadrado.onmouseenter = mostrarQuadrado;
quadrado.onmouseout = mostrarQuadrado;

imgLuffy.onmouseenter = destaqueImagem;
imgLuffy.onmouseout = destaqueImagem;
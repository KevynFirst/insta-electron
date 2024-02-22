var elements = document.getElementsByClassName('single-line-name');
const iconSearch = document.querySelector('.search-box i');
const inputSearch = document.querySelector('.search-box input');


function removerEstiloAbas(){
    var abasSelecao = document.getElementsByClassName('single-line-name');

    for(var i = 0; i < abasSelecao.length; i++){
        abasSelecao[i].children[0].style.display = "none";
        abasSelecao[i].children[1].style.fontWeight = "normal";
    }
}

var alternarAbas = function(){
   var aba = this.getAttribute('aba');

   var element = document.getElementById(aba);

    //remover estilo da seleção de abas.
    removerEstiloAbas();


    //ocultar todas as abas.
    document.getElementById('publicacoes').style.display = "none";
    document.getElementById('salvos').style.display = "none";
    document.getElementById('marcacoes').style.display = "none";

    //Mostrar aba que estava oculta.
   element.style.display = "block";

    //Adicionar classe para troca de aba.

    this.children[0].style.display = "block";
    this.children[1].style.fontWeight = "bold";

}

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', alternarAbas,false);
}

inputSearch.addEventListener('focus',()=>{
    iconSearch.style.display = 'none';
})

inputSearch.addEventListener('blur', ()=>{
    iconSearch.style.display = 'inline-block';
})

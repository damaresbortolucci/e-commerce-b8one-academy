let quantidade_produtos = document.getElementById("cart-quantity");
let quantidade = document.getElementById("number");
let numero = 1;

function subtrair(){
    numero = numero -1;
    mostrarNatela();
}

function somar(){
    numero = numero + 1;
    mostrarNatela();
}

function mostrarNatela(){
    if(numero <= 1){
        numero =1;
        quantidade.innerHTML = numero;
    }else{
        quantidade.innerHTML = numero;
    } 
}


/* qtde e itens dentro do carrinho */
function addCart(){
    quantidade_produtos.innerHTML = numero;
    alert("Produto adicionado ao carrinho!");
}


/* seleção de cor do produto */
function colorSelected(){
    let selecionada = document.querySelector('input[type="radio"]:checked');
    let color = document.getElementById("color-selected");
    color.innerHTML = selecionada.value;
}
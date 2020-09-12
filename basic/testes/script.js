function carregar(){

    //Constantes do HTML para serem preenchidas pelos dados da questao

    const titulo = document.getElementById("titulo");
    const pergunta = document.getElementById("pergunta");
    const respostas = document.getElementById("res");
    const img = document.getElementById("imagem");
    const botao = document.getElementById("botao");

    //Variaveis da questao para serem recebidas pelo script
    let imagem = '';
    let texto = "";
    let alternativas = {};

    //Aquisição dos valores das variaveis essenciais


    texto = "Veja a figura abaixo e marque a alternativa que representa a imagem formada pelos objetos (letra N e relógio) quando colocado diante de um espelho plano.";
    imagem = 'quest.jpg';

    let aux = ["https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-a.jpg", 
                "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-b.jpg",
                "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-c.jpg",
                "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-d.jpg",
                "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-e.jpg"];

    for (let i = 0; i < 5; i++){
        let c = "a" + i;
        alternativas[c] = aux[i];
    }


    // condições da preparação da tela

    if(imagem === "" && texto === ""){
        alert('Nenhuma questão foi recebida');
    }


    // aquisição dos dados

    titulo.innerHTML = "Questão 1";
    pergunta.innerText = texto;
    

    if(imagem != ""){
        img.style.visibility = "visible";
        img.src = imagem;
    }

    for(let alt in alternativas){

        let divnova = document.createElement("div");
        divnova.class = "R";


        let check = document.createElement("input");
        check.type = "radio";
        check.name = "alternativas";
        check.id = "c" + alt;

        divnova.appendChild(check);
        let resp
        if(alternativas[alt].substring(0,4) === "http"){
            titulo.innerHTML = "Questão 2";
            resp = document.createElement("img");
            resp.id = alt;
            resp.src = alternativas[alt];

        }else{
            resp = document.createElement("label");
            resp.innerText = alternativas[alt];
            resp.for = "c" + alt;
            resp.id = alt;
        }

        divnova.appendChild(resp);

        respostas.insertBefore(divnova, botao);
    }
    


    //resp1.innerHTML = <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-a.jpg"/> 
    //img.style.display = "hidden";

}

function resposta(){
    let npertou = true;
    for(let i = 0; i < 100; i++){
        let d = document.getElementById("ca"+i);
        if(d.checked){
            if(i == 2){alert("acertou");}
            else{alert("errou")}
            npertou = false;
        }
    }
    if(npertou){alert("nenhuma opção selecionada!")}
    
}




/*


<input type="radio" name="r5" id="r5">
<label for="r5" id="l5"></label></div>
<img class="imagem" id="i5" alt="resposta5"></br>



["https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-a.jpg", 
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-b.jpg",
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-c.jpg",
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-d.jpg",
"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-e.jpg"]

a - https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-a.jpg

b- https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-b.jpg

c - https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-c.jpg

d - https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-d.jpg

e - https://s1.static.brasilescola.uol.com.br/be/conteudo/images/questao-3-e.jpg






<div class="R">
            <input type="radio" name="r1" id="r1">
            <label for="r1" id="l1"></label>
            <img class="imagem" id="i1" alt="resposta1"></br>
        </div>

        <div class="R">
            <input type="radio" name="r2" id="r2">
            <label for="r2" id="l2"></label>
            <img class="imagem" id="i2" alt="resposta2"></br>
        </div>
            
        <div class="R">
            <input type="radio" name="r3" id="r3">
            <label for="r3" id="l3"></label>
            <img class="imagem" id="i3" alt="resposta3"></br>
        </div>
            
        <div class="R">
            <input type="radio" name="r4" id="r4">
            <label for="r4" id="l4"></label>
            <img class="imagem" id="i4" alt="resposta4"></br>
        </div>
            
        <div class="R">
            <input type="radio" name="r5" id="r5">
            <label for="r5" id="l5"></label></div>
            <img class="imagem" id="i5" alt="resposta5"></br>




*/
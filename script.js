function sum() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);


    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    var imagem = document.createElement("img");
    imagem.className = "img"
    document.getElementById("imagem").appendChild(imagem)

    var paragrafo = document.getElementById("media");
    paragrafo.innerHTML = "Sua média é: " + media;
    var resposta = document.getElementById("resposta");

    if(media >= 7) {
        resposta.innerHTML = "Você foi aprovado!!!"
        imagem.src = "https://institutokailua.com/blog/wp-content/uploads/2018/02/z2-2.jpg";
    }else {
        resposta.innerHTML = "Infelizmente você foi reprovado!";
        imagem.src = "https://i.pinimg.com/474x/5c/88/3f/5c883f50ae0548117487936ce49a68ab.jpg";
    }
}
function adicionarcarrinho1(){
    var nome = document.getElementById('button-name1').name;
    var quantidade = document.getElementById('quantidadeprimeiro').value;
    var valor = document.getElementById('tamanhoprimeiro').value;

    alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
    console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
}

function adicionarcarrinho2(){
    var nome = document.getElementById('button-name2').name;
    var quantidade = document.getElementById('quantidadesegundo').value;
    var valor = document.getElementById('tamanhosegundo').value;

    alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
    console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
}

function adicionarcarrinho3(){
    var nome = document.getElementById('button-name3').name;
    var quantidade = document.getElementById('quantidadeterceiro').value;
    var valor = document.getElementById('tamanhoterceiro').value;

    alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
    console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
}

function adicionarcarrinho4(){
    var nome = document.getElementById('button-name4').name;
    var quantidade = document.getElementById('quantidadequarto').value;
    var valor = document.getElementById('tamanhoquarto').value;

    alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
    console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
}

function precototalquantidade1(){
    //1 lanche
    var tamanhol = document.getElementById('tamanhoprimeiro').value;
    var quantidade1 = document.getElementById('quantidadeprimeiro').value;
    
    var total1 = tamanhol * quantidade1;

    document.getElementById('totalprimeiro').value = total1.toFixed(2);
    console.log(total1)

}

function precototalquantidade2(){
    //2 lanche
    var tamanho2 = document.getElementById('tamanhosegundo').value;
    var quantidade2 = document.getElementById('quantidadesegundo').value;

    var total2 = tamanho2 * quantidade2;

    document.getElementById('totalsegundo').value = total2.toFixed(2);
    console.log(total2)
}

function precototalquantidade3(){
    //3 lanche
    var valortamanho3 = document.getElementById('tamanhoterceiro').value;
    var quantidade3 = document.getElementById('quantidadeterceiro').value;

    var total3 = valortamanho3 * quantidade3;

    document.getElementById('totalterceiro').value = total3.toFixed(2);
    console.log(total3)
}

function precototalquantidade4(){
    //4 lanche
    var tamanho4 = document.getElementById('tamanhoquarto').value;
    var quantidade4 = document.getElementById('quantidadequarto').value;

    var total4 = tamanho4 * quantidade4;

    document.getElementById('totalquarto').value = total4.toFixed(2);
    console.log(total4)
}
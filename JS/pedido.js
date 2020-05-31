function adicionarcarrinho(){
    return alert('EM CONSTRUÇÃO')
}

function precototalquantidade1(){
    //1 lanche
    var tamanhol = document.getElementById('tamanhoprimeiro').value;
    var quantidade1 = document.getElementById('quantidadeprimeiro').value;

    var total1 = tamanhol * quantidade1;

    document.getElementById('totalprimeiro').value = total1;
    console.log(total1)
}

function precototalquantidade2(){
    //2 lanche
    var tamanho2 = document.getElementById('tamanhosegundo').value;
    var quantidade2 = document.getElementById('quantidadesegundo').value;

    var total2 = tamanho2 * quantidade2;

    document.getElementById('totalsegundo').value = total2;
    console.log(total2)
}

function precototalquantidade3(){
    //3 lanche
    var valortamanho3 = document.getElementById('tamanhoterceiro').value;
    var quantidade3 = document.getElementById('quantidadeterceiro').value;

    var total3 = valortamanho3 * quantidade3;

    document.getElementById('totalterceiro').value = total3;
    console.log(total3)
}

function precototalquantidade4(){
    //4 lanche
    var tamanho4 = document.getElementById('tamanhoquarto').value;
    var quantidade4 = document.getElementById('quantidadequarto').value;

    var total4 = tamanho4 * quantidade4;

    document.getElementById('totalquarto').value = total4;
    console.log(total4)
}
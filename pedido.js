"use strict";
var pedido1 = [0,0,0];
var pedido2 = [0,0,0];
var pedido3 = [0,0,0];
var pedido4 = [0,0,0];
var total = 0;

function Reiniciar(){
    total = 0;
    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total

    document.getElementById("00").innerText = (""); 
    document.getElementById("01").innerText = ("");
    document.getElementById("02").innerText = ("");
    document.getElementById("10").innerText = ("");
    document.getElementById("11").innerText = ("");
    document.getElementById("12").innerText = ("");
    document.getElementById("20").innerText = ("");
    document.getElementById("21").innerText = ("");
    document.getElementById("22").innerText = ("");
    document.getElementById("30").innerText = ("");
    document.getElementById("31").innerText = ("");
    document.getElementById("32").innerText = ("");
    pedido1 = [0,0,0];
    pedido2 = [0,0,0];
    pedido3 = [0,0,0];
    pedido4 = [0,0,0];

    console.log(pedido1);
    console.log(pedido2);
    console.log(pedido3);
    console.log(pedido4);
    console.log(pedidos);
}
//RESETA O VALOR DO FORMULARIO
function reset(){
    document.getElementById("reset-form").reset();
}
// ADICIONA AO CARRINHO E FAZ O ALERT, ADICIONA O VALOR TOTAL E A DESCRIÇÃO DO PEDIDO NO CARRINHO
function adicionarcarrinho(id){
    // VARIAVEIS DO LANCHE GORDOBACON - LANCHE 1
    var nome1 = document.getElementById('gordobacon').name;
    var quantidade1 = parseInt(document.getElementById('quantidadeprimeiro').value);
    var valor1 = parseFloat(document.getElementById('tamanhoprimeiro').value);
    var preco1lanche1 = valor1 * quantidade1;
    var preco2lanche1 = valor1 * quantidade1;
    var preco3lanche1 = valor1 * quantidade1;
    // TERMINA VARIAVEIS DO LANCHE GORDOBACON  - LANCHE 1

    // VARIAVEIS DO LANCHE GORDODIETA  - LANCHE 2
    var nome2 = document.getElementById('gordodieta').name;
    var quantidade2 = parseInt(document.getElementById('quantidadesegundo').value);
    var valor2 = parseFloat(document.getElementById('tamanhosegundo').value);
    var preco1lanche2 = valor2 * quantidade2;
    var preco2lanche2 = valor2 * quantidade2;
    var preco3lanche2 = valor2 * quantidade2;
    // TERMINA VARIAVEIS DO LANCHE GORDODIETA  - LANCHE 2

    // VARIAVEIS DO LANCHE GORDUCHAO  - LANCHE 3
    var nome3 = document.getElementById('gorduchao').name;
    var quantidade3 = parseInt(document.getElementById('quantidadeterceiro').value);
    var valor3 = parseFloat(document.getElementById('tamanhoterceiro').value);
    var preco1lanche3 = valor3 * quantidade3;
    var preco2lanche3 = valor3 * quantidade3;
    var preco3lanche3 = valor3 * quantidade3;
    // TERMINA VARIAVEIS DO LANCHE GORDUCHAO  - LANCHE 3

    // VARIAVEIS DO LANCHE DODIA  - LANCHE 4
    var nome4 = document.getElementById('dodia').name;
    var quantidade4 = parseInt(document.getElementById('quantidadequarto').value);
    var valor4 = parseFloat(document.getElementById('tamanhoquarto').value);
    var preco1lanche4 = valor4 * quantidade4;
    var preco2lanche4 = valor4 * quantidade4;
    var preco3lanche4 = valor4 * quantidade4;
    // TERMINA VARIAVEIS DO LANCHE DODIA  - LANCHE 4

    switch (id) {
        case 'gordobacon':
            if (quantidade1 > 0 && valor1 > 0) {

                alert("Você adicionou: " +quantidade1+ "x " +nome1+ " - " +valor1+ "R$");

                if (valor1==14.90){
                    total = preco1lanche1 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido1 [0] = quantidade1 + pedido1[0];
                    document.getElementById("00").innerText = (pedido1 [0]+ "X " +nome1+ " Simples"); //Atualiza a quantidade do pedido
                    
                }

                else if (valor1==17.00){
                    total = preco2lanche1 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));   //Atualiza o Valor total
                    pedido1 [1] = quantidade1 + pedido1[1];
                    document.getElementById("01").innerText = (pedido1 [1]+ "X " +nome1+ " Duplo"); //Atualiza a quantidade do pedido
                    
                }

                else if (valor1==23.00){
                    total = preco3lanche1 + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));   //Atualiza o Valor total
                    pedido1 [2] = quantidade1 + pedido1[2];
                    document.getElementById("02").innerText = (pedido1 [2]+ "X " +nome1+ " Triplo"); //Atualiza a quantidade do pedido
                    
                }
                reset();
            }
            else{
                alert("Você não selecionou a quantidade maior que zero ou tamanho do lache");
                break;
            }

            break;

    
        case 'gordodieta':
           if (quantidade2 > 0 && valor2 > 0) {

                alert("Você adicionou: " +quantidade2+ "x " +nome2+ " - " +valor2+ "R$");

                if (valor2==14.90){
                    total = preco1lanche2 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido2 [0] = quantidade2 + pedido2[0];
                    document.getElementById("10").innerText = (pedido2 [0]+ "X " +nome2+ " Simples"); //Atualiza a quantidade do pedido
                }

                else if (valor2==17.00){
                    total = preco2lanche2 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));//Atualiza o Valor total
                    pedido2 [1] = quantidade2 + pedido2[1];
                    document.getElementById("11").innerText = (pedido2 [1]+ "X " +nome2+ " Duplo"); //Atualiza a quantidade do pedido
                }

                else if (valor2==23.00){
                    total = preco3lanche2 + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));//Atualiza o Valor total
                    pedido2 [2] = quantidade2 + pedido2[2];
                    document.getElementById("12").innerText = (pedido2 [2]+ "X " +nome2+ " Triplo"); //Atualiza a quantidade do pedido
                }
                reset();
            }
            else{
                alert("Você não selecionou a quantidade maior que zero");
                break;
            }
            break;
            

        case 'gorduchao':
           if (quantidade3 > 0 && valor3 > 0) {

                alert("Você adicionou: " +quantidade3+ "x " +nome3+ " - " +valor3+ "R$");

                if (valor3==14.90){
                    total = preco1lanche3 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido3 [0] = quantidade3 + pedido3[0];
                    document.getElementById("20").innerText = (pedido3 [0]+ "X " +nome3+ " Simples"); //Atualiza a quantidade do pedido
                }

                else if (valor3==17.00){
                    total = preco2lanche3 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));//Atualiza o Valor total
                    pedido3 [1] = quantidade3 + pedido3[1];
                    document.getElementById("21").innerText = (pedido3 [1]+ "X " +nome3+ " Duplo"); //Atualiza a quantidade do pedido
                }

                else if (valor3==23.00){
                    total = preco3lanche3 + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));//Atualiza o Valor total
                    pedido3 [2] = quantidade3 + pedido3[2];
                    document.getElementById("22").innerText = (pedido3 [2]+ "X " +nome3+ " Triplo"); //Atualiza a quantidade do pedido
                }
                reset();
            }
            else{
                alert("Você não selecionou a quantidade maior que zero");
                break;
            }
            break;
    
        case 'dodia':
            if (quantidade4 > 0 && valor4 > 0) {

                alert("Você adicionou: " +quantidade4+ "x " +nome4+ " - " +valor4+ "R$");

                if (valor4==14.90){
                    total = preco1lanche4 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido4 [0] = quantidade4 + pedido4[0];
                    document.getElementById("30").innerText = (pedido4 [0]+ "X " +nome4+ " Simples"); //Atualiza a quantidade do pedido
                }

                else if (valor4==17.00){
                    total = preco2lanche4 + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));//Atualiza o Valor total
                    pedido4 [1] = quantidade4 + pedido4[1];
                    document.getElementById("31").innerText = (pedido4 [1]+ "X " +nome4+ " Duplo"); //Atualiza a quantidade do pedido
                }

                else if (valor4==23.00){
                    total = preco3lanche4 + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));//Atualiza o Valor total
                    pedido4 [2] = quantidade4 + pedido4[2];
                    document.getElementById("32").innerText = (pedido4 [2]+ "X " +nome4+ " Triplo"); //Atualiza a quantidade do pedido
                }
                reset();
            }
            else{
                alert("Você não selecionou a quantidade maior que zero");
                break;
            }
            break;

        default:
            break;
    }
    
}
//FIM DO CARRINHO
function somarvalor(name){
    // VARIAVEIS SOMAR VALOR - LANCHE 1
    var tamanhol = document.getElementById('tamanhoprimeiro').value;
    var quantidade1 = document.getElementById('quantidadeprimeiro').value;
    var total1 = tamanhol * quantidade1;
    // TERMINA VARIAVEIS SOMAR VALOR - LANCHE 1

    // VARIAVEIS SOMAR VALOR - LANCHE 2
    var tamanho2 = document.getElementById('tamanhosegundo').value;
    var quantidade2 = document.getElementById('quantidadesegundo').value;
    var total2 = tamanho2 * quantidade2;
    // TERMINA VARIAVEIS SOMAR VALOR - LANCHE 2

    // VARIAVEIS SOMAR VALOR - LANCHE 3
    var valortamanho3 = document.getElementById('tamanhoterceiro').value;
    var quantidade3 = document.getElementById('quantidadeterceiro').value;
    var total3 = valortamanho3 * quantidade3;
    // TERMINA VARIAVEIS SOMAR VALOR - LANCHE 3

    // VARIAVEIS SOMAR VALOR - LANCHE 4
    var tamanho4 = document.getElementById('tamanhoquarto').value;
    var quantidade4 = document.getElementById('quantidadequarto').value;
    var total4 = tamanho4 * quantidade4;
    // TERMINA VARIAVEIS SOMAR VALOR - LANCHE 4


    "use strict";
    console.log(name);
    switch (name) {
        case 'onelanche':
            document.getElementById('totalprimeiro').value = total1.toFixed(2);
            console.log(total1);
            break;
    
        case 'twolanche':
            document.getElementById('totalsegundo').value = total2.toFixed(2);
            console.log(total2);
            break;

        case 'trilanche':
            document.getElementById('totalterceiro').value = total3.toFixed(2);
            console.log(total3);
            break;

        case 'fourlanche':
            document.getElementById('totalquarto').value = total4.toFixed(2);
            console.log(total4);
            break;

    }
}
//BOTAO DE FINALIZAR
function Finalizar (id) {
    // VARIAVEL DA FUNÇÃO FINALIZAR
    var list = document.getElementById('pedidos').innerText;
    // FIM VARIAVEL DA FUNÇÃO FINALIZAR

    if (total < 1) {
        alert ('Seu carrinho está vazio');
    }
    else{
        alert (`${list} \n\nSeu total: ${total.toFixed(2)}`); 
        Reiniciar();
    }
}

"use strict";
var pedido1 = [0,0,0];
var pedido2 = [0,0,0];
var pedido3 = [0,0,0];
var pedido4 = [0,0,0];
var total = 0;

function Reiniciar(){
    total = 0
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

function reset(){
    document.getElementById("reset-form").reset();
}

function adicionarcarrinho(id){
    switch (id) {
        case 'gordobacon':

            var nome = document.getElementById('gordobacon').name;
            var quantidade1 = parseInt(document.getElementById('quantidadeprimeiro').value);
            var valor1 = parseFloat(document.getElementById('tamanhoprimeiro').value);

            if (quantidade1 > 0 & valor1 > 0) {

                alert("Você adicionou: " +quantidade1+ "x " +nome+ " - " +valor1+ "R$")

                if (valor1==14.90){
                    var preço = valor1 * quantidade1;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido1 [0] = quantidade1 + pedido1[0];
                    document.getElementById("00").innerText = (pedido1 [0]+ "X " +nome+ " Simples") //Atualiza a quantidade do pedido
                    
                }

                else if (valor1==17.00){
                    var preço = valor1 * quantidade1;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido1 [1] = quantidade1 + pedido1[1];
                    document.getElementById("01").innerText = (pedido1 [1]+ "X " +nome+ " Duplo") //Atualiza a quantidade do pedido
                    
                }

                else if (valor1==23.00){
                    var preço = valor1 * quantidade1;
                    total = preço + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido1 [2] = quantidade1 + pedido1[2];
                    document.getElementById("02").innerText = (pedido1 [2]+ "X " +nome+ " Triplo") //Atualiza a quantidade do pedido
                    
                }
                reset()
            }
            else{
                alert("Você não selecionou a quantidade maior que zero ou tamanho do lache")
                break;
            }

            break;

    
        case 'gordodieta':

            var nome = document.getElementById('gordodieta').name;
            var quantidade2 = parseInt(document.getElementById('quantidadesegundo').value);
            var valor2 = parseFloat(document.getElementById('tamanhosegundo').value);

           if (quantidade2 > 0 & valor2 > 0) {

                alert("Você adicionou: " +quantidade2+ "x " +nome+ " - " +valor2+ "R$")

                if (valor2==14.90){
                    var preço = valor2 * quantidade2;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido2 [0] = quantidade2 + pedido2[0];
                    document.getElementById("10").innerText = (pedido2 [0]+ "X " +nome+ " Simples") //Atualiza a quantidade do pedido
                }

                else if (valor2==17.00){
                    var preço = valor2 * quantidade2;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido2 [1] = quantidade2 + pedido2[1];
                    document.getElementById("11").innerText = (pedido2 [1]+ "X " +nome+ " Duplo") //Atualiza a quantidade do pedido
                }

                else if (valor2==23.00){
                    var preço = valor2 * quantidade2;
                    total = preço + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido2 [2] = quantidade2 + pedido2[2];
                    document.getElementById("12").innerText = (pedido2 [2]+ "X " +nome+ " Triplo") //Atualiza a quantidade do pedido
                }
                reset()
            }
            else{
                alert("Você não selecionou a quantidade maior que zero")
                break;
            }
            break;
            

        case 'gorduchao':
            
            var nome = document.getElementById('gorduchao').name;
            var quantidade3 = parseInt(document.getElementById('quantidadeterceiro').value);
            var valor3 = parseFloat(document.getElementById('tamanhoterceiro').value);

           if (quantidade3 > 0 & valor3 > 0) {

                alert("Você adicionou: " +quantidade3+ "x " +nome+ " - " +valor3+ "R$")

                if (valor3==14.90){
                    var preço = valor3 * quantidade3;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido3 [0] = quantidade3 + pedido3[0];
                    document.getElementById("20").innerText = (pedido3 [0]+ "X " +nome+ " Simples") //Atualiza a quantidade do pedido
                }

                else if (valor3==17.00){
                    var preço = valor3 * quantidade3;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido3 [1] = quantidade3 + pedido3[1];
                    document.getElementById("21").innerText = (pedido3 [1]+ "X " +nome+ " Duplo") //Atualiza a quantidade do pedido
                }

                else if (valor3==23.00){
                    var preço = valor3 * quantidade3;
                    total = preço + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido3 [2] = quantidade3 + pedido3[2];
                    document.getElementById("22").innerText = (pedido3 [2]+ "X " +nome+ " Triplo") //Atualiza a quantidade do pedido
                }
                reset()
            }
            else{
                alert("Você não selecionou a quantidade maior que zero")
                break;
            }
            break;
    
        case 'dodia':
            var nome = document.getElementById('dodia').name;
            var quantidade4 = parseInt(document.getElementById('quantidadequarto').value);
            var valor4 = parseFloat(document.getElementById('tamanhoquarto').value);

            if (quantidade4 > 0 & valor4 > 0) {

                alert("Você adicionou: " +quantidade4+ "x " +nome+ " - " +valor4+ "R$")

                if (valor4==14.90){
                    var preço = valor4 * quantidade4;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido4 [0] = quantidade4 + pedido4[0];
                    document.getElementById("30").innerText = (pedido4 [0]+ "X " +nome+ " Simples") //Atualiza a quantidade do pedido
                }

                else if (valor4==17.00){
                    var preço = valor4 * quantidade4;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido4 [1] = quantidade4 + pedido4[1];
                    document.getElementById("31").innerText = (pedido4 [1]+ "X " +nome+ " Duplo") //Atualiza a quantidade do pedido
                }

                else if (valor4==23.00){
                    var preço = valor4 * quantidade4;
                    total = preço + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido4 [2] = quantidade4 + pedido4[2];
                    document.getElementById("32").innerText = (pedido4 [2]+ "X " +nome+ " Triplo") //Atualiza a quantidade do pedido
                }
                reset()
            }
            else{
                alert("Você não selecionou a quantidade maior que zero")
                break;
            }
            break;

        default:
            break;
    }
    
}
//FIM DO CARRINHO
function somarvalor(name){
    "use strict";
    console.log(name)
    switch (name) {
        case 'onelanche':
            //1 lanche
            var tamanhol = document.getElementById('tamanhoprimeiro').value;
            var quantidade1 = document.getElementById('quantidadeprimeiro').value;
            
            var total1 = tamanhol * quantidade1;

            document.getElementById('totalprimeiro').value = total1.toFixed(2);
            console.log(total1)
            break;
    
        case 'twolanche':
            //2 lanche
            var tamanho2 = document.getElementById('tamanhosegundo').value;
            var quantidade2 = document.getElementById('quantidadesegundo').value;

            var total2 = tamanho2 * quantidade2;

            document.getElementById('totalsegundo').value = total2.toFixed(2);
            console.log(total2)
            break;

        case 'trilanche':
            //3 lanche
            var valortamanho3 = document.getElementById('tamanhoterceiro').value;
            var quantidade3 = document.getElementById('quantidadeterceiro').value;

            var total3 = valortamanho3 * quantidade3;

            document.getElementById('totalterceiro').value = total3.toFixed(2);
            console.log(total3)
            break;

        case 'fourlanche':
            //4 lanche
            var tamanho4 = document.getElementById('tamanhoquarto').value;
            var quantidade4 = document.getElementById('quantidadequarto').value;

            var total4 = tamanho4 * quantidade4;

            document.getElementById('totalquarto').value = total4.toFixed(2);
            console.log(total4)
            break;

    }
}

function Finalizar (id) {
    //var list = document.getElementsByClassName("lanche")[i].innerText;
    var list = document.getElementById('pedidos').innerText;

    
    //onsole.log(childDivs)
    if (total < 1) {
        alert ('Seu carrinho está vazio');
        
        //console.log(teste)

    }
    else{
        alert (`${list} \n\nSeu total: ${total.toFixed(2)}`); 
        Reiniciar()
    }
}

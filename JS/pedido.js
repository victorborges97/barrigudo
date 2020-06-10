var pedido1 = [0,0,0];
var pedido2 = [0,0,0];
var pedido3 = [0,0,0];
var pedido4 = [0,0,0];
var total = 0;

function adicionarcarrinho(id){
    "use strict";
    switch (id) {
        case 'gordobacon':
            console.log("Entrou no Gordobacon")

            var nome = document.getElementById('gordobacon').name;
            var quantidade = parseInt(document.getElementById('quantidadeprimeiro').value);
            var valor = parseFloat(document.getElementById('tamanhoprimeiro').value);

              if (quantidade > 0 & valor > 0) {

                alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
                console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")

                if (valor==14.90){
                    var preço = valor * quantidade;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2)); //Atualiza o Valor total
                    pedido1 [0] = quantidade + pedido1[0];
                    document.getElementById("00").innerText = (pedido1 [0]+ "X " +nome+ " Simples") //Atualiza a quantidade do pedido
                }

                else if (valor==17.00){
                    var preço = valor * quantidade;
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido1 [1] = quantidade + pedido1[1];
                    document.getElementById("01").innerText = (pedido1 [1]+ "X " +nome+ " Duplo") //Atualiza a quantidade do pedido
                }

                else if (valor==23.00){
                    var preço = valor * quantidade;
                    total = preço + total;  
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                    pedido1 [2] = quantidade + pedido1[2];
                    document.getElementById("02").innerText = (pedido1 [2]+ "X " +nome+ " Triplo") //Atualiza a quantidade do pedido
                }

            }
            else{
                alert("Você não selecionou a quantidade maior que zero ou tamanho do lache")
                break;
            }
                        
            //var node = document.createElement("p");
            //var textnode = document.createTextNode(retornocarrinho);
            //node.appendChild(textnode);
            //document.getElementById("pedidos").appendChild(node)
            break;

    
        case 'gordodieta':
            console.log("Entrou no Gordodieta")
            var nome = document.getElementById('gordodieta').name;
            var quantidade = document.getElementById('quantidadesegundo').value;
            var valor = document.getElementById('tamanhosegundo').value;

            if (quantidade > 0 & valor > 0) {

                alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
                console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")

                var pedidos = document.getElementById("pedidos").innerText;

                if (valor==14.90){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Simples");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

                else if (valor==17.00){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Duplo");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

                else if (valor==23.00){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Triplo");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

            }
            else{
                alert("Você não selecionou a quantidade maior que zero")
                console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
                break;
            }
                        
            var node = document.createElement("p");
            var textnode = document.createTextNode(retornocarrinho);
            node.appendChild(textnode);
            document.getElementById("pedidos").appendChild(node);
            break;
            

        case 'gorduchao':
            console.log("Entrou no gorduchao")
            var nome = document.getElementById('gorduchao').name;
            var quantidade = document.getElementById('quantidadeterceiro').value;
            var valor = document.getElementById('tamanhoterceiro').value;
        
            if (quantidade > 0 & valor > 0) {

                alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
                console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")

                var pedidos = document.getElementById("pedidos").innerText;

                if (valor==14.90){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Simples");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

                else if (valor==17.00){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Duplo");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

                else if (valor==23.00){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Triplo");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

            }
            else{
                alert("Você não selecionou a quantidade maior que zero")
                console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
                break;
            }
                        
            var node = document.createElement("p");
            var textnode = document.createTextNode(retornocarrinho);
            node.appendChild(textnode);
            document.getElementById("pedidos").appendChild(node);
            break;
    
        case 'dodia':
            console.log("Entrou no dodia")
            var nome = document.getElementById('dodia').name;
            var quantidade = document.getElementById('quantidadequarto').value;
            var valor = document.getElementById('tamanhoquarto').value;
        
            if (quantidade > 0 & valor > 0) {

                alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
                console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")

                var pedidos = document.getElementById("pedidos").innerText;

                if (valor==14.90){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Simples");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

                else if (valor==17.00){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Duplo");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

                else if (valor==23.00){
                    var retornocarrinho = (quantidade+ "x " +nome+ " Triplo");
                    var preço = parseFloat(valor * quantidade);
                    total = preço + total;
                    document.getElementById("valortotal").innerText = ("TOTAL: " + total.toFixed(2));
                }

            }
            else{
                alert("Você não selecionou a quantidade maior que zero")
                console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
                break;
            }
                        
            var node = document.createElement("p");
            var textnode = document.createTextNode(retornocarrinho);
            node.appendChild(textnode);
            document.getElementById("pedidos").appendChild(node);
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
    if (total < 1) {
        alert ('Seu carrinho está vazio')
    }
    else
        alert (total); 
}
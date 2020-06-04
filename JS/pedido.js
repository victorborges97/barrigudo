function adicionarcarrinho(id){
    switch (id) {
        case 'gordobacon':
            console.log("Entrou no Gordobacon")

            var nome = document.getElementById('gordobacon').name;
            var quantidade = document.getElementById('quantidadeprimeiro').value;
            var valor = document.getElementById('tamanhoprimeiro').value;

            alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
            console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")

            var pedidos = document.getElementById("pedidos").innerText;
            
            var retornocarrinho = (quantidade+ "x " +nome)
            var node = document.createElement("p");
            var textnode = document.createTextNode(retornocarrinho);
            node.appendChild(textnode);
            document.getElementById("pedidos").appendChild(node);
            break;
    
        case 'gordodieta':
            console.log("Entrou no Gordodieta")
            var nome = document.getElementById('gordodieta').name;
            var quantidade = document.getElementById('quantidadesegundo').value;
            var valor = document.getElementById('tamanhosegundo').value;

            alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
            console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
            break;

        case 'gorduchao':
            console.log("Entrou no gorduchao")
            var nome = document.getElementById('gorduchao').name;
            var quantidade = document.getElementById('quantidadeterceiro').value;
            var valor = document.getElementById('tamanhoterceiro').value;
        
            alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
            console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
        break;

        case 'dodia':
            console.log("Entrou no dodia")
            var nome = document.getElementById('dodia').name;
            var quantidade = document.getElementById('quantidadequarto').value;
            var valor = document.getElementById('tamanhoquarto').value;
        
            alert("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
            console.log("Você adicionou: " +quantidade+ "x " +nome+ " - " +valor+ "R$")
        break;
    }
    
}

function somarvalor(name){
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
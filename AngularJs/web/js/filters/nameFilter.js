//este filtro serve para colocar a primeira letra do nome em mainuscula e o resto em minuscula
//o if na 7º linha é uma expressão regular em javascrip para verifica se a palavra DA ou DE existe no nome completo
modulo.filter("name", function() {
    return function (input){
        var listaDeNomes = input.split(" ");
        var listalistaDeNomesFormatada = listaDeNomes.map(function (nome){
            if(/(da|de)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
//        console.log(listalistaDeNomesFormatada.join(" "));//o join serve para colocar alguma coisa na lista/array neste caso ele vai colocar um espaço
                                                          //em branco entre as palavras.
        return(listalistaDeNomesFormatada.join(" "));
    };
});

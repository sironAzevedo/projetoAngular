modulo.directive("uiAlert", function (){
    return {
        templateUrl:"view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            title: "@" //porque o @. se o nome da diretiva e o nome do atibuto for iguais pode colocar o @
//            message: "="//porque o =. se o nome da diretiva e o nome do atibuto for iguais pode colocar o =, é apenas uma segunda opção de mostra o erro
                        //a diferença é que com esse metodo faz um vinculo biderecional, para entender melhor assistir a aula 10 no tempo 22:05
            
        },
        transclude: true
    };
});



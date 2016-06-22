//angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope) - sem AJAX
		modulo.controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI){ //com AJAX
			$scope.titulo = "Lista Telefônica"; 
                        /*
			$scope.operadoras = [
				{nome: "Oi", codigo: "31", categoria: "Celular",  preco: 2},
				{nome: "Vivo", codigo: "15", categoria: "Celular",  preco: 1},
				{nome: "Tim", codigo: "41", categoria: "Celular",  preco: 3},
				{nome: "GVT", codigo: "25", categoria: "Fixo",  preco: 1},
				{nome: "Embratel", codigo: "21", categoria: "Fixo",  preco: 2}
			];

			$scope.contatos = [
				{nome: "Pedro", telefone: "986854787", data: new Date(), operadora: {nome: "Oi", codigo: "31", categoria: "Celular"}},
				{nome: "Ana", telefone: "985845752", data: new Date(), operadora: {nome: "Vivo", codigo: "15", categoria: "Celular"}},
				{nome: "Maria", telefone: "986528745", data: new Date(), operadora: {nome: "Tim", codigo: "41", categoria: "Celular"}}

			];

			$scope.adicionarContato = function(contato){
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;

				//este comando serve para tonar o campo virgem novamente para a validação
				$scope.contatoForm.$setPristine();
			}; */

			//-------iniciando aula 6 - Integrando com o back-end por AJAX-----------
			
			$scope.contatos = []; 
			$scope.operadoras = [];

			var carregarContatos = function (){
				contatosAPI.getContatos().success(function(data, status){
					$scope.contatos = data;
				}).error(function(data, status){
					$scope.message = "Aconteceu um problema: " + data;
				});
			};

			var carregarOperadoras = function (){
				operadorasAPI.getOperadoras().success(function(data, status){
					$scope.operadoras = data;
				}).error(function(data, status){
					$scope.message = "Aconteceu um problema: " + data;
				});
			}; 

			$scope.adicionarContato = function (contato) {
                                contato.serial = serialGenerator.generate();
                                contato.data = new Date();
                                contatosAPI.saveContato(contato).success(function (data) {
                                    delete $scope.contato;
                                    $scope.contatoForm.$setPristine();
                                    carregarContatos();
                                });
                        };

			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if (!contato.selecionado) return contato;
				});
			};

			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				}); 
			};

			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};

			carregarContatos();
			carregarOperadoras();

		});
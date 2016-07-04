modulo.directive("uiTelefone", function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            var _formatTelefone = function (telefone) {

                //(99)9999-9999 - 13dig
                //(99)99999-9999 - 14dig
                telefone = telefone.replace(/[^0-9]+/g, "");
                if (telefone.length > 0) {
                    telefone = telefone.substring(-1, 0) + "(" + telefone.substring(0);
                }
                if (telefone.length > 3) {
                    telefone = telefone.substring(0, 3) + ")" + telefone.substring(3);
                }
                if (telefone.length == 12) {
                    telefone = telefone.substring(0, 8) + "-" + telefone.substring(8);
                } else if (telefone.length >= 13) {
                    telefone = telefone.substring(0, 9) + "-" + telefone.substring(9, 13);
                }

                return telefone;
            }

            element.bind('keyup', function () {
                ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
                ctrl.$render();
            });

        }
    };
});



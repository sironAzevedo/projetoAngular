# EstudoMaterial

Essa aplicação estar sendo realizada para estudar o angularJs 2/4 e o Material Design

#Criando o projeto
ng new estudo-material

#Criando componentes dentro da pasta \src\app\shered\components
ng g c DialogMensage
ng g c SnackBarComponent

#Setando no arquivo de configuração para o angular criar arquivos scss
ng set defaults.styleExt scss

No arquivo .angular-cli.json
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.css",
    "styles.scss"
],

mudar o type do arquivo styles.css para styles.scss

## Install LIBs
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save hammerjs
npm install --save bootstrap@4.0.0-beta


#Adicionar no arquivo styles.scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

#Adicionar no arquivo index.html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

#Criar um novo modulo dentro da pasta \src\app\shered\
shared.module.ts

#criar e Importar todas as libs do material para dentro do modulo
\src\app\+shered\angular.module.ts

OBS: importar esse modulo para o modulo shared.module.ts, conform o exemplo

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [ 
        TextLengthPipe,
        MaterialModule
    ],
    declarations: [
        TextLengthPipe,
        SnackBarComponentComponent        
    ],
    entryComponents: [],
})


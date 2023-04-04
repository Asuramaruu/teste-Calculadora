const funcoes = require("./index")

function testarFuncao(nomeFuncao,cenario,valorEsperado,valorResultado){
    if(valorEsperado===valorResultado){
        console.log(`Teste da função ${nomeFuncao}: cenário ${cenario} aprovado.`)
    }else{
        console.log(`Teste da função ${nomeFuncao}: cenário ${cenario} reprovado.`)
    }
}

testarFuncao(funcoes.somar.name,1,5,funcoes.somar(2,3))
testarFuncao(funcoes.somar.name,2,10,funcoes.somar(7,3))
testarFuncao(funcoes.subtrair.name,1,5,funcoes.subtrair(8,3))
testarFuncao(funcoes.subtrair.name,2,0,funcoes.subtrair(5,5))
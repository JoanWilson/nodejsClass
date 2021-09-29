let args = process.argv.slice(2)
String(args)
console.log(args)
console.log(validar(args))


function validar(x){
    if (args == 's'){
        console.log('Sim!')
    }
    else if (args == 'n'){
        console.log('Não!')
    }
    else{
        console.log('Inválido!')
    }
}
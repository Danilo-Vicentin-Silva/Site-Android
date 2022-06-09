//const nome = prompt('Qual é seu nome?')
let data = new Date()
let ano = data.getFullYear()



//pilotos------------------------------------
let piltos = [
    ['Lewis','Hamilton', ]
]
let bemvindo = document.querySelector('h1#nome')
//------------------------------------------

bemvindo.innerHTML = `Seja bem-vindo, ${nome}`

function infoPiloto() {

    let nomePiloto = document.querySelector('input#pilot')
    let mostrarInfo = document.querySelector('div#mostrarInfo')
    if (nomePiloto.value == 'hamilton') {
        mostrarInfo.innerHTML = `<p>${hamilton.nome} nasceu em </p>`
    }
}

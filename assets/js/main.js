const ul = document.getElementById('pokes');
const url = 'https://pokeapi.co/api/v2/pokemon/';
const inputPokemon = document.getElementById('inputPokemon')
const imagePokemon = document.getElementById('imagePokemon')
const namePokemonHTML = document.getElementById('pokemon-nome')
const numPokemonHTML = document.getElementById('pokemon-numero')
const txtPokemonHTML = document.getElementById('pokemon-texto')
const typePokemonHTML = document.getElementById('pokemon-tipo')

let image = document.createElement(`img`)
let idPokemon

function poke() {
    newUrl = url.concat((inputPokemon.value).toLowerCase())
    fetch(newUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            document.querySelector('.alert-pokemon').classList.add('d-none')

            // NOME DO POKEMON
            let namePokemon = firstUpper(data.name)
            namePokemonHTML.innerText = namePokemon

            idPokemon = data.id
            // NUMERO DO POKEMON
            let numPokemon = idPokemon
            numPokemonHTML.innerText = 'Nº: ' + numPokemon

            // TIPO DO POKEMON
            let typesPokemon = []
            let arrTypesPokemon = data.types
            for (let typePokemon of arrTypesPokemon) {
                typePokemon = translateTypes(typePokemon.type.name)
                typesPokemon.push(typePokemon)
            }
            typePokemonHTML.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>` + typesPokemon

            // IMAGEM DO POKEMON
            image.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
            image.setAttribute(`class`, 'image-pokemon')
            image.setAttribute(`alt`, namePokemon)
            imagePokemon.appendChild(image)
        }).catch(function (err) {
            document.getElementById('alert-pokemon').classList.remove('d-none')
        })
}

function pokeSearch(pokemon) {
    newUrl = url.concat(pokemon)
    fetch(newUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            document.querySelector('.alert-pokemon').classList.add('d-none')

            // NOME DO POKEMON
            let namePokemon = firstUpper(data.name)
            namePokemonHTML.innerText = namePokemon

            idPokemon = data.id
            // NUMERO DO POKEMON
            let numPokemon = idPokemon
            numPokemonHTML.innerText = 'Nº: ' + numPokemon

            // TIPO DO POKEMON
            let typesPokemon = []
            let arrTypesPokemon = data.types
            for (let typePokemon of arrTypesPokemon) {
                typePokemon = translateTypes(typePokemon.type.name)
                typesPokemon.push(typePokemon)
            }
            typePokemonHTML.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>` + typesPokemon

            // IMAGEM DO POKEMON
            image.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
            image.setAttribute(`class`, 'image-pokemon')
            image.setAttribute(`alt`, namePokemon)
            imagePokemon.appendChild(image)
        }).catch(function (err) {
            document.getElementById('alert-pokemon').classList.remove('d-none')
        })
}

let corDeFundo = document.querySelector('body')

function translateTypes(type) {
    switch (type) {
        case 'normal':
            corDeFundo.style.backgroundColor = bgColors.Normal
            return 'Normal'
            break;
        case 'fighting':
            corDeFundo.style.backgroundColor = bgColors.Lutador
            return 'Lutador'
            break;
        case 'flying':
            corDeFundo.style.backgroundColor = bgColors.Voador
            return 'Voador'
            break;
        case 'poison':
            corDeFundo.style.backgroundColor = bgColors.Venenoso
            return 'Venenoso'
            break;
        case 'ground':
            corDeFundo.style.backgroundColor = bgColors.Terra
            return 'Terra'
            break;
        case 'rock':
            corDeFundo.style.backgroundColor = bgColors.Pedra
            return 'Pedra'
            break;
        case 'bug':
            corDeFundo.style.backgroundColor = bgColors.Inseto
            return 'Inseto'
            break;
        case 'ghost':
            corDeFundo.style.backgroundColor = bgColors.Fantasma
            return 'Fantasma'
            break;
        case 'water':
            corDeFundo.style.backgroundColor = bgColors.Agua
            return 'Água'
            break;
        case 'steel':
            corDeFundo.style.backgroundColor = bgColors.Aço
            return 'Aço'
            break;
        case 'fire':
            corDeFundo.style.backgroundColor = bgColors.Fogo
            return 'Fogo'
            break;
        case 'grass':
            corDeFundo.style.backgroundColor = bgColors.Grama
            return 'Grama'
            break;
        case 'electric':
            corDeFundo.style.backgroundColor = bgColors.Eletrico
            return 'Eletrico'
            break;
        case 'psychic':
            corDeFundo.style.backgroundColor = bgColors.Psiquico
            return 'Psiquico'
            break;
        case 'dragon':
            corDeFundo.style.backgroundColor = bgColors.Dragao
            return 'Dragão'
            break;
        case 'dark':
            corDeFundo.style.backgroundColor = bgColors.Sombrio
            return 'Sombrio'
            break;
        case 'fairy':
            corDeFundo.style.backgroundColor = bgColors.Fada
            return 'Fada'
            break;
        case 'ice':
            corDeFundo.style.backgroundColor = bgColors.Gelo
            return 'Gelo'
            break;
    }
}

function firstUpper(str) {
    return str[0].toUpperCase() + str.substr(1)
}
function firstLower(str) {
    return str[0].toLowerCase() + str.substr(1)
}

let hpPokemon = document.getElementById('hp')
let forcaPokemon = document.getElementById('forca')
let defesaPokemon = document.getElementById('defesa')
let velocidadePokemon = document.getElementById('velocidade')
let pokemonNomeModal = document.querySelector('.pokemon-nome')
let imagePokemonModal = document.querySelector('.image-pokemon-modal')

function verStatus() {
    document.querySelector('.backgroundModal').classList.remove('d-none')
    document.querySelector('.container-modal').classList.add('mostra-modal')
    document.querySelector('.container-modal').classList.remove('remove-modal')

    fetch(newUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)

            // NOME DO POKEMON
            let namePokemon = firstUpper(data.name)
            pokemonNomeModal.innerText = namePokemon

            // STATUS DO POKEMON
            let hp = data.stats[0].base_stat
            hpPokemon.innerText = 'HP: ' + hp

            let forca = data.stats[1].base_stat
            forcaPokemon.innerText = 'Força: ' + forca

            let defesa = data.stats[2].base_stat
            defesaPokemon.innerText = 'Defesa: ' + defesa

            let velocidade = data.stats[5].base_stat
            velocidadePokemon.innerText = 'Velocidade: ' + velocidade

            // IMAGEM DO POKEMON
            imagePokemonModal.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
            imagePokemonModal.setAttribute(`alt`, namePokemon)
        }).catch(function (err) {
            document.getElementById('alert-pokemon').classList.remove('d-none')
        })
}
function fechaModal() {
    document.querySelector('.container-modal').classList.add('remove-modal')
    setTimeout(() => {
        document.querySelector('.backgroundModal').classList.add('d-none')
        document.querySelector('.container-modal').classList.remove('mostra-modal')
    }, 250)
}

fetch(url + '1')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        // NOME DO POKEMON
        let namePokemon = firstUpper(data.name)
        namePokemonHTML.innerText = namePokemon

        idPokemon = data.id
        // NUMERO DO POKEMON
        let numPokemon = idPokemon
        numPokemonHTML.innerText = 'Nº: ' + numPokemon

        // TIPO DO POKEMON
        let typesPokemon = []
        let arrTypesPokemon = data.types
        for (let typePokemon of arrTypesPokemon) {
            typePokemon = translateTypes(typePokemon.type.name)
            typesPokemon.push(typePokemon)
        }
        typePokemonHTML.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>` + typesPokemon

        // IMAGEM DO POKEMON
        image.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
        image.setAttribute(`class`, 'image-pokemon')
        image.setAttribute(`alt`, namePokemon)
        imagePokemon.appendChild(image)
    }).catch(function (err) {
        console.log(err)
    })


    
function verificador(){
    if(inputPokemon.value == ""){
        resultadoBusca.classList.remove('mostra-busca')
    }
}

window.onload = () => {
    setInterval(verificador, 500)
}

let resultadoBusca = document.getElementById('resultado-busca')
let urlPoke = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6000'

// AJUSTA CAMPO DE PESQUISA AO DIGITAR
function nameParecido() {
    let filhosResultadoBusca = document.querySelectorAll('#resultado-busca > *')
    if (filhosResultadoBusca.length > 0)
        resultadoBusca.classList.add('mostra-busca')

    filhosResultadoBusca.forEach(result => {
        result.remove()
    })
    fetch(urlPoke)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            data.results.forEach(result => {
                if (result.name.startsWith((inputPokemon.value).toLowerCase())) {
                    let li = document.createElement('li')
                    li.setAttribute('class', "li-pokemon")
                    li.setAttribute('id', result.name)
                    let txt = document.createTextNode(firstUpper(result.name))

                    li.appendChild(txt)
                    resultadoBusca.appendChild(li)
                }
            })
        }).catch(function (err) {
            console.log(err)
        })
}

// VERIFICA CLIQUE NA PÁGINA
document.querySelector('body').addEventListener('click', (e) => {

    // QUANDO A PESSOA CLICAR NO POKEMON QUE APARECE NA BUSCA
    if(e.target.classList.value == 'li-pokemon'){
        pokeSearch(e.target.id)
        resultadoBusca.classList.remove('mostra-busca')
        inputPokemon.value = ''
    }
})

// AJUSTA CAMPO DE PESQUISA AO APAGAR
document.querySelector('body').addEventListener('keydown', (e) => {
    if (e.keyCode == 8) {            
        let filhosResultadoBusca = document.querySelectorAll('#resultado-busca > *')

        if (filhosResultadoBusca.length > 0)
            resultadoBusca.classList.remove('d-none')

        filhosResultadoBusca.forEach(result => {
            result.remove()
        })
        fetch(urlPoke)
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data.results)
                data.results.forEach(result => {
                    if (result.name.startsWith(inputPokemon.value)) {
                        let li = document.createElement('li')
                        li.setAttribute('class', "li-pokemon")
                        let txt = document.createTextNode(firstUpper(result.name))

                        li.appendChild(txt)
                        resultadoBusca.appendChild(li)
                    }
                })
            }).catch(function (err) {
                console.log(err)
            })
    }
})



const bgColors = {
    'Inseto': '#1C4B27',
    'Sombrio': '#040706',
    'Dragao': '#448B95',
    'Eletrico': '#E1E32A',
    'Fada': '#951A44',
    'Lutador': '#994025',
    'Fogo': '#AB1F23',
    'Voador': '#4A677D',
    'Fantasma': '#33336B',
    'Grama': '#147B3D',
    'Terra': '#A9702C',
    'Gelo': '#86D2F5',
    'Normal': '#75515B',
    'Venenoso': '#5E2D88',
    'Psiquico': '#A32B6C',
    'Pedra': '#48180B',
    'Aco': '#5F756D',
    'Agua': '#1552E2',
}

function nextPoke() {
    idPokemon++
    if (idPokemon > 898) {
        idPokemon = 1
    }
    if (idPokemon < 1) {
        idPokemon = 898
    }
    newUrl = url.concat(idPokemon)
    fetch(newUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            document.querySelector('.alert-pokemon').classList.add('d-none')

            // NOME DO POKEMON
            let namePokemon = firstUpper(data.name)
            namePokemonHTML.innerText = namePokemon

            idPokemon = data.id
            // NUMERO DO POKEMON
            let numPokemon = idPokemon
            numPokemonHTML.innerText = 'Nº: ' + numPokemon

            // TIPO DO POKEMON
            let typesPokemon = []
            let arrTypesPokemon = data.types
            for (let typePokemon of arrTypesPokemon) {
                typePokemon = translateTypes(typePokemon.type.name)
                typesPokemon.push(typePokemon)
            }
            typePokemonHTML.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>` + typesPokemon

            // IMAGEM DO POKEMON
            image.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
            image.setAttribute(`class`, 'image-pokemon')
            image.setAttribute(`alt`, namePokemon)
            imagePokemon.appendChild(image)
        }).catch(function (err) {
            document.getElementById('alert-pokemon').classList.remove('d-none')
        })
}
function prevPoke() {
    idPokemon--
    if (idPokemon > 898) {
        idPokemon = 1
    }
    if (idPokemon < 1) {
        idPokemon = 898
    }
    newUrl = url.concat(idPokemon)
    fetch(newUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            document.querySelector('.alert-pokemon').classList.add('d-none')

            // NOME DO POKEMON
            let namePokemon = firstUpper(data.name)
            namePokemonHTML.innerText = namePokemon

            idPokemon = data.id
            // NUMERO DO POKEMON
            let numPokemon = idPokemon
            numPokemonHTML.innerText = 'Nº: ' + numPokemon

            // TIPO DO POKEMON
            let typesPokemon = []
            let arrTypesPokemon = data.types
            for (let typePokemon of arrTypesPokemon) {
                typePokemon = translateTypes(typePokemon.type.name)
                typesPokemon.push(typePokemon)
            }
            typePokemonHTML.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>` + typesPokemon

            // IMAGEM DO POKEMON
            image.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
            image.setAttribute(`class`, 'image-pokemon')
            image.setAttribute(`alt`, namePokemon)
            imagePokemon.appendChild(image)
        }).catch(function (err) {
            document.getElementById('alert-pokemon').classList.remove('d-none')
        })
}

// MOBILE
const mobileContent = document.querySelector('.mobile-content')
const mobile = document.querySelector('.mobile')
function goToPage(){
    mobile.style.display = 'none'
    mobileContent.style.display = 'block'
    mobileContent.style.animation = 'toTop 1s ease-in-out'
}
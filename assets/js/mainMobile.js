const pokemonInput = document.getElementById('inputPokemon2')
const pokemonImage = document.getElementById('imagemPokemon')
const nomeDoPokemon = document.getElementById('namePokemon')
const numeroPokemon = document.getElementById('numeroPokemon')
const tipoPokemon = document.getElementById('tipoPokemon')

let imagem = document.createElement(`img`)

// CARREGAMENTO INICIAL DO POKEMON
fetch(url + '1')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        // NOME DO POKEMON
        let namePokemon = firstUpper(data.name)
        nomeDoPokemon.innerText = namePokemon

        // NUMERO DO POKEMON
        idPokemon = data.id
        let numPokemon = idPokemon
        numeroPokemon.innerText = 'Nº: ' + numPokemon

        // TIPO DO POKEMON
        let typesPokemon = []
        let arrTypesPokemon = data.types
        for (let typePokemon of arrTypesPokemon) {
            typePokemon = translateTypes(typePokemon.type.name)
            typesPokemon.push(typePokemon)
        }
        tipoPokemon.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>` + typesPokemon

        // IMAGEM DO POKEMON
        imagem.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
        imagem.setAttribute(`class`, 'image-pokemon')
        imagem.setAttribute(`alt`, namePokemon)
        pokemonImage.appendChild(imagem)
    }).catch(function (err) {
        console.log(err)
    })

function poke2() {
    newUrl = url.concat((pokemonInput.value).toLowerCase())
    fetch(newUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            // document.querySelector('.alert-pokemon2').classList.add('d-none')

            // NOME DO POKEMON
            let namePokemon = firstUpper(data.name)
            nomeDoPokemon.innerText = namePokemon

            // NUMERO DO POKEMON
            idPokemon = data.id
            let numPokemon = idPokemon
            numeroPokemon.innerText = 'Nº: ' + numPokemon

            // TIPO DO POKEMON
            let typesPokemon = []
            let arrTypesPokemon = data.types
            for (let typePokemon of arrTypesPokemon) {
                typePokemon = translateTypes(typePokemon.type.name)
                typesPokemon.push(typePokemon)
            }
            tipoPokemon.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>` + typesPokemon

            // IMAGEM DO POKEMON
            imagem.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
            imagem.setAttribute(`class`, 'image-pokemon')
            imagem.setAttribute(`alt`, namePokemon)
            pokemonImage.appendChild(imagem)
        }).catch(function (err) {
            // document.getElementById('alert-pokemon2').classList.remove('d-none')
            console.log(err)
        })
}


function verificador2(){
    if(inputPokemon.value == ""){
        resultadoBusca2.classList.remove('mostra-busca')
    }
}

window.onload = () => {
    setInterval(verificador2, 500)
}

let resultadoBusca2 = document.getElementById('resultado-busca2')
let urlPokemon = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6000'

// AJUSTA CAMPO DE PESQUISA AO DIGITAR
function nameParecido2() {
    let filhosResultadoBusca2 = document.querySelectorAll('#resultado-busca2 > *')
    console.log(filhosResultadoBusca2)
    if (filhosResultadoBusca2.length > 0)
        resultadoBusca.classList.add('mostra-busca')

    filhosResultadoBusca2.forEach(result => {
        result.remove()
    })
    fetch(urlPokemon)
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
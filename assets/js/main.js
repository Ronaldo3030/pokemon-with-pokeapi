const ul = document.getElementById('pokes');
const url = 'https://pokeapi.co/api/v2/pokemon/';
const inputPokemon = document.getElementById('inputPokemon')
const imagePokemon = document.getElementById('imagePokemon')
const namePokemonHTML = document.getElementById('pokemon-nome')
const numPokemonHTML = document.getElementById('pokemon-numero')
const txtPokemonHTML = document.getElementById('pokemon-texto')
const typePokemonHTML = document.getElementById('pokemon-tipo')

let image = document.createElement(`img`)

function poke() {
    newUrl = url.concat(inputPokemon.value)
    fetch(newUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            document.querySelector('.alert-pokemon').classList.add('d-none')

            // NOME DO POKEMON
            let namePokemon = firstUpper(data.name)
            namePokemonHTML.innerText = namePokemon

            // NUMERO DO POKEMON
            let numPokemon = data.id
            numPokemonHTML.innerText = 'Nº: ' + numPokemon

            // TEXTO DO POKEMON
            // let urlText = 'https://pokeapi.co/api/v2/characteristic/'.concat(data.id)
            // fetch(urlText)
            //     .then(function (responseTxt) {
            //         return responseTxt.json()
            //     }).then(function (dataTxt) {
            //         console.log(dataTxt)
            //     }).catch(function (errTxt) {
            //         console.log("ERRO:" +errTxt)
            //     })

            // TIPO DO POKEMON
            let typesPokemon = []
            let arrTypesPokemon = data.types
            for (let typePokemon of arrTypesPokemon) {
                typePokemon = translateTypes(typePokemon.type.name)
                typesPokemon.push(typePokemon)
            }
            typePokemonHTML.innerHTML = `<span class="text-muted"><em>Tipo(s)</em>: </span>`+ typesPokemon

            // IMAGEM DO POKEMON
            image.setAttribute(`src`, data.sprites.other["official-artwork"].front_default)
            image.setAttribute(`alt`, namePokemon)
            imagePokemon.appendChild(image)
        }).catch(function (err) {
            document.getElementById('alert-pokemon').classList.remove('d-none')
        })
}

function translateTypes(type) {
    switch (type) {
        case 'normal':
            return 'Normal'
            break;
        case 'fighting':
            return 'Lutador'
            break;
        case 'flying':
            return 'Voador'
            break;
        case 'poison':
            return 'Venenoso'
            break;
        case 'ground':
            return 'Terra'
            break;
        case 'rock':
            return 'Pedra'
            break;
        case 'bug':
            return 'Inseto'
            break;
        case 'ghost':
            return 'Fantasma'
            break;
        case 'water':
            return 'Água'
            break;
        case 'steel':
            return 'Aço'
            break;
        case 'fire':
            return 'Fogo'
            break;
        case 'grass':
            return 'Grama'
            break;
        case 'electric':
            return 'Eletrico'
            break;
        case 'psychic':
            return 'Psiquico'
            break;
        case 'dragon':
            return 'Dragão'
            break;
        case 'dark':
            return 'Sombrio'
            break;
        case 'fairy':
            return 'Fada'
            break;
    }
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function firstUpper(str) {
    return str[0].toUpperCase() + str.substr(1)
}

fetch(url)
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        let pokemons = data.results
        for (pokemon of pokemons) {
            let li = document.createElement('li')
            let namePokemon = document.createTextNode(pokemon.name)
            append(li, namePokemon)
            append(ul, li)
        }
    }).catch(function (err) {
        console.log(err)
    })
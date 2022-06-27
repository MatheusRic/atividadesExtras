class Musica {
    constructor(nome, duracao){
        this.nome = nome;
        this.duracao = duracao;
        this.vezesTocadas = 0;
    }
}

class Banda {
    constructor(nome, integrantes){
        this.nome = nome;
        this.integrantes = integrantes;
        this.album = [];
    }

    adicionarMusica(musica){
        this.album.push(musica)
        return `A musica ${musica.nome}, foi adicionada ao album da banda ${this.nome}`
    }

    tocarMusica(musica){
        if(this.album.find(ele => ele.nome == musica.nome)){
            musica.vezesTocadas++
            return `Tocando a musica ${musica.nome}`
        }
        else{
            return `Musica nao encontrada`
        }
    }
}

const yesterday = new Musica("Yesterday", 2.53)
const theBeatles = new Banda('The Beatles', "Paul, George, Johnn, Ringo")

theBeatles.adicionarMusica(yesterday)
console.log(theBeatles.tocarMusica(yesterday))
console.log(yesterday.vezesTocadas)
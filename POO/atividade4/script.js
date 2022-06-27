class Carta {
    constructor(remetente, destinatario, endereco, conteudo){
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.endereco = endereco;
        this.conteudo = conteudo;
    }
}

class Correio{
    static historicoDeCartas = [];

    static validaCarta(carta){
        if(carta.remetente === undefined || carta.destinatario === undefined || carta.endereco === undefined || carta.conteudo === undefined){
            return false
        }

        return true
    }

    static enviarCarta(carta){
        if(Correio.validaCarta(carta)){
            Correio.historicoDeCartas.push({
                remetente: carta.remetente,
                destinatario : carta.destinatario,
                endereco: carta.endereco,
                conteudo:carta.conteudo
            })
            return `Carta enviado com sucesso`
        }

        return "Carta não enviada, possivelmente tem algum dado invalido/faltante"
    }
}

const kenzie = new Carta('Matheus', 'Rafael', 'Rua da kenzie, n28', 'Estudar na kenzie eh muito legal')

console.log(Correio.enviarCarta(kenzie))
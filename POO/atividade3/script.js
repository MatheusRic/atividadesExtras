class Lutador {
    constructor(nome, categoria, forca, defesa){
        this.nome = nome;
        this.categoria = categoria;
        this.forca = forca;
        this.defesa = defesa;
        this.vitorias = 0;
    }
}

class Arena {
    static contadorDeBatalhas = 0

    static batalha(lutador1, lutador2){
        if(lutador1.forca > lutador2.defesa || lutador1.defesa > lutador2.forca) {
            lutador1.vitorias++
            Arena.contadorDeBatalhas++
            return {
                menssagem: `${lutador1.nome} venceu ${lutador2.nome}`,
                vitoriasGanhador: lutador1.vitorias,
                numeroDaBatalha: Arena.contadorDeBatalhas,
            }
        }

        else if (lutador1.forca == lutador2.defesa || lutador1.defesa == lutador2.forca){
            Arena.contadorDeBatalhas++
            return `Houve um empate`
        }
        else {
            lutador2.vitorias++
            Arena.contadorDeBatalhas++
            return {
                menssagem: `${lutador2.nome} venceu ${lutador1.nome}`,
                vitoriasGanhador: lutador2.vitorias,
                numeroDaBatalha: Arena.contadorDeBatalhas,
            }
        }

    }
}

const scorpion = new Lutador('Scorpion', 'Mortal Kombat', 50, 30)
const subZero = new Lutador('Sub-Zero', 'Mortal Kombat', 60, 40)
const kitana = new Lutador('Kitana', 'Mortal Kombat', 50, 50)

console.log(Arena.batalha(scorpion, subZero))
console.log(Arena.batalha(subZero, scorpion))
console.log(Arena.batalha(scorpion, kitana))

console.log(Arena.contadorDeBatalhas)


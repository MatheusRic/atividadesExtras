class Livro {
    constructor(titulo, autor, precoVenda, precoCompra){
        this.titulo = titulo;
        this.autor = autor;
        this.precoVenda = precoVenda;
        this.precoCompra = precoCompra;
    }
}

const biblia = new Livro ("Biblia", 'Varios', 150, 100)

class Livraria {
    constructor(nome){
        this.nome = nome;
        this.estoque = [];
        this.caixa = 200;
    }

    comprarLivros(livro, qtdLivros){
        if(this.caixa >= livro.precoCompra * qtdLivros){
            this.caixa -= livro.precoCompra * qtdLivros
            livro.qtdLivros = qtdLivros
            this.estoque.push(livro)
            return 'Compra realizada com sucesso!'
        }
        else {
            return 'Valor em caixa não é suficiente para essa compra!'
        }
    }

    venderLivros(livro, qtdLivros){
        const item = this.estoque.find(ele => ele.titulo === livro)
            if(item.qtdLivros >= qtdLivros){
                item.qtdLivros -= qtdLivros
                this.caixa += item.precoVenda * qtdLivros

                return `${qtdLivros}, livros foram vendidos e foi faturado ${item.precoVenda * qtdLivros}`
            }
            else {
                return `A quantidade de livros em estoque nao eh suficiente para esta venda!`
            }
    }
}

const saraiva = new Livraria('Saraiva')
saraiva.comprarLivros(biblia, 2)
console.log(saraiva.estoque)
console.log(saraiva.venderLivros("Biblia", 2))
console.log(saraiva.caixa)
console.log(saraiva.estoque)


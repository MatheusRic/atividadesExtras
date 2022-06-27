class Produto {
    constructor(nome, promocao, normal, emPromocao){
        this.nome = nome;
        this.promocao = promocao;
        this.normal = normal;
        this.emPromocao = emPromocao;
    }
}

const leite = new Produto('leite', 1.35, 2.50, false)

class Estoque{
    static controleEstoque = [
        {produto: "banana", preco: {promocao: 2.50,  normal: 3}, emPromocao: false},
        {produto: "arroz", preco: {promocao: 6.99,  normal: 8}, emPromocao: true},
    ]

    static adicionarProduto(produto){
        Estoque.controleEstoque.push(
            {produto: produto.nome, 
             precos: {promocao: produto.promocao, normal: produto.normal},
             emPromocao: produto.emPromocao})
             return `${produto.nome}, foi adicionado ao estoque`
    }
}

class Cliente {
    constructor(nome, saldo){
        this.nome = nome;
        this.saldo = saldo;
        this.produtosComprados = [];
    }

    comprarProdutos(produto){
        const item = Estoque.controleEstoque.find(ele => ele.produto === produto)
        if(item){
            if(item.emPromocao == true && this.saldo >= item.preco.promocao) {
                this.saldo -= item.preco.promocao
                this.produtosComprados.push(item)
                return {
                    nome: item.produto,
                    preco: item.preco.promocao
                }
            }
            else if(item.emPromocao == false && this.saldo >= item.preco.normal) {
                this.saldo -= item.preco.normal
                this.produtosComprados.push(item)
                return {
                    nome: item.produto,
                    preco: item.preco.normal
                }
            }
            else if(this.saldo < item.preco.promocao || this.saldo < item.preco.normal){
                return `Voce nao tem saldo o suficiente para comprar esse produto`
            }
        }
        else {
            return `Produto nao encontrado`
        }
    }
}
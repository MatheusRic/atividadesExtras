class Empregos {
  static empregos = [
    { nome: "Encanador", salarios: { clt: 2000, pj: 2500 } },
    { nome: "Advogado", salarios: { clt: 5000, pj: 6000 } },
    { nome: "Desenvolvedor JR", salarios: { clt: 6000, pj: 8000 } },
  ];
}

/*Code abaixo*/

class Pessoa {
  constructor(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.saldo = 0;
    this.historico = [];
  }

  mostrarNomeCompleto(){
    return `${this.nome} ${this.sobrenome}`
  }
}

class Funcionario extends Pessoa {
  constructor(nome, sobrenome, idade, cargo, tipo){
    super(nome, sobrenome, idade)
    this.cargo = cargo;
    this.tipo = tipo;
    this.salario = this.relatarSalario()
  }
  relatarSalario(){
    let salario = 0
    Empregos.empregos.forEach(ele => {
      if(this.cargo === ele.nome){
        if(this.tipo === 'clt'){
          salario = ele.salarios.clt
        }
        else {
          salario = ele.salarios.pj
        }
      }
    })
    return `Seu salario sera de ${salario}`
  }
}
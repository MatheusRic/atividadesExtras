class Email {
    constructor(email, nome){
        this.email = email;
        this.nome = nome;
        this.conteudo = undefined;
    }

    escreverEmail(assunto, mensagem){
        this.conteudo = {assunto: assunto, mensagem: mensagem}
        return this.conteudo
    }
}

class ServicoDeEmail {
    
    static historico = []
    
    static enviarEmail(emailRemetente, emailDestinatario){
        if(emailRemetente instanceof Email && emailDestinatario instanceof Email) {
        if(emailRemetente.nome == undefined|| emailDestinatario.nome == undefined || emailRemetente.email == undefined|| emailDestinatario.email == undefined){
            return {
                mensagem: "Email não enviado. Verifique se há dados inválidos e/ou faltantes",
                status: "Não enviado"
            }
        }
        else {
            ServicoDeEmail.historico.push({
                emailRemetente: emailRemetente,
                emailDestinatario: emailDestinatario
            })

            return {
                mensagem: "Email enviado com sucesso",
                status: "Enviado"
            }
        }
    }}
}

const matheus = new Email ('matheus.ricardo@kenzie.com', 'Matheus')
const rafael = new Email ('rafa.bertoldo@kenzie.com', 'Rafael')

console.log(ServicoDeEmail.enviarEmail('matheus.ricardo@kenzie.com', 'rafa.bertoldo@kenzie.com'))


class heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;
            switch (this.tipo) {
            case "Mago":
             ataque = "magia"
             break;  
            case "Guerreiro":
             ataque = "espada"
             break
            case "Monge":
             ataque = "artes marciais"
             break
            case "Ninja":
             ataque = "shuriken"
        }
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroiMago = new heroi("Tom Riddle","71","Mago")
let heroiGuerreiro = new heroi("Ragnar Lodbrok","44","Guerreiro")
let heroiMonge = new heroi("Hiro", "130","Monge")
let heroiNinja = new heroi("Donatello","16","Ninja")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()
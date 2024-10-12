class heroi {

    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }   
    
    atacar (){
    	
        let ataque;
     
        if(this.tipo === "Mago"){
            ataque = "Usou Magia";
        }
        else if(this.tipo === "Guerreiro"){
            ataque = "Usou Espada";
        }
        else if(this.tipo === "Monge"){
            ataque = "Usou Artes Marciais";
        }
        else if(this.tipo === "Ninja"){
            ataque = "Usou Shuriken";
        }
        console.log(`O ${this.tipo} "${this.nome}" atacou usando ${ataque}`)
    }
    
}

    let heroiAtaque = new heroi ("Lucios",33, "Mago");
    heroiAtaque.atacar ()
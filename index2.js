let saldoRanked = Ranked(20,5151)

if (saldoRanked <= 10) {
    console.log("O Jogador está com saldo de vitórias " + saldoRanked + " e está no nível de Ferro")
    }
    
else if (saldoRanked >=11 && saldoRanked <= 20) {
    console.log("O Jogador está com saldo de vitórias " + saldoRanked + " e está no nível de Bronze")
    } 

else if (saldoRanked >=21 && saldoRanked <= 50) {
    console.log("O Jogador está com saldo de vitórias " + saldoRanked + " e está no nível de Prata")
    } 
    
else if (saldoRanked >=51 && saldoRanked <= 80) {
    console.log("O Jogador está com saldo de vitórias " + saldoRanked + " e está no nível de Ouro")
    }
    
else if (saldoRanked >=81 && saldoRanked <= 90) {
    console.log("O Jogador está com saldo de vitórias " + saldoRanked + " e está no nível de Diamante")
    }

else if (saldoRanked >=91 && saldoRanked <= 100) {
    console.log("O Jogador está com saldo de vitórias " + saldoRanked + " e está no nível de Legend")
    }
    
else if (saldoRanked >= 101) {
    console.log("O Jogador está com saldo de vitórias " + saldoRanked + " e está no nível de Imortal")
    }     

function Ranked (numA, numB) {
   let saldoTotal = numA * numB
   return saldoTotal	

}
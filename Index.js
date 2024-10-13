function ranked(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;

    let mensagem;

    if (saldoVitorias <= 0) {
        mensagem = "Ganhe pelo menos uma partida";
    } 
    else if (saldoVitorias <= 10) {
        mensagem = `O Herói tem de saldo de ${saldoVitorias} e está no nível Ferro`;
    } 
    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        mensagem = `O Herói tem de saldo de ${saldoVitorias} e está no nível Bronze`;
    } 
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        mensagem = `O Herói tem de saldo de ${saldoVitorias} e está no nível Prata`;
    } 
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        mensagem = `O Herói tem de saldo de ${saldoVitorias} e está no nível Ouro`;
    } 
    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        mensagem = `O Herói tem de saldo de ${saldoVitorias} e está no nível Diamante`;
    } 
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        mensagem = `O Herói tem de saldo de ${saldoVitorias} e está no nível Lendário`;
    } 
    else {
        mensagem = `O Herói tem de saldo de ${saldoVitorias} e está no nível Imortal`;
    }

    return mensagem;

}

const rankDoHeroi = ranked(120, 2);
console.log(rankDoHeroi)
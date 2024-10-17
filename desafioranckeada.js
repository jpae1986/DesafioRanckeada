const readline = require('readline');

// Configura o recebimento de informações do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar a quantidade de vitórias
function askForVictory (){
    rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
        // Função para perguntar a quantidade de derrotas
        askForDefeat(vitorias);
    });
};

// Função para perguntar quantas derrotas tem o jogador
const askForDefeat = (vitorias) => {
    rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
        const saldo = parseInt(vitorias -  derrotas);
        // Determina o nível do jogador
            let nivel;
            if (vitorias < 10) {
                nivel = "Ferro";
            } else if (vitorias <= 20) {
                nivel = "Bronze";
            } else if (vitorias <= 50) {
                nivel = "Prata";
            } else if (vitorias <= 80) {
                nivel = "Ouro";
            } else if (vitorias <= 90) {
                nivel = "Diamante";
            } else if (vitorias <= 100) {
                nivel = "Lendário";
            } else if (vitorias >= 101) {
                nivel = "Imortal";
            }    

            // Exibe a mensagem final
            console.log(`O Herói tem saldo de ${saldo} e está no nível ${nivel}`);
            askForAnotherPlayer(); // Pergunta se deseja outro jogador
        });
    };

// Função para perguntar se deseja ver outro jogador
const askForAnotherPlayer = () => {
    rl.question("Deseja ver outro jogador? (s/n): ", (resposta) => {
        if (resposta.toLowerCase() === 's') {
            askForVictory(); // Chama a função para um novo jogador
        } else {
            console.log("Obrigado por usar o sistema!");
            rl.close(); // Fecha o sistema
        }
    });
};

// Inicia o processo
askForVictory();
console.clear();
const prompt = require("prompt-sync")();


const personagem = prompt("Digite o nome do seu personagem: ");

let tempo = {
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0,
    dormir: function() {
        this.dia++;
        this.hora = 7;
    },
    naodormir: function() {
            this.dia++;
            this.hora = 5;
        }
        // se o heroi cansar e querer ir para casa 
}


function passarTempo(day, hour, min, seg) {
    tempo.dia += day;
    tempo.hora += hour;
    tempo.minuto += min;
    tempo.segundo += seg;
    while (tempo.hora > 24) {
        tempo.dia++;
        tempo.hora -= 24;
        if (tempo.hora < 24) { break; }
    }
    while (tempo.minuto >= 60) {
        tempo.hora++;
        tempo.minuto -= 60;
        if (tempo.minuto < 60) { break; }
    }
    while (tempo.segundo >= 60) {
        tempo.minuto++;
        tempo.segundo -= 60;
        if (tempo.segundo < 60) { break; }
    }
}



//funcao para passar tempo ( passarTempo( /*dia a ser passada*/ , /*hora a ser passado*/ , /*minuto a ser passado*/ );)
// EX passar(1,2,3,4) ira passar 1 dia 2 horas 3 minutos e 4 segundos 
let status = {
    fome: 1000,
    sede: 1000,
    inteligencia: 0,
    dinheiro: 0,
    comer: function() {
        this.fome = 1000;
        this.sede = 1000;
        passarTempo(0, 2, 0, 0);
        console.log(`Voce almoçou e sua fome e ${this.fome} e sede ${this.sede}`);
    },
    beberAgua: function() {
        this.sede + 100;
        passarTempo(0, 0, 0, 30);
    }
}

passarTempo(0, 7, 0, 0);

function mostrarTempo() {
    console.log(`Agora sao ${tempo.hora} horas ${tempo.minuto} minutos ${tempo.segundo} segundos do dia ${tempo.dia}`);
}

function statusPersonagem() {
    console.log(`${personagem} esta com ${status.fome} fome e ${status.sede} de sede e ${status.inteligencia} de inteligencia`);
}

function jogar() {
    let perguntaTrabalhar;
    let aleatorio = Math.floor(Math.random() * 10);
    let pergunta = +prompt("Deseja jogar 1 hora 2 horas ou 3 horas? ");
    if (pergunta == 1) {
        passarTempo(0, 1, 0, 0);
        console.log("Voce jogou 1 hora ");
        status.fome -= 50;
        status.sede -= 50;
        perguntaTrabalhar = prompt("Mesmo estando atrasado deseja ir trabalhar? ");
        mostrarTempo();
        statusPersonagem();
        if (perguntaTrabalhar == "sim" || perguntaTrabalhar == "s" || perguntaTrabalhar == "claro") {
            trabalhar();
        } else if (perguntaTrabalhar == "nao" || perguntaTrabalhar == "n") {
            console.log("Voce nao quis ir trabalhar")
        }
    } else if (pergunta == 2) {
        passarTempo(0, 2, 0, 0);
        console.log("Voce jogou 2 hora ");
        status.fome -= 100;
        status.sede -= 100;
        mostrarTempo();
        statusPersonagem();
    } else if (pergunta == 3) {
        passarTempo(0, 3, 0, 0);
        console.log("Voce jogou 3 hora ");
        status.fome -= 150;
        status.sede -= 150;
        mostrarTempo();
        statusPersonagem();
    } else if (aleatorio == 5) {
        passarTempo(0, 20, 0, 0);
        console.log(`Voce se entreteu o bastante para jogar o dia todo e foi dormir`);
        tempo.dormir();
        mostrarTempo();
        statusPersonagem();
    } else {
        console.log("Resposta errada");
    }
}

function trabalhar() {
    console.log(`${personagem} Resolveu ir trabalhar `);
    passarTempo(0, 8, 0, 0);
    status.dinheiro += 50;
    status.fome -= 500;
    status.sede -= 500;
    mostrarTempo();
    statusPersonagem();
    console.log(`Voce tem  R$${status.dinheiro},00 acumulado na sua conta `);
}

function trabalhoProgramador() {
    console.log("Voce agora é um porgramador");
    console.log("E recebe R$200,00 por dia de trabalho ");
    status.dinheiro += 200
}

function dormirATarde() {
    let aleatorio = Math.floor(Math.random() * 10);
    if (aleatorio == 1) {
        passarTempo(0, 0, 30, 0);
        console.log(`Voce dormiu ate as ${tempo.hora}:${tempo.minuto}:${tempo.segundo}`);
        mostrarTempo();
        statusPersonagem();
    } else if (aleatorio == 2) {
        passarTempo(0, 1, 0, 0);
        console.log(`Voce dormiu ate as ${tempo.hora}:${tempo.minuto}:${tempo.segundo}`);
        mostrarTempo();
        statusPersonagem();
    } else if (aleatorio == 4) {
        passarTempo(0, 1, 30, 0);
        console.log(`Voce dormiu ate as ${tempo.hora}:${tempo.minuto}:${tempo.segundo}`);
        mostrarTempo();
        statusPersonagem();
    } else if (aleatorio == 6) {
        passarTempo(0, 2, 0, 0);
        console.log(`Voce dormiu ate as ${tempo.hora}:${tempo.minuto}:${tempo.segundo}`);
        mostrarTempo();
        statusPersonagem();
    } else if (aleatorio == 9) {
        passarTempo(0, 2, 30, 0);
        console.log(`Voce dormiu ate as ${tempo.hora}:${tempo.minuto}:${tempo.segundo}`);
        mostrarTempo();
        statusPersonagem();
    } else {
        passarTempo(0, 5, 0, 0);
        console.log(`Voce dormiu ate as ${tempo.hora}:${tempo.minuto}:${tempo.segundo}`);
        mostrarTempo();
        statusPersonagem();
    }
}

function mercado() {
    passarTempo(0, 2, 0, 0);
    status.dinheiro -= 200;
    console.log(`Voce gastou R$ 200,00 e agora tem R$${status.dinheiro},00`);
    mostrarTempo();
    statusPersonagem();
}

function estudar() {
    console.log(`Voce esta estudando `);
    status.inteligencia++;
    status.fome -= 90;
    status.sede -= 90;
    passarTempo(0, 3, 0, 0);
    statusPersonagem();
}


console.log(`${personagem} acorda as ${tempo.hora}:${tempo.minuto}:${tempo.dia}todo dia `);
console.log(`${personagem} trabalha em uma empresa da familia tendo a opcao de ir trabalhar ou ficar em casa `);
console.log(`Ele tambem estuda para ser um programador famoso e para ter uma vida melhor e dar uma vida melhor para seus pais`);
console.log("Ele trabalha a dia ganhando 50 reais ");
console.log("Seu sonho e alcancar o primeiro milhao na conta ");



do {
    if (status.inteligencia < 100) {
        mostrarTempo();
        statusPersonagem();
        let resposta = prompt("Deseja ir Trabalhar, estudar ou jogar? ").toLowerCase();
        if (resposta == "t" || resposta == "trabalhar") {
            trabalhar();
        } else if (resposta == "j" || resposta == "jogar") {
            jogar();
        } else if (resposta == "e" || resposta == "estudar") {
            estudar();
        } else {
            console.log("Resposta errada");

        }
        let respostaEstudar;
        let respostaDormir;
        let desejaAlmocar = prompt("Deseja ir almocar? ").toLowerCase();
        if (desejaAlmocar == "sim" || desejaAlmocar == "s" || desejaAlmocar == "claro") {
            status.comer();
            mostrarTempo();
            respostaDormir = prompt("Deseja dormir ou ir ao mercado? ").toLowerCase();
            if (respostaDormir == "dormir" || respostaDormir == "d") {
                dormirATarde();
            } else if (respostaDormir == "mercado" || respostaDormir == "m") {
                mercado();
            } else {
                console.log(`${personagem} Foi ler um livro `);
                status.inteligencia++;
                passarTempo(0, 1, 0, 0);
                mostrarTempo();
                statusPersonagem();
            }
        } else if (desejaAlmocar == "nao" || desejaAlmocar == "n") {
            respostaEstudar = prompt("Deseja ir estudar ou jogar? ").toLowerCase();
            if (respostaEstudar == "estudar" || respostaEstudar == "e") {
                estudar();
            } else {
                jogar();
            }
        }
        mostrarTempo()
        if (tempo.hora > 20) {
            let dormirANoite = prompt(`Já sao ${tempo.hora}:${tempo.minuto}:${tempo.segundo} deseja ir dormir? `).toLowerCase();
            if (dormirANoite == "sim" || dormirANoite == "s" || dormirANoite == "claro") {
                tempo.dormir();
                status.fome -= 100;
                status.sede -= 100;
                mostrarTempo();
                statusPersonagem();
            } else if (dormirANoite == "nao" || dormirANoite == "n") {
                status.fome -= 500;
                status.sede -= 500;
                tempo.naodormir();
                console.log(`Voce ficou a noite toda assistindo filme e dormiu ate as ${tempo.hora} horas`);
            }
        }
    } else {
        console.log("Agora voce e um programador");
    }
} while (true);
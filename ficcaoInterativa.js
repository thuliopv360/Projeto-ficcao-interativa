console.clear();
const prompt = require("prompt-sync")();



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
        statusPersonagem();
        console.log();
    }
}

passarTempo(0, 7, 0, 0);

function mostrarTempo() {
    console.log(`Sao ${tempo.hora} horas ${tempo.minuto} minutos ${tempo.segundo} segundos do dia ${tempo.dia}`);
}

function statusPersonagem() {
    console.log(`${personagem} esta com \n ${status.fome} fome \n ${status.sede} de sede \n ${status.inteligencia} de inteligencia \n com R$${status.dinheiro}`);
}

function jogar() {
    let perguntaTrabalhar;
    let aleatorio1 = Math.floor(Math.random() * 10);
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
            console.log("Voce nao quis ir trabalhar");
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
    } else if (aleatorio1 == 5) {
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
    for (let i = 0; i < 1; i++) {
        console.log(`${personagem} Resolveu ir trabalhar `);
        passarTempo(0, 8, 0, 0);
        status.dinheiro += 50;
        status.fome -= 500;
        status.sede -= 500;
        mostrarTempo();
        statusPersonagem();
        console.log(`Voce tem  R$${status.dinheiro},00 acumulado na sua conta `);
    }
}


function trabalharDeProgramador() {
    status.dinheiro += 200;
    passarTempo(0, 6, 0, 0);
    statusPersonagem();
    mostrarTempo();
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
    status.inteligencia += 5;
    status.fome -= 90;
    status.sede -= 90;
    passarTempo(0, 3, 0, 0);
    statusPersonagem();
    mostrarTempo();
}

const personagem = prompt("Digite o nome do seu personagem: ");

console.log(`${personagem} acorda as ${tempo.hora}:${tempo.minuto}:${tempo.dia} todo dia `);
console.log(`${personagem} trabalha em uma empresa da familia tendo a opcao de ir trabalhar ou ficar em casa `);
console.log(`Ele tambem estuda para ser um programador, e para ter uma vida melhor e dar uma vida melhor para seus pais`);
console.log("Ele trabalha a dia ganhando 50 reais ");

function dormirANoite() {
    if (tempo.hora >= 20) {
        let dormirANoite = prompt(`Já sao ${tempo.hora}:${tempo.minuto}:${tempo.segundo} deseja ir dormir? `).toLowerCase();
        console.log();
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
}

function programadorMaster() {
    status.dinheiro += 1000;
    passarTempo(0, 3, 0, 0);
    statusPersonagem();
    mostrarTempo();
}

let programador = false;
let senior = false;

function rodarAteCompletarHorario() {
    while (tempo.hora <= 20) {
        mostrarTempo();
        console.log();
        perguntaParaCompletarOHorario = prompt(`${personagem} Deseja estudar ou ler um livro? `).toLowerCase();
        if (perguntaParaCompletarOHorario == "estudar" || perguntaParaCompletarOHorario == "e") {
            estudar();
        } else if (perguntaParaCompletarOHorario == "ler" || perguntaParaCompletarOHorario == "ler um livro" || perguntaParaCompletarOHorario == "l") {
            passarTempo(0, 1, 0, 0);
            mostrarTempo();
            statusPersonagem();
        } else {
            passarTempo(0, 2, 0, 0);
            console.log("Voce ficou mexendo no celular por 2 horas");
            mostrarTempo();
            statusPersonagem();
        }
    }
}

do {
    if (status.inteligencia < 100) {
        mostrarTempo();
        statusPersonagem();
        console.log();
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
        console.log();
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
        let perguntaParaCompletarOHorario;
        rodarAteCompletarHorario(perguntaParaCompletarOHorario);
        mostrarTempo();
        dormirANoite();
        console.log();
    } else if (status.inteligencia < 200) {
        if (programador == false) {
            console.log("Voce agora é um porgramador");
            console.log("E trabalha na famosa google");
            console.log("E recebe R$200,00 por dia de trabalho e trabalha 6 horas por dia ");
            console.log();
            programador = true;
        }
        let perguntaAlmoco;
        let perguntaDormir;
        let perguntaProgramador = prompt("Deseja ir trabalhar? ").toLowerCase();
        if (perguntaProgramador == "sim" || perguntaProgramador == "s" || perguntaProgramador == "claro") {
            trabalharDeProgramador();
            perguntaAlmoco = prompt("Deseja ir almocar? ");
            if (perguntaAlmoco == "sim" || perguntaAlmoco == "s" || perguntaAlmoco == "claro") {
                status.comer();
                mostrarTempo();
                perguntaDormir = prompt("Deseja dormir, estudar ou jogar? ").toLowerCase();
                if (perguntaDormir == "dormir" || perguntaDormir == "d") {
                    dormirATarde();
                } else if (perguntaDormir == "estudar" || perguntaDormir == "e") {
                    estudar();
                } else if (perguntaDormir == "jogar" || perguntaDormir == "j") {
                    jogar();
                } else {
                    console.log(`${personagem} Foi ler um livro `);
                    status.inteligencia += 2;
                    passarTempo(0, 1, 0, 0);
                    mostrarTempo();
                    statusPersonagem();
                }
            } else {
                console.log(`${personagem} Foi ler um livro `);
                status.inteligencia++;
                passarTempo(0, 1, 0, 0);
                mostrarTempo();
                statusPersonagem();
            }
        } else if (perguntaProgramador == "nao" || perguntaProgramador == "n") {
            console.clear();
            console.log(`Hoje ${personagem} tirou o dia para ficar em casa `);
            let perguntaJogar;
            let perguntaNaoFoiTrabalhar;
            let perguntaSeFoiTrabalhar = prompt("Deseja ir almocar? ").toLowerCase();
            if (perguntaSeFoiTrabalhar == "sim" || perguntaSeFoiTrabalhar == "s" || perguntaSeFoiTrabalhar == "claro") {
                status.comer();
                perguntaJogar = prompt("Deseja ir jogar? ");
                if (perguntaJogar == "sim" || perguntaSeFoiTrabalhar == "s" || perguntaSeFoiTrabalhar == "claro") { jogar() }
            } else if (perguntaSeFoiTrabalhar == "nao" || perguntaSeFoiTrabalhar == "n") {
                perguntaNaoFoiTrabalhar = prompt("Deseja jogar ou estudar? ").toLowerCase();
                if (perguntaNaoFoiTrabalhar == "jogar" || perguntaNaoFoiTrabalhar == "j") {
                    jogar();
                } else if (perguntaNaoFoiTrabalhar == "estudar" || perguntaNaoFoiTrabalhar == "e") {}
            }
        }
        let perguntaParaCompletarOHorario;
        rodarAteCompletarHorario(perguntaParaCompletarOHorario);
        mostrarTempo();
        dormirANoite();
    } else if (status.inteligencia >= 200) {
        if (senior == false) {
            console.log(`${personagem} Agora e um programador senior `);
            console.log(`E agora ele recebe R$1000,00 por dia para trabalhar 3 horas por dia`);
            console.log(`${personagem} e um(a) professor que ensina programacao no valle do silício`);
            senior = true;
        }
        let completarHorario;
        let perguntaDormirOuIrAoMercado;
        let perguntaEnsinar = prompt("Voce deseja ir trabalhar hoje? ").toLowerCase();
        let random = Math.floor(Math.random() * 10);
        if (perguntaEnsinar == "sim" || perguntaEnsinar == "s" || perguntaEnsinar == "claro") {
            programadorMaster();
            completarHorario = prompt("Deseja jogar, dormir, estudar ou ir ao mercado").toLowerCase();
            if (completarHorario == "jogar" || completarHorario == "j") {
                jogar();
            } else if (completarHorario == "dormir" || completarHorario == "d") {
                dormirATarde();
            } else if (completarHorario == "estudar" || completarHorario == "e") {
                estudar();
            } else if (completarHorario == "mercado" || completarHorario == "ir ao mercado" || completarHorario == "m") {
                mercado();
            } else if (random == 3) {
                passarTempo(0, 10, 0, 0);
                console.log(`${personagem} Ficou preso no transito por 10 horas`);
            } else {
                console.log("resposta errada")
            }
        } else if (perguntaEnsinar == "nao" || perguntaEnsinar == "n") {
            console.log(`${personagem} resolveu ficar em casa `);
            console.log(`oque deseja fazer?`);
            perguntaDormirOuIrAoMercado = prompt("Deseja estudar \n dormir \n ou ir ao mercado? ").toLowerCase();
            if (perguntaDormirOuIrAoMercado == "estudar" || perguntaDormirOuIrAoMercado == "e") {
                estudar();
            } else if (perguntaDormirOuIrAoMercado == "dormir" || perguntaDormirOuIrAoMercado == "d") {
                dormir();
            } else if (perguntaDormirOuIrAoMercado == "mercado" || perguntaDormirOuIrAoMercado == "ir ao mercado" || perguntaDormirOuIrAoMercado == "m") {
                mercado();
            }
        }
        let perguntaParaCompletarOHorario;
        rodarAteCompletarHorario(perguntaParaCompletarOHorario);
        mostrarTempo();
        dormirANoite();
    }
}
while (true);
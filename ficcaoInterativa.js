console.clear();
const prompt = require("prompt-sync")();


const personagem = prompt("Digite o nome do seu personagem: ");

let tempo = {
    dia: 0,
    hora: 0,
    minuto: 0,
    segundo: 0,
    casa: function() {
            console.log(`ola`);
            this.dia++;
            this.hora = 7;
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

let statusPersonagem = {
    fome: 1000,
    sede: 1000,

}
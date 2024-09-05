//script para a contagem da data
const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataEvento.getTime();
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const conta = timeStampDoEvento - timeStampAtual;
    const dias = Math.floor(conta / 86400000);
    const horas = Math.floor(conta % 86400000 / 3600000);
    const minutos = Math.floor(conta % 3600000 / 60000);
    const segundos = Math.floor(conta % 60000 / 1000);
    document.getElementById("contador").innerHTML = `${dias}D ${horas}H ${minutos}M ${segundos}S`;
    if (conta < 0) {
        clearInterval(contaHoras);
        document.getElementById("contador").innerHTML = `O evento j\xe1 come\xe7ou`;
    }
}, 1000);

//# sourceMappingURL=index.09205a4c.js.map

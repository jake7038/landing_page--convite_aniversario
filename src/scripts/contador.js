//script para a contagem da data

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const conta = timeStampDoEvento - timeStampAtual;
    const dias = Math.floor(conta / (1000 * 60* 60 * 24));
    const horas = Math.floor((conta % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    const minutos = Math.floor((conta % (1000 * 60 * 60)) / (1000 * 60 ));
    const segundos = Math.floor((conta % (1000 * 60  )) / 1000);

    document.getElementById('contador').innerHTML = `${dias}D ${horas}H ${minutos}M ${segundos}S`;

    if(conta < 0){
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `O evento já começou`;
    }
}, 1000);


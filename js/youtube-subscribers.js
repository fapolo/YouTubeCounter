// O número de inscritos utilizado é fictício

// Objetivo é utilizar o logarítmo na base 10 para fazer a divisão do número de inscritos,
// para então obter e utilizar o sufixo correto para a quantidade de inscritos existente.

// Logaritmo reverte a exponenciação, ou seja o logaritmo de 1.000 na base 10 (b=10, ou logaritmo comum)
// é 3, porque 10^3 = 1.000. Aqui se usa o logaritmo dividido por 3, para obter a graduação
// "a cada 3 zeros" e obter o sufixo correspondente para a simplificação do número de inscritos.

const subscribers = {

    publicSubscribers(subs) {
        return this.formatNumber(subs) + ' inscrito(s)';
    },

    formatNumber(number) {

        const symbols = [ "", "mil","mi", "bi", "tri"];

        const tier = Math.log10(number) / 3 | 0; //faz o log10 do nr, divide por 3 e mantém só o inteiro

        if(tier == 0) return number; //se a tier resultar 0 já retorna e finaliza a função

        const sufix = symbols[tier]; //pega o sufixo correto baseado na tier calculada

        const scale = Math.pow(10, tier * 3); //faz a potência da tier obtida

        const scaled = number / scale; //divide nr pela escala para obter somente o nr que será exibido com o sufixo

        return ( (number >= 9999) ? ~~scaled : scaled.toFixed(1) ) + ' ' + sufix; // ~~ remove a divisão fracional
    }
}
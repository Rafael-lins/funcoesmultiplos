// Função para inserir os números a serem verificados pelos comandos coderhouse
function inserirNumeros() {
    const numero1 = parseInt(prompt("Insira aqui o primeiro número:"));
    const numero2 = parseInt(prompt("Insira aqui o segundo número:"));
    return [numero1, numero2];
}

// Esta é a função para verificar se um número é múltiplo do outro
function verificarMultiplos(numero1, numero2) {
    if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
        return true;
    } else {
        return false;
    }
}

// Função para mostrar o resultado da verificação de múltiplos
function mostrarResultado(numero1, numero2, saoMultiplos) {
    if (saoMultiplos) {
        console.log(`${numero1} e ${numero2} são múltiplos um do outro.`);
    } else {
        console.log(`${numero1} e ${numero2} não são múltiplos um do outro.`);
    }
}

// Este é o fluxo principal do programa
function main() {
    const [numero1, numero2] = inserirNumeros();

    const saoMultiplos = verificarMultiplos(numero1, numero2);

    mostrarResultado(numero1, numero2, saoMultiplos);
}

// Aqui chama a função principal para iniciar o programa
main();

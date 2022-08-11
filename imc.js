const /* cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.*/ calcular = document.getElementById('calcular');

function /*cria um novo objeto*/ imc(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if/* é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.*/
    (altura !== '' && peso !== '') { 
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        if(valorIMC <18.5){
            classificacao = 'abaixo do peso';
        } else if (valorIMC <25){
            classificacao = 'peso ideal';
        } else if (valorIMC <30){
            classificacao = 'sobrepeso';
        } else if (valorIMC <40){
            classificacao = 'obesidade';
        } else{
            classificacao = 'obesidade grave, cuidado!!';
        }
          


        resultado.textContent = `Seu IMC é ${valorIMC} e sua classificação é:${classificacao}.`;

        /*SE a altura for diferente de em branco e peso
        for difererente de em branco faça
        !== diferente
        == igual
        > maior
        < menor
        '' espaço em branco*/
    }
    else{
        resultado.textContent = `Preencha todos os campos!!`;
    }
}
calcular.addEventListener('click', imc)
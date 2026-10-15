 function registrarabast() {

    let modelo = prompt("Digite o modelo do veículo")
    let placa = prompt("Digite a placa do veículo")

    let combustivel = prompt("Digite o tipo de combustível (ETANOL ou GASOLINA):")

    let valorLitro = parseFloat(prompt("Digite o valor do litro (R$):"));
    let quantidadeLitros = parseFloat(prompt("Digite a quantidade de litros abastecidos:"));

    let dataAtual = new Date();
    let dataHoraFormatada = dataAtual.toLocaleString('pt-BR');

    let relatorioHTML = `
        <div class="nota-fiscal">
            <h3>------------ RELATÓRIO DE ABASTECIMENTO -------------</h3>
            <p><strong>Data e Hora do abastecimento:</strong> ${dataHoraFormatada}</p>
            <p><strong>Modelo do Veículo:</strong> ${modelo}</p>
            <p><strong>Placa do Veículo:</strong> ${placa}</p>
            <p><strong>Tipo do Combustível:</strong> ${tipoCombustivel.toUpperCase()}</p>
            <p><strong>Valor do Litro:</strong> R$ ${valorLitro.toFixed(2)}</p>
            <p><strong>Quantidade de litros abastecidos:</strong> ${quantidadeLitros.toFixed(2)} L</p>
            <p><strong>Valor Total a Pagar:</strong> R$ ${valorTotal.toFixed(2)}</p>
            <hr>
            <p><em>Observação: Valor do Imposto (25%) = R$ ${valorImposto.toFixed(2)}</em></p>
        </div>
    `;

    
 }

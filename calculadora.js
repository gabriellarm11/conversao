function calcularDesconto() {
    const preco = parseFloat(document.getElementById('preco').value);
    const desconto = parseFloat(document.getElementById('desconto').value);

    if (isNaN(preco) || isNaN(desconto)) {
      document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
      return;
    }

    const valorDesconto = (desconto / 100) * preco;
    const precoFinal = preco - valorDesconto;

    document.getElementById('resultado').innerHTML =
      `valor do Desconto : R$ ${valorDesconto.toFixed(2)}<br>` +
      `Preço final com desconto : R$ ${precoFinal.toFixed(2)}`;
  }
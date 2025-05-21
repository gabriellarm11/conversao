function converter() {
    const dolarInput = document.getElementById('dolar');
    const resultado = document.getElementById('resultado');
    const dolar = parseFloat(dolarInput.value);
    const taxaCambio = 5.69; // Cotação fixa
  
    if (dolarInput.value.trim() === '' || isNaN(dolar)) {
      resultado.style.color = 'red';
      resultado.textContent = "por favor, insira um valor valido";
      return;
    }
  
    const real = dolar * taxaCambio;
    
    resultado.innerHTML = `
      US$ ${dolar.toFixed(2)}<br>
      R$ ${real.toFixed(2).replace('.', ',')}
    `;
  }
  
function mudarCor() {
    let valor = document.querySelector("select").value;
    let quadrado = document.getElementById("quadrado");
 
    if (valor === "vermelho") {
        quadrado.style.backgroundColor = "red";
    } else if (valor === "verde") {
        quadrado.style.backgroundColor = "green";
    } else if (valor === "azul") {
        quadrado.style.backgroundColor = "blue";
    } else {
        quadrado.style.backgroundColor = "lightgray"; 
    }
}
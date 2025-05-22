function calcularMedia() {
    const nota1 = document.getElementById('nota1').value
    const nota2 = document.getElementById('nota2').value
    const nota3 = document.getElementById('nota3').value

  
    if (nota1 == "" || nota2 == "" || nota3 == "") {
      document.getElementById('resultado').textContent = "Preencha todas as 3 notas."
      return
    }


    const n1 = Number(nota1)
    const n2 = Number(nota2)
    const n3 = Number(nota3)

    const media = (n1 + n2 + n3) / 3

    let status = ""

    if (media >= 7) {
      status = "Aprovado "
    } else if (media >= 6) {
      status = "Recuperação "
    } else {
      status = "Reprovado "
    }

    document.getElementById('resultado').innerHTML =
      `Media : ${media.toFixed(2)}<br>Status: ${status}`
  }
//Código do Lube
function gerarAleatorios() {
  var vetor = [];
  while (vetor.length < 6) {
    var aleatorio = Math.floor(Math.random() * 60 + 1);
    if (vetor.includes(aleatorio)) {
      continue;
    }
    {
      vetor.push(aleatorio);
    }
  }
  console.log("Gerações:", geracoes);
  console.log("Finais:", vetor);
}

//Código do pae
function gerarAleatorios() {
  const numeros = new Set();

  while (numeros.size < 6) {
    let aleatorio = Math.floor(Math.random() * 60) + 1;
    numeros.add(aleatorio);
  }
  return Array.from(numeros);
}
//Com isso a melhoria é de +/-20% pois o Set elimina a duplicidade

function checaAnagrama (palavra) {
  let substring = []
  let contador = 0
  for (let i = 0; i < palavra.length; i++) {
    for (let j = i; j < palavra.length; j++) {
      substring.push(palavra.slice(i, j+1).split('').sort())
    }
  }

  for (let i = 0; i < substring.length - 1; i++) {
    for (let j = i + 1; j < substring.length; j++) {
      if(JSON.stringify(substring[i]) === JSON.stringify(substring[j])) {
        contador++
      }
    }
    
  }

  return contador
}

export { checaAnagrama }

function escada(degraus) {
  let degrau
  for (let i = 1; i <= degraus; i++){
    degrau = ' '.repeat(degraus - i) + '*'.repeat(i)
    console.log(degrau)
  }
}
import {colors} from './colors.js'

// mensagens padrão de sucesso e erro
const msgSucesso = colors.greenBold('🠕🠕🠕 TESTE PASSOU ✅')
const msgErro = colors.redBold('🠕🠕🠕 ERRO NO TESTE ❌')
const linha = "================================\n"

// funcões para exibir o resultado do teste no console
const printSuccesso = () => console.log(msgSucesso)
const printErro = () => console.log(msgErro)
const printLinha = () => console.log(linha)

const bateriaDeTeste = (modulo) => {
  console.log(`\n${colors.magentaBold(modulo)}`)
}

const seEsperaQue = (teste) => ({
  seja: (esperado) => { 
    if (teste === esperado){
      printSuccesso()
      printLinha()
    } else {
      printErro()
      printLinha()
    }
  },

  naoSeja: (esperado) => { 
    if (teste !== esperado){
      printSuccesso()
      printLinha()
    } else {
      printErro()
      printLinha()
    }
  }
})

const esteTeste = (descricao, resultado, funcaoCallback) => {
    console.log(`\n${colors.bold(descricao)}${colors.reset}\nRESULTADO: ${resultado}`)
    funcaoCallback()
}

export {
  esteTeste, 
  seEsperaQue,
  bateriaDeTeste
}

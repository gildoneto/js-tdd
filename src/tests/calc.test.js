import { somaDoisNumeros } from '../calc.js'

function rodarTestes() {

  // mensagens padrão de sucesso e erro
  const msgSucesso = "\x1b[1;32m 🠕🠕🠕 TESTE PASSOU ✅ \x1b[0m"
  const msgErro = "\x1b[1;41m 🠕🠕🠕 ERRO NO TESTE ❌ \x1b[0m"
  const linha = " ================================\n"

  // funcões para exibir o resultado do teste no console
  const printSuccesso = () => console.log(`${msgSucesso}`)
  const printErro = () => console.log(`${msgErro}`)
  const printLinha = () => console.log(linha)

  /**
  * função padrão dos frameworks de teste
  * @param {any} teste
  * @returns 
  */
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
  
  /**
   * Recebe a descrição e função que testará o caso
   * @param {string} descricao
   * @param {RequestCallback}  funcaoCallback 
   */
  const esteTeste = (descricao, funcaoCallback) => {
      console.log(`\n${descricao}`)
      funcaoCallback()
  }
  
  esteTeste(' Deveria retornar 50',
  () => {
    seEsperaQue(somaDoisNumeros(20,30)).seja(50)
  })

  esteTeste(' Deveria retornar uma string concatenada',
  () => {
     seEsperaQue(somaDoisNumeros(30,'texto')).seja('30texto')
  })

  esteTeste(' Deveria retornar "22"',
  () => {
    seEsperaQue(somaDoisNumeros(2,'2')).seja('23')
  })

  esteTeste(' Não deveria retornar 10',
  () => {
    seEsperaQue(somaDoisNumeros(1,8)).naoSeja(10)
  })
  
}

rodarTestes()

import soma from './soma.js'
import {esteTeste, seEsperaQue} from './framework.js'

esteTeste('2 + 2 DEVERIA SER 4', `RESULT: ${soma(2,2)}`,
() => {
  seEsperaQue(soma(2,2)).seja(4)
})

esteTeste('1 + 1 DEVERIA SER 2', `RESULT: ${soma(1,1)}`,
() => {
  seEsperaQue(soma(1,1)).seja(3)
})

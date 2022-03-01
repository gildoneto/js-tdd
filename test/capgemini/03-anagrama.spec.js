import { checaAnagrama } from '../../src/capgemini/03-anagrama.js';
import {bateriaDeTeste, esteTeste, seEsperaQue} from '../../utils/framework.js'

  bateriaDeTeste('=== INÍCIO TESTE ANAGRAMA ===')  

  esteTeste('A PALAVRA "OVO" DEVERIA RETORNAR 2', checaAnagrama('ovo'),
  () => {
    seEsperaQue(checaAnagrama('ovo')).seja(2)
  })

  esteTeste('A PALAVRA "ifailuhkqq" DEVERIA RETORNAR 2', checaAnagrama('ifailuhkqq'),
  () => {
    seEsperaQue(checaAnagrama('ifailuhkqq')).seja(3)
  })

  bateriaDeTeste('=== FIM TESTE ANAGRAMA ===')  


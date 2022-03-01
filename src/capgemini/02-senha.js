let especiais = /[!@#$%^&*()-+]/;
let maiusculas = /[A-Z]/;
let minusculas = /[a-z]/;
let numeros = /[0-9]/;

function testaSenha(senha) {
  
  // total de validaçoes de segurança
  let total = 0;
  
  if (especiais.test(senha)) ++total;
  if (maiusculas.test(senha)) ++total;
  if (minusculas.test(senha)) ++total;
  if (numeros.test(senha)) ++total;

  if(senha.length >= 6 && validacoes == 4){
    console.log('Senha OK');
  } else if(senha.length < 6 && validacoes == 4){
    console.log(6 - senha.length);
  } else if (senha.length >= 6 && validacoes < 4){
    console.log((4 - validacoes));
  } else if (senha.length < 6 && validacoes < 4){
    console.log(Math.max(6 - senha.length, 4 - validacoes) + 'MathMax');
  }
  
}

testaSenha('Oi')
// Referencia => https://misc.flogisoft.com/bash/tip_colors_and_formatting

let colors = {
  reset: '\x1b[0m',

  //text color

  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',

  //background color

  blackBg: '\x1b[40m',
  redBg: '\x1b[41m',
  greenBg: '\x1b[42m',
  yellowBg: '\x1b[43m',
  blueBg: '\x1b[44m',
  magentaBg: '\x1b[45m',
  cyanBg: '\x1b[46m',
  whiteBg: '\x1b[47m'

  //
  
}

console.log(colors.redBg + 'Teste background' + colors.reset)

// console.log('\x1b[31m this is red color on text');
// console.log('\x1b[0m this is reset');
// console.log('\x1b[41m this is red color on background');
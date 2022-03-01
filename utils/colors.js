// Referencia => https://misc.flogisoft.com/bash/tip_colors_and_formatting

let colors = {
  
  reset: '\x1b[0m',

  turn: function (style, frase) {return `${style}${frase}${this.reset}`},
  
  //mixed styles
  greenBold: function (frase){return this.turn('\x1b[1;32m', frase)},
  redBold: function (frase){return this.turn('\x1b[1;41m', frase)},
  magentaBold: function (frase){return this.turn('\x1b[1;35m', frase)},

  //styles
  bold: function (frase){return this.turn('\x1b[1m', frase)},
  underlined: () => `\x1b[4m`,
  blink: () => `\x1b[5m`,

  //text color
  black: `\x1b[30m`,
  red: `\x1b[31m`,
  green: `\x1b[32m`,
  yellow: `\x1b[33m`,
  blue: `\x1b[34m`,
  magenta: `\x1b[35m`,
  cyan: `\x1b[36m`,
  white: `\x1b[37m`,

  //background color
  blackBg: `\x1b[40m`,
  redBg: `\x1b[41m`,
  greenBg: `\x1b[42m`,
  yellowBg: `\x1b[43m`,
  blueBg: `\x1b[44m`,
  magentaBg: `\x1b[45m`,
  cyanBg: `\x1b[46m`,
  whiteBg: `\x1b[47m`
  
}

// console.log(`${colors.greenBold('Algo verde')} ${colors.redBold('Algo vermelho')} reset`)

export {colors}
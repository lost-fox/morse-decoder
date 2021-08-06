const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let text = '';
    for (let i=0; i<expr.length;i+=10){
      let unit; 
      if (expr[i]==='1' || expr[i]==='0'){
        unit = expr.substr(i,10);
      } else{ 
      unit = expr.substr(i,8);
      }
      
      if (unit=='********'){
        text +=' ';
      } else{
        let letter='';
        for (let j=0; j<unit.length; j+=2){
          let sumbol = unit.substr(j,2)
          if (sumbol === '10'){
            letter +='.';
          }
          if (sumbol ==='11'){
            letter +='-';
          }
        }
        text += MORSE_TABLE[letter]
      }
    }
    return text;
}

module.exports = {
    decode
}
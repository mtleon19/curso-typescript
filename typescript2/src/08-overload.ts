// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Nico');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray reverse', 'Nico =>' ,rtaArray);

const rtaStr = parseStr(['N','i','c','o']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  console.log('rtaStr', "['N','i','c','o'] =>",rtaStr.toLowerCase());
  const nuevo_rtaStr = rtaStr.toLowerCase();
  console.log('rtaStr lower case', "['N','i','c','o'] =>",nuevo_rtaStr);
}



const var1 = "MeLiSSA";
console.log(var1.toLowerCase());

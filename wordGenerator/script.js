const prefixes = [
  'a', 'an', 'auto', 'anti',
  'co', 'con', 'di', 'de',
  'en', 'ex', 'in', 'non',
  'sub', 'tri', 'uni', 'un',
  'ed'
];

const begConsonants = [
  'bl', 'br', 'cl', 'cr',
  'dr', 'fr', 'tr', 'fl',
  'gl', 'gr', 'pl', 'pr',
  'sl', 'sm', 'sp', 'st',
  'tr'
];

const vowels = [
  'a', 'e', 'i', 'o', 'u'
];

const consonants = [
  'b', 'c', 'd', 'f', 'g',
  'h', 'j', 'k', 'l', 'm',
  'n', 'p', 'q', 'r', 's',
  't', 'v', 'w', 'x', 'z'
];

const endConsonants = [
  'ct', 'ck', 'ft', 'ks',
  'ld', 'lf', 'lp', 'lt',
  'mp', 'nd', 'nk', 'nt',
  'pt', 'rd', 'rk', 'rt',
  'sk', 'sp', 'st', 'sm'
];

const suffixes = [
  'acy', 'al', 'dom', 'ecy',
  'er', 'ism', 'ist', 'ment',
  'or', 'tion', 
];

function choice(list) {
  return list[Math.floor(Math.random() * list.length)];
};

function conjoin(list) {
  word = '';
  for (const items of list) {
    word = word.concat(choice(items))
  };
  
  return word;
};

const modes = [
  new Array(prefixes, begConsonants, vowels, endConsonants, suffixes),
  new Array(prefixes, begConsonants, vowels, endConsonants),
  new Array(begConsonants, vowels, endConsonants, suffixes),
  new Array(begConsonants, vowels, endConsonants),
  new Array(prefixes, vowels, begConsonants, vowels, endConsonants, suffixes),
  new Array(prefixes, vowels, begConsonants, vowels, endConsonants),
  new Array(vowels, begConsonants, vowels, endConsonants, suffixes),
  new Array(vowels, begConsonants, vowels, endConsonants),
  new Array(prefixes, vowels, begConsonants, vowels, endConsonants, suffixes),
  new Array(prefixes, vowels, begConsonants, vowels, endConsonants),
  new Array(vowels, begConsonants, vowels, endConsonants, suffixes),
  new Array(vowels, begConsonants, vowels, endConsonants),
  new Array(prefixes, consonants, vowels, endConsonants, suffixes),
  new Array(prefixes, consonants, vowels, endConsonants),
  new Array(consonants, vowels, endConsonants, suffixes),
  new Array(consonants, vowels, endConsonants),
  new Array(prefixes, vowels, consonants, vowels, endConsonants, suffixes),
  new Array(prefixes, vowels, consonants, vowels, endConsonants),
  new Array(vowels, consonants, vowels, endConsonants, suffixes),
  new Array(vowels, consonants, vowels, endConsonants),
  new Array(prefixes, consonants, vowels, consonants, suffixes),
  new Array(prefixes, consonants, vowels, consonants),
  new Array(consonants, vowels, consonants, suffixes),
  new Array(consonants, vowels, consonants)
];

function createWord() {
  let word = '';
  mode = Math.floor(Math.random() * modes.length);
  selections = modes[mode];
  
  word = conjoin(selections);
  
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word.replace('tt', 't').replace('ii', 'i').replace('dd', 'd');
};

document.getElementById("generateBtn").onmousedown = function () {
  document.getElementById('generatedWord').innerText = createWord();
};

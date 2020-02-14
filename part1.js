/*1. ¿Cómo encontraría usted el número faltante dado un arreglo no ordenado que
contenga una secuencia de enteros del 1 al 100, y le falte un número?*/

const one = () => {
  const a = [8, 9, 2, 3, 4, 5, 6, 7];
  const sort_a = a.sort((a, b) => a - b);
  for (let i = 1; i < sort_a.length - 1; i++) {
    if (sort_a.indexOf(i) == -1) {
      return i;
    }
  }
};

console.log('===> one:', one());

/*2.  ¿Cómo encontraría usted el primer número que aparezca duplicado 
en un arreglo de enteros desordenados?*/

const two = () => {
  const a = [8, 9, 2, 3, 4, 5, 2, 7];
  const sort_a = a.sort((a, b) => a - b);
  for (let i = 0; i < sort_a.length - 1; i++) {
    if (sort_a[i] === sort_a[i + 1]) {
      return sort_a[i];
    }
  }
  return sort_a[0];
};

console.log('===> two:', two());

/*3. ¿Cómo reversaría usted el orden de un 
arreglo de enteros? */

const three = () => {
  const a = [8, 9, 2, 3, 4, 5, 2, 7];
  let res = [];
  while (a.length) {
    res.push(a.pop());
  }
  return res;
};

console.log('===> three:', three());

/*4. ¿Cómo reversaría usted el orden de un 
arreglo de enteros? */

const four = () => {
  let a = 5;
  let b = 7;

  a = a * b;
  b = a / b;
  a = a / b;

  return `a:${a}-b:${b}`;
};

console.log('===> four:', four());

/*5.¿Cómo verificaría usted que una cadena 
de texto es palindrome? (radar, level, rotor, saas)*/

const five = text => {
  const length = text.length;
  let res;
  if (length < 2) {
    res = true;
  } else {
    res =
      text.charAt(0) !== text.charAt(length - 1)
        ? false
        : five(text.substring(1, length - 1));
  }
  return res;
};

console.log('===> five:', five('saas'));

/*6. ¿Cómo reversaría usted una cadena 
de texto utilizando recursión?*/

const six = text => {
  const length = text.length;
  let res;
  if (length < 2) {
    res = text;
  } else {
    res = six(text.substring(1) + text.charAt(0));
  }
  return res;
};

//console.log('===> six:', six('HOLA'));

/*7. ¿Cómo contaría usted el número 
de consonantes en una cadena de texto?*/

const seven = text => {
  let res = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', ''];
  for (let i = 0; i < text.length; i++) {
    const letter = text.charAt(i).toLowerCase();
    console.log('==>', letter);
    if (vowels.indexOf(letter) === -1) {
      res++;
    }
  }
  return res;
};

console.log('===> seven:', seven('HOLA'));

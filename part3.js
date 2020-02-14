const one = () => {
  const evaluations = [1, 2, 3, 4, 5, 1, 3, 3, 3, 4, 5, 2, 5, 4];
  const min = Math.min(...evaluations);
  const max = Math.max(...evaluations);
  const average = Math.round(
    evaluations.reduce((a, b) => a + b, 0) / evaluations.length
  );
  const approved = evaluations.filter(ele => ele >= 3).length;
  const res = `promedio: ${average} - nota mayor: ${max} - nota menor: ${min} 
  - cantidad de personas aprovadas: ${approved}`;
  return res;
};

console.log('===> one:', one());

const two = () => {
  let res = 0;
  for (let index = 0; index < 20; index++) {
    const a = Math.floor(Math.random() * (7 - 1)) + 1;
    const b = Math.floor(Math.random() * (7 - 1)) + 1;
    if (a + b === 10) {
      res++;
    }
  }
  return res;
};
console.log('===> two:', two());

const three = () => {
  const a = [0, 1, 2, 3, 4, 5, 6];
  let res;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      res += `${a[i]} - ${a[j]};`;
    }
  }

  return res;
};
console.log('===> three:', three());

const four = num => {
  const numbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let res = '';
  for (i in numbers) {
    while (numbers[i] <= num) {
      res += i;
      num -= numbers[i];
    }
  }
  return res;
};
console.log('===> four:', four(50));

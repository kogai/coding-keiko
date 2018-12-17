Array.prototype.flatten = function() {
  return Array.prototype.concat.apply([], this);
};

const calculate = ([...xs]) => {
  return xs.map(x => {
    if (x === 'X') {
      return ['10', '0'];
    }
    return [x];
  }).flatten().reduce(({ a, b }, x, i, xs) => {
    b.push(x);
    if (b.length >= 2) {
      a.push([...b]);
      b = [];
    } else if (i === xs.length - 1) {
      a.push([x, 0]);
    }
    return { a, b };
  }, { a: [], b: [] }).a.map(([x, y]) => {
    const xn = Number(x);
    if (y === '/') {
      return [xn, 10 - xn] 
    } else if (y === '-') {
      return [xn, 0];
    }
    return [xn, Number(y)];
  })
  .reduce((acc, line, i, lines) => {
    acc += line[0] + line[1];
    if (i >= 9) return acc;
    if (line[0] >= 10 && lines[i + 1] && lines[i + 2] && lines[i + 1][0] >= 10) {
      acc += lines[i + 1][0] + lines[i + 2][0];
    } else if (line[0] >= 10 && lines[i + 1]) {
      acc += lines[i + 1][0] + lines[i + 1][1];
    } else if (line[0] + line[1] >= 10 && lines[i + 1]) {
      acc += lines[i + 1][0];
    }
    return acc;
  }, 0);
};

module.exports = {
  calculate,
};


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const obj = {
  "1": [1, 2, 4],
  "2": [2, 1, 3, 5],
  "3": [3, 2, 6],
  "4": [4, 1, 5, 7],
  "5": [5, 2, 4, 6, 8],
  "6": [6, 3, 5, 9],
  "7": [7, 4, 8],
  "8": [8, 7, 5, 9, 0],
  "9": [9, 6, 8],
  "0": [0, 8]
};

rl.on("line", out => {
  const pin_code = out.split("");
  const pin_len = pin_code.length;
  const res = [];

  function pin(pin_code, pin_len, i = 0, acc = []) {
    // console.log(
    //   `pin_code: ${pin_code}, pin_len: ${pin_len}, i: ${i}, acc: ${acc}`
    // );

    if (i > pin_len - 1) {
      // console.log(`${acc.toString()}`);
      // console.log(acc);

      res.push(acc.reduce((a, b) => (a += b), ""));
      // console.log(res);
    } else {
      obj[pin_code[i]].forEach((element, index) => {
        acc.push(element);
        pin(pin_code, pin_len, ++i, acc);
        --i;
        acc.pop();
      });
    }
  }

  pin(pin_code, pin_len);

  console.log(res.sort().toString());

  rl.close();
});

let input = document.getElementById("input");
let submitBtn = document.getElementById("submit");
let p = document.querySelectorAll("p");

/* let nbre;
let res1 = nbre / 20;
let modulo1 = nbre % 20;
let res2 = modulo1 / 10;
let modulo2 = modulo1 % 10;
let res3 = modulo2 / 5;
let modulo3 = modulo2 % 5;
let res4 = modulo3 / 2;
let modulo4 = modulo3 % 2;
let res5 = modulo4 / 1;
let modulo5 = modulo4 % 1; */

function minCoins(nombre) {
  let nbre = Number(input.value);
  //   console.log(input);

  let res1 = parseInt(nbre / 20);
  let modulo1 = parseInt(nbre % 20);
  let res2 = parseInt(modulo1 / 10);
  let modulo2 = parseInt(modulo1 % 10);
  let res3 = parseInt(modulo2 / 5);
  let modulo3 = parseInt(modulo2 % 5);
  let res4 = parseInt(modulo3 / 2);
  let modulo4 = parseInt(modulo3 % 2);
  let res5 = parseInt(modulo4 / 1);
  let modulo5 = parseInt(modulo4 % 1);

  if (res1 != 0 || modulo1 == 0) {
    p[0].textContent = `You need ${res1} bills of 20`;
  }
  if (res2 != 0) {
    p[1].textContent = `You need ${res2} pieces of 10`;
  }
  if (res3 != 0) {
    p[2].textContent = `You need ${res3} pieces of 5`;
  }
  if (res4 != 0) {
    p[3].textContent = `You need ${res4} pieces of 2`;
  }
  if (res5 != 0) {
    p[4].textContent = `You need ${res5} pieces of 1`;
  }
}

submitBtn.addEventListener("click", function () {
  console.log(input.value);
  minCoins(input.value);
});

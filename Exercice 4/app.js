let res = 0;
function somme() {
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res
}


console.log(somme(1, 3, 5, 9))
const input = document.getElementById("number");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  let number = input.value;
  const result = document.getElementById("result");
  // si el numero no existe en romano, no mostrar
  if (romanize(number) === "" || romanize(number) >= 'MMMMM') {
    result.innerHTML = "It's not a valid number";
  } else {
    result.innerHTML = number + " = " + romanize(number);
  }
  result.style.display = "block";
  result.style.marginTop = "100px";
  result.style.fontSize = "3em";
  result.style.textAlign = "center";
});

function romanize(input) {
  let lookup = {
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
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (input >= lookup[i]) {
      roman += i;
      input -= lookup[i];
    }
  }
  return roman;
}

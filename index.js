const input = document.getElementById("number");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  let number = input.value;
  const result = document.getElementById("result");
  if (number === "" || number < 1 || number > 5000) {
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
  let roman = "";
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
  };
  for (let i in lookup) {
    while (input >= lookup[i]) {
      roman += i;
      input -= lookup[i];
    }
  }
  return roman;
}
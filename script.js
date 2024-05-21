const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("output");


const convertToRoman = (num) => {
  resultDiv.classList.remove("alert")
  let romanNumeral = "";
  const rules = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }
  for (let i=0; i < Object.keys(rules).length; i++) {
    if (Object.values(rules)[i] <= num) {
      num -= Object.values(rules)[i];
      romanNumeral = romanNumeral + Object.keys(rules)[i];
      i--;
    };
  };
  resultDiv.textContent = romanNumeral;
};


const checkInput = (num) => {
  if (num === ""){
    resultDiv.classList.add("alert");
    resultDiv.classList.remove("hidden");
    resultDiv.textContent = "Please enter a valid number";
    return;
  } else if (num <= 0) {
    resultDiv.classList.add("alert");
    resultDiv.classList.remove("hidden");
    resultDiv.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (num >= 4000) {
    resultDiv.classList.add("alert");
    resultDiv.classList.remove("hidden");
    resultDiv.textContent = "Please enter a number less than or equal to 3999";
  } else {
    resultDiv.classList.add("result");
    resultDiv.classList.remove("hidden");
    convertToRoman(num)
  };
};


convertBtn.addEventListener("click", () => {
  checkInput(input.value);
});


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput(input.value);
  }
});

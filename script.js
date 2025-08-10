const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const validUSNumber = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (validUSNumber.test(input)) {
    resultsDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});
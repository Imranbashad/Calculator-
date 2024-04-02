const userInput = document.querySelector(".user-input");
const Keyy = document.querySelectorAll(".Key");
const resetKey = document.querySelector(".reset-Key");
const answerKey = document.querySelector(".answer-Key");
const delKey = document.querySelector(".delete-key");

let lastKeyIsOperator = false;
let decimalAdded = false;
// reset key ----------------------------------------------------------------------
resetKey.addEventListener("click", () => {
    userInput.value = "";
});
// delete Key -------------------------------------------------------------------------
delKey.addEventListener("click", () => {
    let initialValue = userInput.value;
    let updatedValue = initialValue.substring(0, initialValue.length - 1);
    userInput.value = updatedValue;
});
// keys ----------------------------------------------------------------------------------
const arraykeys = Array.from(Keyy);
arraykeys.forEach((Key) => {
    Key.addEventListener("click", (eventt) => {
        console.log(eventt.target.innerText);
        const value = eventt.target.innerText;

        if (value === "." && decimalAdded) {
            return;
        }
        if ("+-X/".includes(value)) {
            if (lastKeyIsOperator) {
                let initialValue = userInput.value;
                let updatedValue =
                    initialValue.substring(0, initialValue.length - 1) + value;
                userInput.value = updatedValue;
                return;
            }
            lastKeyIsOperator = true;
            decimalAdded = false;
        } else {
            lastKeyIsOperator = false;
            if (value === ".") {
                decimalAdded = true;
            }
        }
        userInput.value += value;
    });
});
// answer keys --------------------------------------------------------------
answerKey.addEventListener("click", () => {
    const expression = userInput.value;
    const formattedExpression = expression.replace("X", "*");
    const result = eval(formattedExpression);
    userInput.value = result;
})

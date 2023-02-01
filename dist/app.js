console.log("Hello World!");
let age = 22;
let stringAge = "dwadzieścia dwa";
stringAge = `${age}`;
console.log(stringAge);
const add = (n1, n2) => n1 + n2;
console.log(add(22, 43));
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const addButton = document.querySelector("button");
addButton.addEventListener("click", () => {
    const sum = add(Number(input1.value), Number(input2.value));
    console.log(sum);
});

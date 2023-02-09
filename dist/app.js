console.log("Hello World!");
const categories = ["important", "done", "low priority"];
let age = 22;
let stringAge = "dwadzieścia dwa";
stringAge = `${age}`;
console.log(stringAge);
const add = (n1, n2) => n1 + n2;
console.log(add(22, 43));
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const addButton = document.querySelector("#button1");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
addButton.addEventListener("click", () => {
    const sum = add(Number(input1.value), Number(input2.value));
    console.log(sum);
});
const logInput = (input) => {
    console.log(`Wpisałem w inpucie: ${input}`);
};
const logButton = document.querySelector("#button2");
logButton.addEventListener("click", () => {
    logInput(input3.value);
    logInput(Number(input4.value));
});
const categoriesList = document.querySelector("#categories");
const pElement = document.createElement("p");
const listElement = document.createElement("ul");
let selectedCategory;
const renderSelected = () => {
    console.log(selectedCategory);
    pElement.innerText = `Selected category: ${selectedCategory}`;
    categoriesList.appendChild(pElement);
};
const handleCategoryChange = (category) => {
    if (category === "done") {
        document.body.style.background = "green";
    }
    else if (category === "important") {
        document.body.style.background = "red";
    }
    else if (category === "low priority") {
        document.body.style.background = "yellow";
    }
    else {
        const never = category;
        console.log(never);
    }
};
const render = () => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "category";
        //radioButton.value = category;
        radioButton.id = `category-${category}`;
        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", `category-${category}`);
        radioLabel.innerText = category;
        categoryElement.appendChild(radioButton);
        categoryElement.appendChild(radioLabel);
        listElement.appendChild(categoryElement);
        radioButton.addEventListener("change", () => {
            selectedCategory = category;
            renderSelected();
            handleCategoryChange(selectedCategory);
        });
    });
    categoriesList.appendChild(listElement);
};
render();
export {};

import { Category } from './types/types'

console.log("Hello World!");

const categories: Array<Category> = ["important", "done", "low priority"]

let age: number = 22;

let stringAge: string = "dwadzieścia dwa";
stringAge = `${age}`;

console.log(stringAge);
const add = (n1: number, n2: number) => n1 + n2;

console.log(add(22, 43));

const input1: HTMLInputElement = document.querySelector("#input1");
const input2: HTMLInputElement = document.querySelector("#input2");
const addButton = document.querySelector("#button1");
const input3: HTMLInputElement = document.querySelector("#input3");
const input4: HTMLInputElement = document.querySelector("#input4");

addButton.addEventListener("click", () => {
    const sum = add(Number(input1.value), Number(input2.value));
    console.log(sum);
});

const logInput = (input: number | string) => {
    console.log(`Wpisałem w inpucie: ${input}`);
};

const logButton = document.querySelector("#button2");
    logButton.addEventListener("click", () => {
        logInput(input3.value);
        logInput(Number(input4.value));
});


const categoriesList: HTMLDivElement = document.querySelector("#categories");
const pElement: HTMLParagraphElement = document.createElement("p");
const listElement: HTMLElement = document.createElement("ul");
let selectedCategory: Category;

const renderSelected = () => { 
    console.log(selectedCategory);
    pElement.innerText = `Selected category: ${selectedCategory}`
    categoriesList.appendChild(pElement);
}

const handleCategoryChange = (category: Category) => {
    if (category === "done") {
        document.body.style.background = "green"
    } else if (category === "important") {
        document.body.style.background = "red"
    } else if (category === "low priority") {
        document.body.style.background = "yellow"
    } else {
        const never: never = category;
        console.log(never);
    }
}

const render = () => {
    categories.forEach(category => {
        const categoryElement: HTMLElement = document.createElement("li");
        const radioButton: HTMLInputElement = document.createElement("input")
        radioButton.type = "radio";
        radioButton.name = "category";
        //radioButton.value = category;
        radioButton.id = `category-${category}`
        const radioLabel: HTMLLabelElement = document.createElement("label");
        radioLabel.setAttribute("for", `category-${category}`)
        radioLabel.innerText = category;
        categoryElement.appendChild(radioButton);
        categoryElement.appendChild(radioLabel);
        listElement.appendChild(categoryElement);
        radioButton.addEventListener("change", () => {
            selectedCategory = category;
            renderSelected();
            handleCategoryChange(selectedCategory);
        });
    })
    categoriesList.appendChild(listElement);
}

render();




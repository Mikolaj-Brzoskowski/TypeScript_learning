import { Category } from "./types.js";

interface Task {
    title: string;
    done: boolean;
    category? : Category;
};

export { Task };
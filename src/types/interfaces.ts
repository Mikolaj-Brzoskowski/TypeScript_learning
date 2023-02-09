import { Category } from "./types";

interface Task {
    title: string;
    done: boolean;
    category? : Category;
};

export { Task };
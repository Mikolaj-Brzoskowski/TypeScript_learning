import { Gender } from "../types/types";

class Person {
    private name: string;
    private age: number;
    private gender: Gender;
    private createdAt: Date;

    constructor(name: string, age: number, gender: Gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.createdAt = new Date();
    }

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $age
     * @return {number}
     */
	public get $age(): number {
		return this.age;
	}

    /**
     * Getter $gender
     * @return {Gender}
     */
	public get $gender(): Gender {
		return this.gender;
	}

    /**
     * Getter $createdAt
     * @return {Date}
     */
	public get $createdAt(): Date {
		return this.createdAt;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $age
     * @param {number} value
     */
	public set $age(value: number) {
		this.age = value;
	}

    /**
     * Setter $gender
     * @param {Gender} value
     */
	public set $gender(value: Gender) {
		this.gender = value;
	}

    /**
     * Setter $createdAt
     * @param {Date} value
     */
	public set $createdAt(value: Date) {
		this.createdAt = value;
	}

    
}
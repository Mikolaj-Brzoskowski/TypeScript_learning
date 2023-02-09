class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.createdAt = new Date();
    }
    /**
     * Getter $name
     * @return {string}
     */
    get $name() {
        return this.name;
    }
    /**
     * Getter $age
     * @return {number}
     */
    get $age() {
        return this.age;
    }
    /**
     * Getter $gender
     * @return {Gender}
     */
    get $gender() {
        return this.gender;
    }
    /**
     * Getter $createdAt
     * @return {Date}
     */
    get $createdAt() {
        return this.createdAt;
    }
    /**
     * Setter $name
     * @param {string} value
     */
    set $name(value) {
        this.name = value;
    }
    /**
     * Setter $age
     * @param {number} value
     */
    set $age(value) {
        this.age = value;
    }
    /**
     * Setter $gender
     * @param {Gender} value
     */
    set $gender(value) {
        this.gender = value;
    }
    /**
     * Setter $createdAt
     * @param {Date} value
     */
    set $createdAt(value) {
        this.createdAt = value;
    }
}
export {};

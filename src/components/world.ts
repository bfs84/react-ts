export class World {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public sayHello(elem) {
        if (elem) {
            elem.innerText = this.message;
        }
    }
}
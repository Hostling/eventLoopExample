const EventEmitter = require('events');

class User extends EventEmitter {
    constructor() {
        super();
    }

    create(data) {
        this.emit("userCreated", data);
        return data;
    }
}

const user = new User();

user.on("userCreated", (msg) => {
    console.log("user created", msg);
});

user.create({ id: 1, name: "admin" });
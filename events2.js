const EventEmitter = require('events');

class User extends EventEmitter {
    constructor() {
        super();
    }

    create(data) {
        this.emit("userCreated", data);
    }
    edit(data) {
        this.emit("userEdited", data);
    }
    delete(data) {
        this.emit("userDeleted", data);
    }
}

const user = new User();

user.once("userCreated", (msg) => {
    console.log("user created", msg);
});

user.on("userEdited", (msg) => {
   console.log("user edited first");
});

user.on("userEdited", (msg) => {
    console.log("user edited second");
});

user.on("userEdited", (msg) => {
    console.log("user edited third");
});

user.on("userDeleted", (msg) => {
   console.log("user deleted");
});

user.create({ id: 1, name: "admin" });
user.edit();
user.delete();

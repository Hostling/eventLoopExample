const assert = require("assert");

const post1 = { title: "test1" };
const post2 = post1;
// const post2 = { ...post1 };
// const post2 = Object.assign({}, post1);

assert.strictEqual(post1, post2);
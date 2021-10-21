setTimeout(() => {
    console.log(1, 'First');
    setTimeout(() => {
        console.log(2,'First and half');
    }, 1000);
}, 5000);


console.log(3, "Second");

setTimeout(() => {
    console.log(4,"Third");
}, 2000);

console.log(5, "Next");
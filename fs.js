const fs = require("fs");

// асинхронное чтение
fs.readFile("test.txt",
    function(error,data){
        console.log("Асинхронное чтение файла");
        if(error) throw error; // если возникла ошибка
        console.log(data);  // выводим считанные данные
    });

// синхронное чтение
console.log("Синхронное чтение файла")
const fileContent = fs.readFileSync("test.txt", "utf8");
console.log(fileContent);

/*
	SIMPLE WAY

function recursion (x) {
    let key;
    for (key in x) {
        b[key] = x[key];
    }
    return b;
}
b = recursion (a);
console.log(a);
console.log(b);*/


let a = {
    'first': 'first',
    'second': 'second',
    'third': {
        'a': 'a',
        'b': 'b',
        'c': 'c',
        'd': [1,2,3,4,5,6,7,8,9,10]
    }
};

let b = {};

function recursion (obj) {                      // Передаем аргумент заполненого обьекта
    let key;                                    // Задаем пустой ключ для копирования ключей
    let rtn = {};                               // Задаем пример пустого объекта
    if (Array.isArray(obj)) {                   // Проверка на пустой объект
        for (key in obj) {                      // Вытягиваем ключи с объекта
            rtn[key] = recursion(obj[key]);     // В пустой ключ объекта копируем результат функции в которой аргументом есть
                                                // ключ обьекта, который в свою очередь может быть объектом
        }
    } else {
        return obj;                             // Возвращаем объект если в нем больше нету вложенных объектов
    }
    return rtn;                                 // Возвращаем скопированный полностью объект
}

b = recursion (a);                              // Копируем объект b вызывая фу-ю а
console.log(b);

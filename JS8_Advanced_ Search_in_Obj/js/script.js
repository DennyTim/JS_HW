/* function filterCollection(vehicles, questions, allEntrances, c, d, e, f, g) {
    let result = {};
    let countOfEntrances;

    if (typeof(vehicles) == 'object' || Array.isArray(vehicles)) {                          // проверка на массив или обьект

        for (let j in vehicles) {
            rez = filterCollection(vehicles[j], questions, allEntrances, c, d, e, f, g);    // рекурсия проверки на обьект
            if (rez) {                                                                      // true or false  от return vehicles or false
                result [j] = rez;
            }
        }

    } else {

        questions = questions.split(' ');                                                   // закинули в массив для проверки нескольких слов
        let q,v;

        v = vehicles.toLowerCase();      // vehicles появилось строка после перебора на вложенность, если вложенности нету в vehicles появилась строка
        countOfEntrances = 0;                                                               // количество входящих слов
        for (let i = 0; i < questions.length; i++) {
            q = questions[i].toLowerCase();
            if (v.indexOf(q) >= 0) {                                                        // ищем совпадения в значении ключа обьекта
                countOfEntrances++;
            }
        }

        if ((allEntrances === true && countOfEntrances == questions.length) || (allEntrances === false && countOfEntrances > 0)) {
            return vehicles;
        } else {
            return false;
        }
    }

    return result;
} */

function filterCollection(arrayOfObjects, questions, allEntrances) {

    let result = [];
    let args = [];

    for (let i = 0; i < arguments.length; i++) {                        //!!! Массив аргументов которые были переданы не явно помещены с помощью
        if (i < 3) {                                                    //!!! встроенного метода arguments
            continue;
        }
        args.push(arguments[i]);
    }

    //console.log(args);

    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (args.length > 0) {
            for (let j = 0; j < args.length; j++) {                     // Передаем аргументы в котором находяться полные пути для обьектов

                pathes = args[j].split('.');                            // сплит делает с путей obj.name -> [obj, name]
                obj = arrayOfObjects[i];
                let flag = false;
                for (let k = 0; k < pathes.length; k++) {
                    if (typeof(obj) != 'object') {
                        flag = true;
                        break;                                          //break если не существует пути
                    }
                    obj = obj[pathes[k]];
                    console.log(obj);
                }

                if (flag) {
                    continue;
                }

                rez = search(arrayOfObjects[i], questions, allEntrances)
                if (rez) {
                    break;                                              //break если нашли нужное значение
                }
            }
        } else {
            rez = search(arrayOfObjects[i], questions, allEntrances);
        }
        if (rez) {
            result.push(arrayOfObjects[i]);
        }
    }
    return result;
}

function search(searchInObject, questions, allEntrances) {
    if (typeof(searchInObject) == 'object' || Array.isArray(searchInObject)) {
        for (let j in searchInObject) {
            rez = search(searchInObject[j], questions, allEntrances);
            if (rez) {
                return true;
            }
        }
    } else {
        questions = questions.split(' ');
        let q, v;

        v = searchInObject.toLowerCase();
        let countOfEntrances = 0;
        for (let i = 0; i < questions.length; i++) {
            q = questions[i].toLowerCase();
            if (v.indexOf(q) >= 0) {
                countOfEntrances++;
            }
        }
        if ((allEntrances === true && countOfEntrances == questions.length)
            || (allEntrances === false && countOfEntrances > 0)
        ) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}

let searchInObject = [{
        'locales': {
            'name': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            },
            'description': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            }
        },
        'contentType': {
            'name': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            },
            'description': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            }
        },
        0: 'aa aa',
        1: 'b bbb',
        2: 'cc cc',
        3: 'ddd dd',
        'name': 'en_USasdasdad ToyotA',
        'description': 'HONDA fasdsasfaf',
        6: 'asfasdad MAZDA',
        7: 'ToyotA asdadsad',
        8: 'dasdsads VW',
        9: 'lIncilno asdadasd'
    }, {
        'locales': {
            'name': {
                0: 'asd',
                1: 'aaa aa',
                2: 'a',
            },
            'description': {
                0: 'asd',
                1: 'a a',
                2: 'a',
            }
        },
        'contentType': {
            'name': {
                0: 'asd',
                1: 'a a',
                2: 'a',
            },
            'description': {
                0: 'asd',
                1: 'a a',
                2: 'a',
            }
        },
        0: 'aa aa',
        1: 'b bbb',
        2: 'cc cc',
        3: 'ddd dd',
        'name': 'a a',
        'description': 'a fasdsasfaf',
        6: 'asfasdad MAZDA',
        7: 'ToyotA asdadsad',
        8: 'dasdsads VW',
        9: 'lIncilno asdadasd'
    }, {
        'locales': {
            'name': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            },
            'description': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            }
        },
        'contentType': {
            'name': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            },
            'description': {
                0: 'asd',
                1: 'en_USasdasdad ToyotA',
                2: 'ToyotA',
            }
        },
        0: 'aa aa',
        1: 'b bbb',
        2: 'cc cc',
        3: 'ddd dd',
        'name': 'en_USasdasdad ToyotA',
        'description': 'HONDA fasdsasfaf',
        6: 'asfasdad MAZDA',
        7: 'ToyotA asdadsad',
        8: 'dasdsads VW',
        9: 'lIncilno asdadasd'
    }
];

let questions = 'en_US Toyota';     //искуемые слова
let allEntrances = true;            //false возвращает все обьекты с совпадением хотя бы одного из слов, true ссвпадение двух слов и порядка

let c = 'name';
let d = 'description';
let e = 'contentType.name';
let f = 'locales.name';
let g = 'locales.description';

console.log(filterCollection(searchInObject, questions, allEntrances, c, d, e, f, g));

function excludeBy(arr1, arr2, parametr) {
    let arrResult = []; 								// создать пустой объект - это будет новый список людей
    arr1.forEach(function (human, index) { 				//в human помещается обьект со всеми свойствами, в index порядковый номер в массиве
        let isCoincidence = false; 						// Флаг для поиска дубликатов во втором списке
        for (let i = 0; i < arr2.length; i++) { 		// перебираем все обьекты в втором массиве
            if (human[parametr] == arr2[i][parametr]) {	// Сверяем списки, при нахождении дубликата флаг = true
                isCoincidence = true; 				
          }
        }
        if (!isCoincidence) { 							// НЕ дубликаты добавляем в результат
            arrResult.push(human); 						
        }
    });
    console.log(arrResult); 							// выводим результат
}

let peopleList = [
{
        name: "Anna",
        surname: "Petrovna",
        gender: "male",
        age: 30
},
{
        name: "Ivan",
        surname: "Ivanov",
        gender: "female",
        age: 30
},

{
        name: "Vano",
        surname: "Ivanov",
        gender: "male",
        age: 30
},
{
        name: "Zina",
        surname: "Ivanov",
        gender: "male",
        age: 30
}];

let excluded = [
{
        name: "Vano",
        surname: "Ivanov",
        gender: "male",
        age: 30
},
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 22
}];
excludeBy(peopleList, excluded, 'name');

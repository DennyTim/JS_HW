/*Задание:

Реализовать функцию, которая будет считать возраст пользователя и его знак зодиака.

Технические требования:

При запуске программы - в диалоговом окне спросить дату рождения пользователя (текст в формате dd.mm.yyyy)
Вывести в модальном окне сообщение: Вам ? лет! - Вместо ? подставить возраст пользователя.
Вывести в отдельном модальном окне знак зодиака пользователя в формате: Ваш знак зодиака: ?.


Не обязательное задание продвинутой сложности:

Выводить также в год какого животного по китайскому календарю родился пользователь.*/

/* FIRST VARIANT

function zodiacLucky () {
    let age = prompt('Введите дату рождения', '');
    let dateN = Number(age.split(/\D+/g)[0]);        //Разбиваем на массив, удаляя нечисловые значения глобально, перенося первый элемент массива в переменную
    let monthN = Number(age.split(/\D+/g)[1]);       //Второй элемент
    let yearN = parseInt(age.split(/\D+/g)[2]);      //Третий элемент
    let myBirthday = (new Date(yearN, monthN, dateN)).getTime();    //Получаем в ms дату рождения начиная от 1970
    let timeNow = (new Date()).getTime();                           //Получаем текущую дату в ms
    let fullMsInYear = (new Date(String(yearN))).getTime() - ((new Date(String(yearN - 1))).getTime()); //Находим сколько будет 1 год в ms
    let fullOld = parseInt((timeNow - myBirthday) / fullMsInYear);  // Находим полные года пользователя
    let key;

    let obj = {
        "Козерог" : [new Date(String(yearN - 1), 12, 20), new Date(yearN, 1, 19)],  // Для того чтобы понять находиться ли дата в заданных рамках, граничные даты
        "Водолей" : [new Date(yearN, 1, 20), new Date(yearN, 2, 18)],               // разбиваем на 2 элемента массива ключа, одного обьекта.
        "Рыбы": [new Date(yearN, 2, 19), new Date(yearN, 3, 20)],
        "Овен": [new Date(yearN, 3, 21), new Date(yearN, 4, 19)],
        "Телец": [new Date(yearN, 4, 20), new Date(yearN, 5, 20)],
        "Близнецы": [new Date(yearN, 5, 21), new Date(yearN, 6, 21)],
        "Рак": [new Date(yearN, 6, 22), new Date(yearN, 7, 22)],
        "Лев": [new Date(yearN, 7, 23), new Date(yearN, 8, 22)],
        "Дева": [new Date(yearN, 8, 23), new Date(yearN, 9, 22)],
        "Весы": [new Date(yearN, 9, 23), new Date(yearN, 10, 22)],
        "Скорпион": [new Date(yearN, 10, 23), new Date(yearN, 11, 22)],
        "Стрелец": [new Date(yearN, 11, 23), new Date(yearN, 12, 21)]
    }

    for (key in obj) {
        if (obj[key][0].getTime() <= myBirthday && myBirthday <= obj[key][1].getTime()) {    //Пограничные элементы для каждого ключа приводим в ms, для сравнения
            return ("Вам, " + fullOld + "." + " Вы " + key + ".");
        }
    }
}

console.log(zodiacLucky());*/


// SECOND VARIANT

function isValidDate(date) {
    var matches = /^(\d{1,2})[\.](\d{1,2})[\.](\d{4})$/.exec(date);	 // Регулярное выражение для проверки prompt
    if (matches == null) return false;
    var d = matches[1];
    var m = matches[2] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d &&
        composedDate.getMonth() == m &&
        composedDate.getFullYear() == y;
}

    function formatDate(date) {				// Функция форматирования даты
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;			// Если цифра меньше 10 добавляем 0
        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        var yy = date.getFullYear();
        return dd + '.' + mm + '.' + yy;
    }

    function dateCheck (modal) {
        let newDate = modal.split(".");									// Сплитом разбиваем строку на массив расставляя точки
        let dateNow = new Date(newDate[2], newDate[1], newDate[0]);		// Создаем текущую дату для вычеслений
        let symbol = ["Козерог", "Водолей", "Рыбы", "Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец"]
        let dates = [20, 18, 20, 20, 20, 21, 22, 23, 22, 23, 22, 22];	// Массив граничных дат
        let m;															// Промежуточная переменная для хранения месяца
        let month = dateNow.getMonth();									// Получаем текущий месяц для внесения его как индекса в массив с датами
        let d = dates[dateNow.getMonth()];
        if(dateNow.getDate() < d) {										// Ставим условие для вывода нужного знака зодиака
            if (dateNow.getMonth() === 0) {
                m = 11;
            } else {
                m = dateNow.getMonth() - 1;
            }
        } else {
            m = dateNow.getMonth();
        }

    let dateToday = new Date();											// Производим вычесление текущего возраста пользователя
    let result = parseInt((dateToday - dateNow) / (1000*60*60*24*365));	// ms делим на ms, и приводим к целому

    // Китайский гороскоп
    let resultCh;				

    let obj = {							// Создаем объект гороскоп в который помещаем ключи с названиями и значения с годами
        "Крыса": 1900,
        "Бык": 1901,
        "Тигр": 1902,
        "Кот": 1903,
        "Дракон": 1904,
        "Змея": 1905,
        "Лошадь": 1906,
        "Овца": 1907,
        "Обезьяна": 1908,
        "Петух": 1909,
        "Собака": 1910,
        "Свинья": 1911
    };

    for (key in obj) {								// Перебираем все ключи циклом
        if (obj[key] % 12 == newDate[2] % 12) {		// Если остаток от деления на 12 указанного значения в ключах равен остатку от деления текущего года
            resultCh = key;							// Выносим ключ как результат (Например "Собака")
        }
    }

    alert(symbol[m]);			//Результат зодиака
    alert(result);				//Результат возраста
    alert(resultCh);			//Результат китайского гороскопа
}

//---------------------------------------------------------------------------------------------//

let date = new Date();
let result = formatDate(date);
let modal = prompt("Please enter date now dd:mm:yyyy", result);
if (isValidDate(modal)) {		// Помещаем текущее значение в функцию проверки на валидность
    dateCheck(modal);			// Если проходит проверка, производим вычесление в следующей функции
} else {
    alert('Date is invalid, plz enter valid date in dd.mm.yyyy format');
    exit();
}
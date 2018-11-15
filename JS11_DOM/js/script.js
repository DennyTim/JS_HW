/*Задание
Реализовать функцию, которая будет добавлять список, введенный пользователем, на страницу.

Технические требования:

При запуске программы спросить у пользователя в модальном окне число пунктов, которые будут в списке.
После введения пользователем числа, вывести модальное окно еще нужное количество раз (такое количество раз, какое число ввел пользователь в первом модальном окне), спрашивая у пользователя содержимое пунктов списка (пользователь может ввести любой текст).
После ввода последнего значения, вывести на странице список, введенный пользователем с помощью модальных окон.
Через 10 секунд очистить страницу.
Необходимо использовать шаблонные строки и функцию map массива для формирования контента списка пеерд выведением его на страницу.


Не обязательное задание продвинутой сложности:

Показывать таймер обратного отсчета (только секунды) перед очищением страницы.*/


function checkInput (a) {
    while (a == null || isNaN(a) || a == false || a > 11 || a < 0) {
        alert('Error');
        a = prompt('How match paragraph do you want','');
    }
    return a;
}

function addParagraphs() {
	let arr = [];
    for (let x = 0; x < askQuestion; x++) {
        userAnswers = prompt('Your answer', '');
        if (isNaN(userAnswers) || userAnswers == null || userAnswers == false) {
            alert('Error');
            return false;
        }
        arr.push(userAnswers);
    }
	
	let arrNew = arr.map(function(key) {						// map'ом перебираем каждое значение внутри массива
		newListElements = document.createElement('li');			// создаем элемент li внутри документа
		newListElements.innerHTML = key;						// значение ключей отдаем в li
		list.appendChild(newListElements);						// подтверждаем создание элемента внутри тега li
	});
    return true;
}

function startTimer() {
    let myTimer = document.getElementById('time');
    let time = myTimer.innerHTML;                       //00:00:10
    let arrTime = time.split(':');                      //[00, 00, 10]
    let hours = arrTime[0];                             //00
    let minutes = arrTime[1];                           //00
    let seconds = arrTime[2];                           //10
    if (seconds == 0) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        };
        return true;
    }
    seconds--;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startTimer, 1000);
}

let askQuestion = prompt('How match paragraph do you want','');
askQuestion = checkInput(askQuestion)
let list = document.getElementById("listUserAnswers");
let userAnswers;
let newListElements;

let func = addParagraphs();

if (func == true) {
    startTimer();
} else if (func == false) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    };
}





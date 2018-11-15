function formatTime () {
    ++timer;                                            // Используем инкремент как базу для вычесления времени
    hour   = Math.floor(timer / 3600);
    minute = Math.floor((timer - hour * 3600) / 60);
    second = timer - hour * 3600 - minute * 60;
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    ms.innerHTML = second;
    sec.innerHTML = minute;
    min.innerHTML = hour;
}

function stopTimer () {
	btnStart.style.display = 'inline';
    btnStop.style.display = 'none';
    clearInterval(discard);
}

function startTimer () {
	btnStart.style.display = 'none';
    btnStop.style.display = 'inline';
    discard = setInterval(formatTime, 13)               // 13, а не 10 потому как существует погрешность относительно длинного кода
}

function deleteTime () {
    timer = 0;                                          // обнуляем общее число прошедшего времени
    clearInterval(discard);                             // обнуляем таймер, чтобы не стартанул после обнуления
	btnStart.style.display = 'inline';                  // прячем кнопку
    btnStop.style.display = 'none';
    ms.innerHTML = '00';                                // расставляем нолики на месте изменений
    sec.innerHTML = '00';
    min.innerHTML = '00';
}


let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');
let ms = document.getElementById('ms');
let sec = document.getElementById('sec');
let min = document.getElementById('min');
let discard;                                            // создаем переменную для сохранения данных таймера и обнуления его же
let timer = 0;
let hour = 0;
let minute = 0;
let second = 0;
btnStop.style.display = 'none';
btnStart.onclick = startTimer;
btnStop.onclick = stopTimer;
btnReset.onclick = deleteTime;

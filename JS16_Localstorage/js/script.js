
/*-------Button_Example------*/

let head = document.head;
let link = document.createElement('link');                          // создаем <link rel="stylesheet" href="light|dark.css">

link.rel = 'stylesheet';

if (localStorage.getItem('themeStyle') === 'Gta') {                 // проверяем значение из localStorage если dark то темная тема
    link.href = 'css/gta.css';                                      // ссылка на темный стиль
} else {                                                            // по умолчанию светлая тема
    link.href = 'css/style.css';                                    // ссылка на светлый стиль
}
head.appendChild(link);                                             // вставляем <link rel="stylesheet" href="light|dark.css"> в шапку страницы

let init = 0;

button.addEventListener("click", function () {

    if (init == 1 || init % 2 >= 1) {
        link.href = 'css/gta.css'; // включаем темную тему
        localStorage.setItem('themeStyle', 'Gta'); // записываем значение в localStorage
    }
    //usually theme
    if (init % 2 == 0) {
        link.href = 'css/style.css'; // включаем светлую тему
        localStorage.setItem('themeStyle', 'Usual'); // записываем значение в localStorage
    }
    init++;
});


/*
		let changeThemeBtn = document.getElementById('changeTheme');

		let localStorageCheck = () => {
			let existTheme = localStorage.getItem('theme');
			if (existTheme) {
				document.body.style.backgroundColor = 'black';
			} else {
				document.body.style.backgroundColor = '#fff';
			}
		}

		let changeThemeColor = () => {
			let existTheme = localStorage.getItem('theme');
			if (existTheme) {
				localStorage.removeItem('theme');

			} else {
				localStorage.setItem('theme', 'dark');
			}

			localStorageCheck();


		}
		changeThemeBtn.addEventListener('click', changeThemeColor, false);

*/

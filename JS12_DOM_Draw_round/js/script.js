/*
Задание
Нарисовать на странице круг используя параметры, которые введет пользователь.

Технические требования:

1. При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". Данная кнопка должна являться единственным контентом в теле HTML документа, весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript.
2. При нажатии на кнопку - вместо нее показать два поля ввода. В первом пользователь сможет ввести диаметр круга в пикселях. Во втором - цвет круга (в любом формате, который понимает CSS - имя цвета, RGB, HEX, HSL).
3. Под полями ввода должна быть кнопка "Нарисовать". При нажатии - на странице должен появиться круг заданного пользователем диаметра и с заливкой указанного цвета.

Не обязательное задание продвинутой сложности:

При нажатии на кнопку "Нарисовать круг" показывать только одно поле ввода - диаметр круга. При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета. При клике на каждый - они должны исчезать
У вас может возникнуть желание поставить обработчик события на каждый круг для его исчезновения. Это неэффективно, так делать не нужно. На всю страницу должен быть только один обработчик событий, который будет это делать.

*/


document.getElementById('submit').onclick = function () {
    document.getElementById("submit").remove();
    let round = document.getElementById("round");
    let inputSize = document.getElementById('txt');
    let inputColor = document.getElementById('color');
    let createBtn = document.getElementById('button');
    let alert = document.getElementById('alert');
    alert.style.display = 'none';
    document.getElementById("hidden").style.display = 'block';

    document.getElementById('button').onclick = function(e) {
        e.preventDefault();
        inputSizeValue = Number(inputSize.value);
        inputColorValue = inputColor.value;
        if (isNaN(inputSizeValue) || inputSizeValue == 0 || inputColorValue == 0 || typeof(inputColorValue) == 'String') {
            alert.style.display = 'block';
            alert.style.padding = '4px';
            alert.style.borderRadius = '4px';
            alert.style.fontFamily = 'Verdana,sans-serif';
            alert.style.fontSize = '15px';
            alert.style.color = 'white';
            alert.style.backgroundColor = '#f44336';
        } else {
            alert.style.display = 'none';
        }
        let newСircle = document.createElement('div');
            newСircle.className = 'newСircle';
            newСircle.style.marginLeft = '20px';
            newСircle.style.marginBottom = '20px';
            newСircle.style.WebkitBorderRadius = '50%';
            newСircle.style.float = 'left';
            newСircle.style.height = inputSizeValue + 'px';
            newСircle.style.width = inputSizeValue + 'px';
            newСircle.style.backgroundColor = inputColorValue;
        round.appendChild(newСircle);
    };
};



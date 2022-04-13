const selectFigure = document.querySelector('#select-figure');
const figure = document.querySelector('#figure');
const color = document.querySelector('#color');
const btn = document.querySelector('.btn');

function changeFigure () {
    let ind = selectFigure.selectedIndex;
    switch (ind) {
        case 1:
            figure.className = 'rectangle';
            break;
        case 2:
            figure.className = 'circle';
            break;
        default:
            figure.className = 'square';
      }
}

function setColor () {
    const setColor = color.value;
    figure.style.backgroundColor = setColor;
}

btn.addEventListener('click', setColor);
selectFigure.addEventListener('change', changeFigure);

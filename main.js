const container = document .querySelector('.card_grafic')
const card = document .querySelector('.grafic')

const {width, height}  = container.getBoundingClientRect();

container.addEventListener( 'mousemove', (event) => {
const { offsetX, offsetY } = event;

card.style.setProperty('--x-pos', (offsetX / width) - 0.4);
card.style.setProperty('--y-pos', (offsetY / height) - 0.4);

})

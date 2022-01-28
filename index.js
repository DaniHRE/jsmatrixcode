const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const random = '👺👹⛩🍙';
const katakana = 'クケコサシスセソタヂッツデトドナニヌネバヒピプヘ';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const simbols = '!@#$%¨&*()_+=§¬¢£³²¹ªº{}[]<>.,:;/°?';

const alphabet = katakana;

const fontSize = 48;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'lightgreen';
    context.font = fontSize + 'px Verdana ';

    let color = 0;

    for (let i = 0; i < rainDrops.length; i++) {

        // if (color > 10) {
        //     color = 0
        // }

        // const randomColors = ['orange', 'red', 'yellow', 'lightgreen', 'green', 'skyblue', 'blue', 'violet', 'purple'];

        // context.fillStyle = randomColors[color];
        // color = color + 1
        // console.log(color);

        const text = alphabet.charAt(Math.floor(Math.random()*alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

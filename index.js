let modeIndex = 0;

let playerx = 0;
let playery = 0;

function normal (){
    return 'lightgreen';
}

function rainbow(){
    const modeStyle = context.createLinearGradient(0, 0, canvas.height, canvas.width, );

    for (let i = 0; i < randomColors.length; i++){
        let offset = i/randomColors.length
        modeStyle.addColorStop(offset, randomColors[i]);
    } 

    return modeStyle;
}

function circle(){
    const modeStyle = context.createRadialGradient(canvas.width/2 + playery, canvas.height/2 + playerx, 0, canvas.width/2 + playery, canvas.height/2 + playerx, 200)

    for (let i = 0; i < randomColors.length; i++){
        let offset = i/randomColors.length
        modeStyle.addColorStop(offset, randomColors[i]);
    } 

    return modeStyle;
}

const MODES = [
    normal,
    rainbow,
    circle
]

function changeMode(){
    if(modeIndex + 1 < MODES.length){
        modeIndex++
    }else{
        modeIndex = 0
    }
}

window.addEventListener('keydown', event =>{
    if(event.key == 'm') {
        changeMode()
    }

    if(modeIndex == 2){
        if(event.key == 'w'){
            playerx = playerx - 5
        }
    
        if(event.key == 's'){
            playerx = playerx + 5
        }
    
        if(event.key == 'd'){
            playery = playery + 5
        }
    
        if(event.key == 'a'){
            playery = playery - 5
        }
    }
    
})

const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const random = '👺';
const katakana = 'クケコサシスセソタヂッツデトドナニヌネバヒピプヘ';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const simbols = '!@#$%¨&*()_+=§¬¢£³²¹ªº{}[]<>.,:;/°?';

const alphabet = katakana;

const fontSize = 24;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const randomColors = [ 
    'rgba(255, 0, 0, 1)', 
    'rgba(255, 154, 0, 1)', 
    'rgba(208, 222, 33, 1)', 
    'rgba(79, 220, 74, 1)', 
    'rgba(63, 218, 216, 1)', 
    'rgba(47, 201, 226, 1)', 
    'rgba(28, 127, 238, 1)', 
    'rgba(95, 21, 242, 1)', 
    'rgba(186, 12, 248, 1)',
    'rgba(251, 7, 217, 1)',
    'rgba(255, 0, 0, 1)'
];

const draw = () => {
    context.fillStyle = "rgb(0, 0, 0, 0.05)"
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = fontSize + 'px Verdana ';

    for (let i = 0; i < rainDrops.length; i++) {
        context.fillStyle = MODES[modeIndex]();

        const text = alphabet.charAt(Math.floor(Math.random()*alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.9) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 10);

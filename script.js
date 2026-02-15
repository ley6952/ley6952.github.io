const btn_love = document.getElementById("btn-love");
const btn_not_love = document.getElementById("btn-not-love");
const btn_reset = document.getElementById("reset");

const bgimg = document.querySelector(".img");
const text = document.getElementById("text");

const img_leycalme = document.querySelector(".img-leycalme");

randomImg(bgimg);

function randomTxt() {
    const message = [
        "ເປັນຫຍັງບໍ່ຣັກເລ້😭",
        "ຣັກເລ້ແນ່🥺",
        "ຣັກເລ້ສາ😢",
        "ຊິຣັກເລ້ດີໆບໍ່🙄",
        "ເອ້າຍັງບໍຣັກເລ້ອີກ🙄",
        "ເລ້ຊິຄຽດໃຫ້ລະໃດ🙄",
        "ຣັກເລ້ສາຂໍລະ😢",
        "ຢ່າໃຫ້ມີຄັ້ງທີ2🥺",
        "ຢ່າໃຫ້ມີອີກຄັ້ງທີ3🥺",
        "ຄັ້ງທີ4ນີ້ບໍ່ຄວນ🥺"
    ];
    const randomindextxt = Math.floor(Math.random() * message.length);
    text.innerHTML = message[randomindextxt];
}

function randomImg(where) {
    const img = [
        "img/bobby1.jpeg",
        "img/bobby2.jpeg",
        "img/bobby3.jpeg",
        "img/bobby4.jpeg",
        "img/bobby5.jpeg",
        "img/bobby6.jpeg",
        "img/bobby7.jpeg",
        "img/bobby8.jpeg",
        "img/bobby9.jpeg",
        "img/bobby10.jpeg"
    ];
    const randomindeximg = Math.floor(Math.random() * img.length);
    where.style.backgroundImage = `url(${img[randomindeximg]})`;
}


let scaleA = 1;
let scaleB = 1;
let move = 0;

function connect() {

}

function Calling() {
    const calling = document.getElementById("calling");
    calling.play();
    calling.currentTime = 0;
}
function Stopcalling() {
    const calling = document.getElementById("calling");
    calling.pause();
}

function showLeycalme(show) {
    const con_leycalme = document.querySelector(".con-leycalme");
    con_leycalme.style.display = show;
}

function notConnect() {
    Stopcalling();
    showLeycalme("none");

    for (let i = 0; i < 1; i++) {
        setTimeout(() => {
            randomImg(img_leycalme);
            showLeycalme("block");
            Calling();
        }, 3000)
    }
}


function leyCalme() {
    showLeycalme("block");
    randomImg(img_leycalme);
}

function notLove() {
    scaleA += 0.2;
    scaleB -= 0.2;
    move += 20;
    btn_love.style.transform = `scale(${scaleA})`;
    btn_not_love.style.transform = `scale(${scaleB})`;
    btn_love.style.left = `${move}px`;
    if (scaleB <= 0.2) {
        btn_not_love.style.display = "none";
        btn_love.style.left = "100px"
    };
    randomTxt();
    randomImg(bgimg);
}

function Love() {
    let num = 0;
    num++;
    text.textContent = "ເຍ້ຣັກເລ້ແລ້ວ❤️🤗🥰😘";
    btn_love.style.display = "none";
    btn_not_love.style.display = "none";
    btn_reset.style.display = "block";
    btn_reset.style.right = "100px"
    if (num === 1) {
        setInterval(() => {
            createHeart();
        }, 100)
    }
    setTimeout(() => {
        leyCalme();
        Calling();
    }, 3000)
}

function handleMusic() {
    let btn_text = document.getElementById("btn-text");
    let song = document.getElementById("song");

    if (song.paused) {
        song.play()
        btn_text.innerText = "ປີດເພງ";
    }
    else {
        song.pause();
        btn_text.innerText = "ເປີດເພງ";
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-fall");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000)
}
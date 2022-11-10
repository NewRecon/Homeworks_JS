const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');

const fruit = new Image();
fruit.src = "./img/cherry.png";
fruit.height = 32;

const circle = new Image();
circle.src = "./img/Circle.png";
circle.height = 32;

let cherry = {
   x: undefined,
   y: undefined
}

let ball = {
   x: 0,
   y: undefined
}

let position;
let scoreCounter = 0;

let score = document.getElementsByTagName("h2")[0];

let snake = [cherry];
let snakeCounter = 1;

function startGame() {
    for (let i=0;i<snakeCounter;i++) {
        snake.pop();
    }
    let cherry = {
        x: undefined,
        y: undefined
    }
    snake = [cherry];
    snakeCounter = 1;
    snake[0].x = Math.floor(Math.random() * 10)*fruit.height;
    snake[0].y = Math.floor(Math.random() * 10)*fruit.height;
    spawnball();
    position = "";
    scoreCounter = 0;
    score.textContent = scoreCounter;
}

function spawnball() {
    let flag = true;

    ball.x = Math.floor(Math.random() * 10)*fruit.height;
    ball.y = Math.floor(Math.random() * 10)*fruit.height;

    for (let i=0;i<snakeCounter;i++) {
        if (snake[i].x == ball.x && snake[i].y == ball.y){
            flag = false;
        }
    }

    if (!flag) spawnball();
}

function checkWin() {
    if (snake.length == 100) {
        alert("YOU WIN!");
        startGame();
    }
}

function checkLose() {
    for (let i=1;i<snakeCounter;i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            alert("YOU LOSE!");
            startGame();
        }
    }
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    move();
    drawSnake();
    checkCollision();
    ctx.drawImage(circle, ball.x, ball.y, circle.height, circle.height);
    checkWin();
    checkLose();
}

function keyPress() {
    document.addEventListener("keydown", function(event){
        switch (event.keyCode) {
            case 87:
                if (position!="down") position = "up";
                break;
            case 83:
                if (position!="up") position = "down";
                break;
            case 65:
                if (position!="right") position = "left";
                break;
            case 68:
                if (position!="left") position = "right";
        }
    })
}

function move() {
    keyPress();
    if (position == "up") moveUp();
    else if(position == "down") moveDown();
    else if(position == "left") moveLeft();
    else if(position == "right") moveRight();
}

function moveUp() {
    for (let i=snakeCounter-1;i>0;i--) {
        snake[i].y=snake[i-1].y;
        snake[i].x=snake[i-1].x;
    }
    if (snake[0].y > 0) snake[0].y-=fruit.height;
    else snake[0].y = 288;
}

function moveDown() {
    for (let i=snakeCounter-1;i>0;i--) {
        snake[i].y=snake[i-1].y;
        snake[i].x=snake[i-1].x;
    }
    if (snake[0].y < 288) snake[0].y+=fruit.height;
    else snake[0].y = 0;
}

function moveLeft() {
    for (let i=snakeCounter-1;i>0;i--) {
        snake[i].y=snake[i-1].y;
        snake[i].x=snake[i-1].x;
    }
    if (snake[0].x > 0) snake[0].x-=fruit.height;
    else snake[0].x = 288;
}

function moveRight() {
    for (let i=snakeCounter-1;i>0;i--) {
        snake[i].y=snake[i-1].y;
        snake[i].x=snake[i-1].x;
    }
    if (snake[0].x < 288) snake[0].x+=fruit.height;
    else snake[0].x = 0;
}

function checkCollision() {
    if (snake[0].x == ball.x && snake[0].y == ball.y) {
        snakeGrow();
        spawnball();
    }
}

function snakeGrow() {
    let snakeTail = spawnTail()
    snake.push(snakeTail);
    snakeCounter++;
    score.textContent = ++scoreCounter;
}

function spawnTail() {
    let snakeTail = {
        x: snake[snakeCounter-1].x,
        y: snake[snakeCounter-1].y
    }
    if (position == "up") {
        snakeTail.y += 32;
    }
    else if(position == "down") {
        snakeTail.y -= 32;
    }
    else if(position == "left") {
        snakeTail.x += 32;
    }
    else if(position == "right") {
        snakeTail.x -= 32;
    }
    return snakeTail;
}

function drawSnake() {
    for (let i=0,k=0;i<snakeCounter;i++,k+=300) {
        ctx.drawImage(fruit, snake[i].x, snake[i].y, fruit.height, fruit.height); 
    }
}

let play = setInterval(game,300);
console.log("Webpack is working!")

import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js'
import Game from './game.js';

let canvas = document.getElementById("arkanoid");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0,0,800,600)

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// game.start();

let lastTime = 0;



function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    // paddle.update(deltaTime);
    // paddle.draw(ctx);

    // ball.update(deltaTime);
    // ball.draw(ctx);

     game.update(deltaTime,ctx);
    //  game.updateScore(ctx)
     game.draw(ctx);
    
 

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
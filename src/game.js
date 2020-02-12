import Ball from "./ball";
import Paddle from "./paddle";
import InputHandler from "./input";
import Brick from "./brick";

import { buildLevel, level1 } from "./brickLevels";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    

    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gameState = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.lives = 3;

        new InputHandler(this.paddle, this);
        
      
    }

    start(){
        // this.gameState = GAMESTATE.MENU;
        if (this.gameState !== GAMESTATE.MENU){
            return
        }
        this.score = 0;
        // this.ball = new Ball(this);
        // this.paddle = new Paddle(this);
        
       
        let bricks = buildLevel(this, level1);
        
        // for(let i=0; i<10; i++){
        //     bricks.push(new Brick(this, {x:i*52, y: 30}))
        // }

        this.gameObjects = [this.ball, this.paddle, ...bricks];

        this.gameState = GAMESTATE.RUNNING ;

        // new InputHandler(this.paddle, this);
    } 

    update(deltaTime,ctx){
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);

        if(this.lives === 0 || this.score === 170) this.gameState = GAMESTATE.GAMEOVER

         if(this.gameState == GAMESTATE.PAUSED || this.gameState == GAMESTATE.MENU || this.gameState == GAMESTATE.GAMEOVER) return;

        this.gameObjects.forEach( object =>{
            object.update(deltaTime,ctx)
        })

        this.gameObjects = this.gameObjects.filter( object => ! object.markedForDeletion)

        this.printLives(ctx);
    }

    draw(ctx){
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);
        
       
        this.gameObjects.forEach( object =>{
            object.draw(ctx)
        })
       
        if(this.gameState == GAMESTATE.PAUSED){
            ctx.rect(0,0,this.gameWidth,this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2 )

        }

        if (this.gameState == GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Spacebar to Start", this.gameWidth / 2, this.gameHeight / 2)

        }

        if (this.gameState == GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2)
            ctx.fillText("Final Score:", 370,420)
            ctx.fillText(this.score, 480,420)
           
            // this.restart();
    
        }

        
    }

    togglePause(){
       
        if(this.gameState == GAMESTATE.PAUSED){
            this.gameState = GAMESTATE.RUNNING;
        } else{
            this.gameState = GAMESTATE.PAUSED
        }
    }

    printLives(ctx){
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "lightgreen";
        ctx.textAlign = "center";
        let lives = this.lives;
        ctx.fillText("Lives Remaining: ", 130, 40);
        ctx.fillStyle = "yellow";
        ctx.fillText(lives, 250, 40)
    }


    // restart(){
    //     let canvas = document.getElementById("arkanoid");
    //     let ctx = canvas.getContext("2d");

    //     const GAME_WIDTH = 800;
    //     const GAME_HEIGHT = 600;

    //     ctx.clearRect(0, 0, 800, 600)

    //     let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    //      game.start();

    //     let lastTime = 0;

    //      console.log("restart entered")

    //     function gameLoop(timestamp) {
    //         let deltaTime = timestamp - lastTime;
    //         lastTime = timestamp;
    //         ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    //         // paddle.update(deltaTime);
    //         // paddle.draw(ctx);

    //         // ball.update(deltaTime);
    //         // ball.draw(ctx);

    //         game.update(deltaTime, ctx);
    //         //  game.updateScore(ctx)
    //         game.draw(ctx);



    //         requestAnimationFrame(gameLoop);
    //     }

    //     requestAnimationFrame(gameLoop);
    // }

 
}
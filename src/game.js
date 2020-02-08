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
      
    }

    start(){
        this.gameState = GAMESTATE.RUNNING;
        this.score = 0;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = buildLevel(this, level1);
        
        // for(let i=0; i<10; i++){
        //     bricks.push(new Brick(this, {x:i*52, y: 30}))
        // }

        this.gameObjects = [this.ball, this.paddle, ...bricks];

        new InputHandler(this.paddle, this);
    } 

    update(deltaTime,ctx){
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);

         if(this.gameState == GAMESTATE.PAUSED) return;

        this.gameObjects.forEach( object =>{
            object.update(deltaTime,ctx)
        })

        this.gameObjects = this.gameObjects.filter( object => ! object.markedForDeletion)
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
            ctx.fill()
        }
    }

    togglePause(){
        console.log("pause entered game")
        if(this.gameState == GAMESTATE.PAUSED){
            this.gameState = GAMESTATE.RUNNING;
        } else{
            this.gameState = GAMESTATE.PAUSED
        }
    }
}
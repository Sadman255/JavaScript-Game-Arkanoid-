import Ball from "./ball";
import Paddle from "./paddle";
import InputHandler from "./input";
import Brick from "./brick";

import { buildLevel, level1 } from "./brickLevels";

export default class Game {

    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start(){

        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        let bricks = buildLevel(this, level1);
        
        // for(let i=0; i<10; i++){
        //     bricks.push(new Brick(this, {x:i*52, y: 30}))
        // }

        this.gameObjects = [this.ball, this.paddle, ...bricks];

        new InputHandler(this.paddle);
    } 

    update(deltaTime){
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);
        this.gameObjects.forEach( object =>{
            object.update(deltaTime)
        })

        this.gameObjects = this.gameObjects.filter( object => ! object.markedForDeletion)
    }

    draw(ctx){
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);
        this.gameObjects.forEach( object =>{
            object.draw(ctx)
        })
    }
}
import { detectCollision } from './collisionDetection'

export default class Ball {

    constructor(game){
        this.image = document.getElementById("image-ball");
        
        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position = { x: 10, y: 400};
        
        this.speed = {x: 4, y: -2};
        this.width = 26; //28
        this.height = 26; //26
        this.size = 26;
    }

    draw(ctx){
        
        ctx.drawImage(this.image, this.position.x,this.position.y, 28, 26)
    }

    update(){
        // collision with wall
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }

        if(this.position. y + this.size > this.gameHeight || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        //collision with paddle

        // let bottomOfBall = this.position.y + this.size;
        // let topOfPaddle = this.game.paddle.position.y;
        // let leftSideOfPaddle = this.game.paddle.position.x;
        // let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width; 

        // if(bottomOfBall >= topOfPaddle && this.position.x >= leftSideOfPaddle && this.position.x + this.size <= rightSideOfPaddle){
        //     this.speed.y = -this.speed.y;
        //     this.position.y = this.game.paddle.position.y - this.size
        // }

         if(detectCollision(this,this.game.paddle)){
             this.speed.y = -this.speed.y;
             this.position.y = this.game.paddle.position.y - this.size
         }
    }
}
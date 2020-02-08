import { detectCollision } from './collisionDetection'


export default class Brick {

    constructor(game, position){
        this.image = document.getElementById("fish-brick");

        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position = position;
        this.width = 120;
        this.height = 50;

        this.markedForDeletion = false;
        
    }

    update(deltaTime,ctx){

        
        // ctx.fillText(this.game.score, 500, 40)

        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;
            this.game.score += 5;
            // console.log(ctx)
           
           
            //  ctx.fillText(this.game.score, 20,20);

        }
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "lightgreen";
        ctx.textAlign = "center";
        let score = this.game.score ;
        ctx.fillText("Score: ", 680, 40);
        ctx.fillStyle = "yellow";
        ctx.fillText( score, 750, 40)
    }

    draw(ctx){
        ctx.drawImage( this.image, this.position.x, this.position.y, this.width, this.height)
    }
}
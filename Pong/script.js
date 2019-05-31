alert("Game for 2 players");

var player1;
var player2;
var ball;
var score1 = 0;
var score2 = 0;

class Player{
    constructor(xCoord,yCoord){
        this.x = xCoord;
        this.y = yCoord;
        this.w = 60;
        this.h = 15;
    }
}

class Ball{
    constructor(xCoord,yCoord){
        this.x = xCoord;
        this.y = yCoord;
        this.speed = (Math.floor(Math.random()*5)+5)/3.0;
        this.xspeed = this.speed;
        this.yspeed = this.speed;
    }
    changeDirection(){
        if(this.x<0||this.x>width)
        {
            this.xspeed = -this.xspeed;
        }
        if(this.y<0||this.y>height)
        {
            this.yspeed = -this.yspeed;
        }
        if(this.y<=0)
        {
            score1++; 
            rePlay();         
        }
        if(this.y>=height)
        {
            score2++;     
            rePlay();       
        }
        if(score1>=10)
        {
            rePlay();
            score1=0;
            score2=0;
        }
        if(score2>=10)
        {
            rePlay();
            score1=0;
            score2=0;
        }
    }
}

function move(p){
            if(mouseX>0&&mouseX<p.x+30)
        {
            p.x-=2;
        }
        if(mouseX>p.x+30&&mouseX<width)
        {
            p.x+=2;
        }        
}

function rePlay(){
    ball.x = 80;
    ball.y = width/2;
}

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(20,28,38);
    player1 = new Player(window.innerWidth/2,height-100);
    player2 = new Player(window.innerWidth/2,80);
    ball = new Ball(15,50);
}

function draw(){
    background(20,28,38);
    textSize(14);
    if(score1>score2)
    {
        fill(0,255,0);
    }
    else if(score1==score2)
    {
        fill(255,255,255);
    }
    else 
    {
        fill(255,0,0);
    }
    text(`P1: ${parseInt(score1)}`,10,50);
    if(score2>score1)
    {
        fill(0,255,0);
    }
    else if(score2==score1)
    {
        fill(255,255,255);
    }
    else 
    {
        fill(255,0,0);
    }
    text(`P2: ${parseInt(score2)}`,width-60,50);
    noFill();
    stroke(255,255,255);
    textSize(30);
    text("PONG by PP",(width/2)-85,height/2);
    noStroke();
    fill(255,255,255);
    rect(player1.x,player1.y,player1.w,player1.h);
    rect(player2.x,player2.y,player2.w,player2.h);
    if(mouseIsPressed)
    {
        if(mouseY>height/2)
        {
            move(player1);
        }        
        if(mouseY<height/2)
        {
            move(player2);
        }
    }
    fill(0,255,0);
    ellipse(ball.x,ball.y,20,20);
    ball.x+=ball.xspeed;
    ball.y+=ball.yspeed;
    ball.changeDirection();
    if(collideRectCircle(player1.x,player1.y,player1.w,player1.h,ball.x,ball.y,20,20))
    {
        ball.xspeed = -ball.xspeed;
        ball.yspeed = -ball.yspeed;
    }
    if(collideRectCircle(player2.x,player2.y,player2.w,player2.h,ball.x,ball.y,20,20))
    {
        ball.xspeed = -ball.xspeed;
        ball.yspeed = -ball.yspeed;
    }
}

//by PP
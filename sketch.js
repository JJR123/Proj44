var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, Tsignup, game, main, player; 

var car1,car2,car3,car4,cars;  
var teacher, title, student, btnSignUp1, btnSignUp2, btnLogin1, btnLogin2; 
var mixedGroup;
var marble, marbleImg, SignupLogin, title, teacherImg, studentImg, SignupImg1, LoginImg1, SignupImg2, LoginImg2, t1,t2, tsingup; 

function preload(){ 
  SignupLogin= loadImage("Images/Sign-UpLogin.png"); 
  marbleImg= loadImage("Images/marble.png"); 
  teacherImg=loadImage("Images/Teacher.png"); 
  studentImg=loadImage("Images/Student.png");  
  SignupImg1=loadImage("Images/Sign-Up.png"); 
  LoginImg1=loadImage("Images/Log-in.png");  
  SignupImg2=loadImage("Images/Sign-Up.png"); 
  LoginImg2=loadImage("Images/Log-in.png");   

  t1=loadImage("Images/T1.png");  
  t2=loadImage("Images/T2.png"); 
  tsignup=loadImage("Images/TSignUp.png");   
  tenter=loadImage("Images/TEnter.png");   


}


function setup(){
  canvas = createCanvas(displayWidth+400,displayHeight+80);  
  
  mixedGroup= createGroup();


  database = firebase.database();
  main = new Main();
  main.getState();
  main.start();   
 // main.next();  
  form=new Form;   
  //Tsignup=new TSignUp(); 

  
 
}


function draw(){ 
  background(210,176,177);  
   
  //mixedGroup= createGroup();
  /*if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }*/  
  form.display();  

  
  
  drawSprites();

}

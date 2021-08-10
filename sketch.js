
var canvas, backgroundImage, maze, mazeImg,android;
var virus,virus1,virus2, virus3;
// trojan,trojan1,trojan2,trojan3,
var phishing ,phishing1,phishing2,phishing3,firewall,firewall1,spam,spam1, antivirus,antivirus1;
var edge1,edge2,edge3,edge4;
//var password,password1,downloads,downloads1;


function preload(){

  backgroundImage = loadImage("bg3.PNG");
  mazeImg = loadImage("maze2.png");
 
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  
  
  android = new Bot(305,144,80,80);
  
  //edge1 = createSprite(250,displayHeight/2,10,displayHeight);
  //edge2 = createSprite(1650,displayHeight/2,10,displayHeight);
  //edge3 = createSprite(250,displayHeight/2,10,displayHeight);
  //edge4 = createSprite(250,displayHeight/2,10,displayHeight);

  virus = new comp_Virus(450,220,70,70);
  virus1 = new comp_Virus(630,125,70,70);
  virus2 = new comp_Virus(530,470,70,70);
  virus3 = new comp_Virus(1500,300,70,70);
 
  phishing = new comp_Phishing(625,470,50,50);
  phishing1 = new comp_Phishing(788,720,50,50);
  phishing2 = new comp_Phishing(922,144,50,50);
  phishing3 = new comp_Phishing(1350,620,50,50);

 // trojan = new trojan_Horse(1185,868,70,70);
  // trojan1 = new trojan_Horse(700,940,70,70);
  // trojan2 = new trojan_Horse(1100,300,70,70);
  // trojan3 = new trojan_Horse(1500,467,70,70);

  antivirus = new anti_virus(630,220,70,70);
  antivirus1 = new anti_virus(1350,942,70,70);

  // password = new pass_word(795,230,70,70);
  // password1 = new pass_word(1500,790,70,70);

  firewall = new fire_Wall(1185,711,70,70);
  firewall1 = new fire_Wall(1190,75,70,70);

  // downloads = new down_load(692,796,70,70);
  // downloads1 = new down_load(890,880,70,70);

  spam = new spam_mail(455,780,60,60);
  spam1 = new spam_mail(850,390,60,60);

  maze = createSprite(displayWidth/2,displayHeight/2,displayWidth, displayHeight)
  maze.addImage(mazeImg)
  maze.scale = 1.3;
  //maze.setCollider("circle",50,0,80);
  //maze.debug = true



}



function draw(){
 background (backgroundImage)

 text (mouseX+","+mouseY,mouseX,mouseY)
 push();
 fill("white");
 textSize(40);
 text ("OBTRUSION",10,displayHeight/2);
 pop();

 push();
 fill("white");
 textSize(20);
 text ("Score:",17,displayHeight/2);

 pop();

 push();
 stroke(100);
 fill("#27445C");
 text("___________________________________",10,displayHeight/2,60,60);
 text("___________________________________",10,displayHeight/2+5,60,60);
 pop();

  android.navigate();
  //android.collide();
  
  //virus.movement();
  //virus1.movement();
  //virus2.movement();
  //virus3.movement();

  //phishing.movement();
  //phishing1.movement();
 // phishing2.movement();
  //phishing3.movement();

//  trojan.display();
//  trojan1.display();
//  trojan2.display();
//  trojan3.display();

//  antivirus.display();
//  antivirus1.display();

//  downloads.display();
//  downloads1.display();

//  firewall.display();
//  firewall1.display();

//  password.display();
//  password1.display();

//  spam.display();
//  spam1.display();


 //[virus add movement function and bounceoff]



 drawSprites();
}

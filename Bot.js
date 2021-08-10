class Bot extends BaseClass {
    
    constructor(x, y, width, height){

      super(x,y,width,height);
      this.image = loadImage("Bot.png");
      this.body.addImage ("image",this.image)
      this.body.scale = 0.3;
      this.body.setCollider("circle",50,0,80);
      //this.body.debug = true

    }
    navigate(){
      
      if (keyDown("UP_ARROW")){
        this.body.y =  this.body.y-3
      
      }
      if (keyDown("DOWN_ARROW")){
        this.body.y =  this.body.y+3
      
      }
      
      if (keyDown("LEFT_ARROW")){
        this.body.x =  this.body.x-3
      
      }
      
      if (keyDown("RIGHT_ARROW")){
        this.body.x =  this.body.x+3
       
      }

    
    }

    collide (){
      if(this.body.collide(maze)){
      this.body.X =305
      this.body.Y =144
    }}
    
};
class comp_Virus extends BaseClass{
    constructor(x, y, width, height){

        super(x,y,width,height);
        this.image = loadImage("compVirus.png");
        this.body.addImage ("image",this.image)
        this.body.scale = 0.5;
      }
    movement() {
       this.body.velocityX = -3;
       this.body.bounceOff(edge1);
       this.body.bounceOff(edge2);
    
    }

}
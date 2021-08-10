class comp_Phishing extends BaseClass{
    constructor(x, y, width, height){

        super(x,y,width,height);
        this.image = loadImage("phishing.png");
        this.body.addImage ("image",this.image)
        this.body.scale = 0.09;
      }
      movement(){
        this.body.velocityY = 1;
      }

}
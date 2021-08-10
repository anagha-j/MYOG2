class fire_Wall extends BaseClass{
    constructor(x, y, width, height){

        super(x,y,width,height);
        this.image = loadImage("firewall.png");
        this.body.addImage ("image",this.image)
        this.body.scale = 0.4;
      }
  

      
}
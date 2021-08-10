class anti_virus extends BaseClass {
    
    constructor(x, y, width, height){

      super(x,y,width,height);
      this.image = loadImage("antivirus.png");
      this.body.addImage ("image",this.image)
      this.body.scale = 0.4;
    }


};
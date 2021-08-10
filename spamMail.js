class spam_mail extends BaseClass{
    constructor(x, y, width, height){

        super(x,y,width,height);
        this.image = loadImage("spam email img.png");
        this.body.addImage ("image",this.image)
        this.body.scale = 0.09;
      }
  
   
      
}
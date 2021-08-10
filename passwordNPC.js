class pass_word extends BaseClass{
    constructor(x, y, width, height){

        super(x,y,width,height);
        this.image = loadImage("password.png");
        this.body.addImage ("image",this.image)
      }
  

}
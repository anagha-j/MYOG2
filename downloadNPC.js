class down_load extends BaseClass{
    constructor(x, y, width, height){

        super(x,y,width,height);
        this.image = loadImage("download.png");
        this.body.addImage ("image",this.image)
        this.body.scale = 0.3;
      }

}
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const rec1 = new Rectangle(5,6);
const rec2 = new Rectangle(4,6);
document.write("<br>Area of rec1 is = "+ rec1.getArea())
document.write("<br>Area of rec2 is = "+ rec2.getArea())


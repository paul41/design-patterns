class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());// person.name is not accessible

class Person1 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person1 = new Person1("Jane");
console.log(person1.getName());

/** Interface */
interface Rectangles {
  height: number,
  breadth: number
}

interface ColoredRectangle extends Rectangles {
  color: string
}
const coloredRectangle: ColoredRectangle = {
  height: 20,
  breadth: 10,
  color: "red"
};
/** ------------ */

interface Shape{
    getArea:()=>number;
}
class Rectangle implements Shape{
    public constructor(protected length:number,protected width:number){}
    public getArea():number{
        return this.length*this.width
    }
}
const rect = new Rectangle(2,3);
console.log(rect.getArea());

class Square extends Rectangle{
    constructor(width:number){
        super(width,width) // 👈 Calls Rectangle's constructor
    }
}
const sq = new Square(8);
const res = sq.getArea();
console.log(res);

//Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. 
// Members that are left unimplemented also use the abstract keyword.
//Abstract classes cannot be directly instantiated, as they do not have all their members implemented.

abstract class Triangle{
    public abstract getArea():number;
    public toString():string{
        return `Triangle[area=${this.getArea()}]`
    }
}
class Rightangle extends Triangle{
    constructor(protected base:number,protected height:number){
        super()
    }
    public getArea(): number {
        return ((this.base*this.height)/2)
    }
}
const rightTri = new Rightangle(4,6)
console.log(rightTri.toString())

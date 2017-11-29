class Parent{
  static getAge(){

  }
  constructor(name){
    this.name = name;
  }
  getName(){
    console.log(this.name);
  }
}
class Child extends Parent{

}
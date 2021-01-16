'use strict';
//Class Make
//Getter and setters
class User{
    //constructor
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.firstName}: hello!`);
    }
    get age(){
        return this._age;
    }
    set age(value){
        // 0 check 방법
        if(value < 0){
            throw Error('age can not be negaticv');
        }
        // 2번째 0 check 방법
        this._age = value < 0 ? 0 : value;
    }
}

const sungil = new User('LEE','SungIl',30);
console.log(sungil.firstName);
console.log(sungil.lastName);
sungil.speak();

//만약, 사용자가 나이를 -1이나, 오류의 값을 주게 되면 바로 지정되어 출력되는데, 이를 방지하고자 Getter와 Setters를 사용한다.
const donghan = new User('LEE','SungIl',0);

class Experiment {
    publicField = 2;
    #privateField = 0;  //최근에 추가된 기능, #을 붙히면 된다 많이 사용되지 않음
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

class Artivee{
    //클래스를 만들고, Object를 선언하면,
    //모든 오브젝트마다의 값이 다 다른데,
    // 간혹 모든 오브젝트마다 공통적으로 사용되어야 하는 값이 있을수 있다. (class 자체 할당)
    // 그럴때 사용되는것이 static
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Artivee.publisher);
    }
}

const article1 = new Artivee(1);
const articel2 = new Artivee(2);

//static은 Object에 할당되는것이 아닌, class 자체에 할당 되는것이다.
console.log(article1.publisher);  // undefined
console.log(Artivee.publisher);
Artivee.printPublisher();

// 상속 + 다양성
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;

        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        console.log(`❤`);  // window 버튼 + . 클릭시 이모지 창이 나온다.
        super.draw(); // 부모의 드로우 함수를 호출할때, 사용
    }
    getArea(){
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//instanceOf
//상속
console.log(rectangle instanceof Rectangle); //  우측의 Rectangle의 Class의 상속된 Object인지 판단하여 True와 Flase 를 Return 한다.
console.log(rectangle instanceof Object);
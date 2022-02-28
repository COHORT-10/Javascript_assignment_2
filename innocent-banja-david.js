//javaScript code on objects and classes..

// 1st object
function Cat(name, color, age, numLegs) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.numLegs = numLegs;
}

let cat1 = new Cat("Harry", "brown", 5, 4);
let cat2 = new Cat("Potter", "black", 3, 4);
let cat3 = new Cat("Grace", "grey", 1, 4);
let cat4 = new Cat("Cat", "white", 4, 4);

//2nd object
const employee = function(id, username, position, salary) {
    this.id = id;
    this.username = username;
    this.position =  position;
    this.salary = salary;
}

let employee1 = new employee("0001", "john@gmail.com", "Branch Manager", 300000);
let employee2 = new employee("0002", "betty@gmail.com", "Accountant", 400000);
let employee3 = new employee("0004", "carol@gmail.com", "Chief Operations Officer", 500000);

//3rd object
function Student(regNo, faculty, course, courseDuration) {
    this,regNo = regNo;
    this.faculty = faculty;
    this.course = course;
    this.courseDuration = courseDuration;
}

let student1 = new Student("17/0001/BSSE", "IT", "BSSE", 4);
let student2 = new Student("17/0005/BBA", "BA", "BBA", 3);
let student3 = new Student("17/0003/CSC", "IT", "CSC", 2);
let student4 = new Student("18/0008/BIT", "IT", "BIT", 3)

//4th object
function Car(type, color, year, engineType) {
    this.type = type;
    this.color = color;
    this.year = year;
    this.engineType = engineType;
}

let car1 = new Car("Toyota", "white", 1994, "desiel");
let car2 = new Car("Ford", "black", 2013, "petrol");
let car3 = new Car("Chevron", "red", 2015, "desiel");
let car4 = new Car("Rover", "grey", 2002, "petrol");

//5th object
function Patient(patName, patNum, patAddress, patDisease){
    this.patName = patName;
    this.patNum = patNum;
    this.patAddress = patAddress;
    this.patDisease = patDisease;
}

let patient1 = new Patient("Jonas", 1234, "Kansanga", "COVID-19");
let patient2 = new Patient("Nalogo", 1236, "Namanve", "Malaria");
let patient3 = new Patient("Ake", 12349, "Old Kampala", "Cancer");
let patient4 = new Patient("Musa", 12378, "Ggaba", "AIDS");

//6th object
function Product(id, pname, price, discount) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.discount = discount;
}

let p1 = new Product(0000, "cotton", 18000, 1000);
let p2 = new Product(0003, "colors", 3000, 200);
let p3 = new Product(0010, "computer", 4000000, 100000);
let p4 = new Product(0020, "phone", 1200000, 80000);


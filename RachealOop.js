//First class.
function Car(brandName, noWheels, engineType, noSeats, colour) {
	this.brandName = brandName;
	this.noWheels = noWheels;
	this.engineType = engineType;
	this.noSeats = noSeats;
	this.colour = colour;
}

// Instances of class Car.
let toyota = new Car("Toyota", 4, "inline", 7, "silvergrey");
let subaru = new Car("Subaru", 4, "inline", 5, "black");
let mercedes = new Car("Mercedes", 4, "v8", 5, "black");

console.log(toyota);
console.log(subaru);
console.log(mercedes);
console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss");

//Second Class.
function Child(childName, years, noSiblings, posInChidren, height, colour) {
	this.childName = childName;
	this.years = years;
	this.noSiblings = noSiblings;
	this.posInChidren = posInChidren;
	this.height = height;
	this.colour = colour;
}
// Instances of class Child.
let racheal = new Child("Racheal", 34, 9, "First", "168cm", "brown");
let sharon = new Child("Sharon", 32, 9, "Second", "165cm", "chocolate");
let bridget = new Child("Bridget", 30, 9, "Third", "165cm", "brown");

console.log(racheal);
console.log(sharon);
console.log(bridget);
console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss");

//Third class.
function Laptop(lapName, generation, screenSize, osType, specs) {
	this.lapName = lapName,
		this.generation = generation,
		this.screenSize = screenSize,
		this.osType = osType,
		this.specs = specs

}
// Instances of class Laptop.
let laptop1 = new Laptop("Lenovo", "core i7 10th gen", "13 inches", "ubuntu-linux", "16GB RAM,512SSD");
let laptop2 = new Laptop("Hp", "core i5 8th gen", "16 inches", "ubuntu-linux", "8GB RAM,512HDD");
let laptop3 = new Laptop("Accer", "core i3 6th gen", "13 inches", "windows", "4GB RAM,256HDD");

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss");

//Fourth class.
function School(schoolName, location, moto, centreNum, population) {
	this.schoolName = schoolName;
	this.location = location;
	this.moto = moto;
	this.centreNum = centreNum;
	this.population = population;
}

// Instances of class School.
let school1 = new School("Kyambogo College School", "Kampala-Banda", "Duc In Altum", "U/KCS/gv/sc50", 1500);
let school2 = new School("Gayaza Junior School", "Wakiso-Gayaza", "Never Give Up", "U/GJS/pr/ps79", 900);
let school3 = new School("Naalya Secondary School", "Wakiso-Namugongo", "For the Better Horizon", "U/NSS/pr/sc20", 1200);

console.log(school1);
console.log(school2);
console.log(school3);
console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss");

//Fifth class.
function Employee(employerName,nameOfworker,jobTitle,department,yearsSpent) {
	this.employerName = employerName;
	this.nameOfworker = nameOfworker;
	this.jobTitle = jobTitle;
	this.department = department;
	this.yearsSpent = yearsSpent;
}
// Instances of class Employee.
let employee1 = new Employee("Electoral Commision","Nakalawa Racheal","Statistician","Election Management","10");
let employee2 = new Employee("Bank Of Uganda","Kyolaba Sharon","Procurement Officer","Cards","5");
let employee3 = new Employee("Digisure","Musa Ntege","Junior Dev","IT","3");

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss");

//Sixth Class.
function Student(studentName,sponsorshipType,studentNum,faculty,course) {
	this.studentName = studentName;
	this.sponsorshipType = sponsorshipType;
	this.studentNum = studentNum;
	this.faculty = faculty;
	this.course = course;
}
// Instances of class Student.
let nakalawa = new Student("Nakalawa Racheal","Government","06/U/715","Institute of Stastics","Bachelor of Statistics");
let rwamirego = new Student("Rwamirego Irene","Private","08/U/PR/401","Faculty of Science","Bachelor of Science");
let ssengendo = new Student("Ssengendo Christopher","Government","06/U/213","Faculty of Technology","Bachelor of Quantity Suerveying");

console.log(nakalawa);
console.log(rwamirego);
console.log(ssengendo);
console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss");

//Seventh Class.
function Country(countryName,continent,location,population,leaderName) {
	this.countryName = countryName;
	this.continent = continent;
	this.location = location;
	this.population = population;
	this.leaderName = leaderName;
	//Method in class Country.
	this.patriot = function (){
		return (`My Country ${this.contryName} is awesome`)
	}
}
// Instances of class Country.
let uganda = new Country("Republic of Uganda","Africa","East Africa","46 million people","Yoweri Kaguta Museveni");
let america = new Country("United States of America","NorthAmerica","central NorthAmerica","332 million people","Joe Biden");
let china = new Country("People's Republic of China","Asia","East Asia","1.41 billion people","Xi Jinping");

console.log(uganda.patriot());
console.log(uganda);
console.log(america);
console.log(china);
console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss");
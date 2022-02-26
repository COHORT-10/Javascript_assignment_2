// 1 object
const person = function(fName,lName,age,gender,dBirth){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.gender = gender;
    this.dBirth = dBirth;
}
let person1 = new person('John','Doe',43,'male','01-29.1992')
let person2 = new person('Kenneth','Doe',35,'male','02-09-1990')
let person3 = new person('Hellen','Doe',26,'female','04-12-1995')

console.log(person1,person2,person3);

// 2nd object
const student = function(name,school,age,gender,dBirth){
    this.name = name;
    this.school = school;
    this.age = age;
    this.gender = gender;
    this.dBirth = dBirth;
}
let student1 = new student('John','buddo',16,'male','01-29.1992')
let student2 = new student('Kenneth','maryland',17,'male','02-09-1990')
let student3 = new student('Hellen','gayaza',19,'female','04-12-1995')

console.log(student1,student2,student3);

// 3rd object
const animal = function(name,type,place,gender,color){
    this.name = name;
    this.type = type;
    this.place = place;
    this.gender = gender;
    this.color = color;
}
let animal1 = new animal('cat','domestic','uganda','male','white')
let animal2 = new animal('dog','domestic','kenya','female','black')
let animal3 = new animal('fox','wild','africa','female','brown')

console.log(animal1,animal2,animal3);

// 4th object
const car = function(name,type,color,model,year){
    this.name = name;
    this.type = type;
    this.color = color;
    this.model = model;
    this.year = year;
}
let car1 = new car('toyota','sedan','red','vits','2008')
let car2 = new car('toyota','suv','black','prado','2013')
let car3 = new car('mistubish','suv','white','outlander','2000')

console.log(car1,car2,car3);

// 5th object
const country = function(name,population,president,location,weather){
    this.name = name;
    this.population = population;
    this.president = president;
    this.location = location;
    this.weather = weather;
}
let country1 = new country('uganda','10million','museveni','africa','warm')
let country2 = new country('america','20million','biden','america','cold')
let country3 = new country('kenya','15million','uhuru','africa','04-12-warm')

console.log(country1,country2,country3);

// 6th object
const restaurant= function(name,place,type,food,drinks){
    this.name = name;
    this.place = place;
    this.type = type;
    this.food = food;
    this.drinks = drinks;
}
let restaurant1 = new restaurant('quepasa','kisementi','mexican','totillas','tequila')
let restaurant2 = new restaurant('yujo','nakasero','japanese','sushi','sake')
let restaurant3 = new restaurant('fang fang','cbd','chinese','noodles','tea')

console.log(restaurant1,restaurant2,restaurant3);

// 7th object
const food = function(name,type,place,color,flavour){
    this.name = name;
    this.type = type;
    this.place = place;
    this.color = color;
    this.flavour = flavour;
}

let food1 = new food('matooke','stach','uganda','green','sweet')
let food2 = new food('irish','carbohydrates','uganda','yellow','sweet')
let food3 = new food('meat','protiens','uganda','red','soft')

console.log(food1,food2,food3);



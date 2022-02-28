/* Define 7 classes using 'this' keyword.
Each class should have at least 5 properties.
Instantiate atleast 5 objects.
Save the file name oop_studentname.js */

// first class
function country (name, location, cityName, president, noPeople) {
    this.name = name; 
    this.location = location; 
    this.cityName = cityName; 
    this.president = president;
    this.noPeople =noPeople;
}

// instances of classes 
let country1 = new country('Uganda', 'East-Africa', 'Kampala', 'Museveni Kaguta', 34,000,000);
let country2 = new country ('Kenya', 'East-Africa', 'Nairobi', 'Uhuru Kenyatta', 55,726,792);
let country3 = new country('Tanzania', 'East-Africa', 'Dadoma', 'Samia Suluhu Hassan', 62,542,074);

console.log(country1);
console.log(country2); 
console.log(country3);

// Second cLass 
function house(typeOfhouse, noFloors, noRooms, materialUsed, wallThickness) {
    this.typeOfhouse = typeOfhouse;
    this.noFloors = noFloors;
    this.noRooms = noRooms;
    this.materialUsed = materialUsed;
    this.wallThickness = wallThickness;
}

// instances of the classes
let house1 = new house('flat', 2, 6, 'bricks', '230 mm');
let house2 = new house('hut', 1, 1, 'mud', '150 mm'); 
let house3 =new house('bangalow', 1, 6, 'bricks', '200 mm'); 

console.log(house1);
console.log(house2);
console.log(house3);

// third class 
function courses(courseName, noYears, institute, university, location ) {
    this.courseName =courseName;
    this.noYears = noYears;
    this.institute = institute; 
    this.university = university;
    this.location = location;
}

// instances of the classses
let course1 = new courses ('Software-Engineering', 4, 'Engineering', 'Makerere', 'Central-Uganda');
let course2 = new courses ('Civil Engineering', 4, 'Engineering', 'Kyambogo- University','Central-Uganda'); 
let course3 = new courses('Business Adminstration', 3, 'Accountings', 'Busitema', 'Eastern Uganda'); 

// fourth class
function car(brand,name, noWheels, color, noSeats); 
this.brand = carBrand;
this.name = carName;
this.noWheels = noWheels;
this.color = color;
this.noSeats = noSeats;

//  instances of the classses
let car1 = new car('Toyota', 'RAV-4', 4, 'black', 4); 
let car2 = new car('Subaru', 'Forester', 4, 'white', 5); 
let car3 = new car('BMW', 'BMW 4', 4, 'white', 6);

// fifth class 
function person(name, gender, age, height, nationality) {
    this.name = name; 
    this.gender = gender; 
    this.age = age; 
    this.height = height; 
    this.nationality = nationality;
}

// instances
let person1 = new person('Daphne', 'Female', 23, '1.6 meters', 'Ugandan'); 
let person2 = new person('Micheal', 'Male', 28, '1.73 meters', 'Kenyan'); 
let person3 = new person('Michelle', 'Female', 24, '1.59 meters', 'Tanzanian'); 

// sixth class
 function animals(name, type, age, noLegs, purpose) {
     this.name = name; 
     this.type = type; 
     this.age = age; 
     this.noLegs = noLegs;
     this.purpose = purpose; 
 }

 let animal1 = new animals('dog', 'pet', 5, 4);
 let animal2 = new animals('cow', 'domestic', 4, 4, 'milk'); 
 let animal3 = new animals('cat', 'domestic', 9, 4, 'eat mice'); 

 console.log(animal1); 
 console.log(animal2); 
 console.log(animal3); 

 

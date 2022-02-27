//FIRST//
const Shoe = function (shoeBrand, shoeType, occasion, colour, size) {
    this.shoeBrand = shoeBrand;
    this.shoeType = shoeType;
    this.occasion = occasion;
    this.colour = colour;
    this.size = size;
};
let Shoe1 = new Shoe("Nike", "Sneaker", "Exercise", "Yellow and Blue", "UK7");
let Shoe2 = new Shoe("Gucci", "HighHeel", "Dinner Party", "Gold", "UK6.5");
let Shoe3 = new Shoe("Bata", "Toughies", "School", "Black", "US5");
let Shoe4 = new Shoe("Clarks", "DressShoe", "Work", "Brown", "EUR 49");
let Shoe5 = new Shoe("Adidas", "Slipper", "Brunch", "Green", "UK7.5");
console.log(Shoe2)


//SECOND//
const Child = function (cName, age, tribe, school, attendance) {
    this.cName = cName;
    this.age = age;
    this.tribe = tribe;
    this.school = school;
    this.attendance = attendance;
};
let Child1 = new Child("Kylie", "5yrs", "Mugwere", "Kings Jr", "Present");
let Child2 = new Child("Joseph", "2yrs", "Alur", "Kindercare", "Absent");
let Child3 = new Child("Nina", "3 months", "Muganda", "Home", "Present");
let Child4 = new Child("Brisa", "7yrs", "Ngoni", "Standard Junior", "Absent");
let Child5 = new Child("Joel", "2yrs", "Zulu", "Kindercare", "Absent");

console.log(Child1)

//THIRD//
const Song = function (singer, year, chartNum, country, genre) {
    this.singer = singer;
    this.year = year;
    this.chartNum = chartNum;
    this.country = country;
    this.genre = genre;
};
let Song1 = new Song("Bobi Wine", "2003", "2", "Uganda", "Ragga");
let Song2 = new Song("Luther Vandross", "1986", "1", "USA", "Blues");
let Song3 = new Song("Usher", "2005", "10", "Englan", "Soft Rock");
let Song4 = new Song("Kafeero", "1990", "3", "Uganda", "Country");
let Song5 = new Song("Sauti Soul", "2019", "7", "Kenya", "Hip Hop");
console.log(Song4)


//FOURTH//
const Module = function (mName, students, complexity, school, studentOpinion) {
    this.mName = mName;
    this.students = students;
    this.complexity = complexity;
    this.school = school;
    this.studentOpinion = studentOpinion;
};
let Module1 = new Module("Javascript", "30", "Easy", "Refactory", "Hard");
let Module2 = new Module("Art", "40", "Easy", "Buddo", "Very Hard");
let Module3 = new Module("Pure maths", "15", "Hard", "Nabisunsa", "Hard");
let Module4 = new Module("History", "20", "Very Easy", "Kitenda", "Hard");
let Module5 = new Module("Food and Nutrition", "100", "Very Easy", "Makerere", "Extremely Hard");
console.log(Module4)


//FIFTH//
const FarmAnimal = function (name, vacStatus, vet, vacDate, health) {
    this.name = name;
    this.vacStatus = vacStatus;
    this.vet = vet;
    this.vacDate = vacDate;
    this.health = health;
};
let FarmAnimal1 = new FarmAnimal("Goat", "vaccinated", "Steven", "24/12/2019", "Healthy");
let FarmAnimal2 = new FarmAnimal("Cow", "vaccinted", "Irene", "03/03/2020", "Sick");
let FarmAnimal3 = new FarmAnimal("Horse", "unvaccinated", "Ozzy", "--/--/--", "Healthy");
console.log(FarmAnimal3)


//SIXTH//
const Furniture = function (name, purpose, state, colour, maker) {
    this.name = name;
    this.purpose = purpose;
    this.state = state;
    this.colour = colour;
    this.make = maker;
};
let Furniture1 = new Furniture("Sofa", "Sitting", "New", "Grey", "Nina Interiors");
let Furniture2 = new Furniture("Coffee Table", "Decoration", "Used", "Brown", "Musa Body");
let Furniture3 = new Furniture("Spice Rack", "Storage", "Used", "White", "Mukisa Carpenter");
console.log(Furniture2)


//SEVENTH//
const Food = function (fName, fType, fCost, fOrigin, fServing) {
    this.fName = fName;
    this.fType = fType;
    this.fCost = fCost;
    this.fOrigin = fOrigin;
    this.fServing = fServing;
};

let Food1 = new Food("Matooke", "Carbohydrate", "Ugx15,000", "Uganda", "15");
let Food2 = new Food("Ugali", "Carbohydrate", "Ugx6,000", "Kenya", "10");
let Food3 = new Food("Pizza", "Protein", "Ugx23,000", "Italy", "3");
let Food4 = new Food("Noodles", "Fat", "Ugx3,000", "Japan", "1");
let Food5 = new Food("Biriyani", "Protein", "Ugx20,000", "India", "2");

console.log(Food3)
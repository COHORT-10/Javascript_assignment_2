// 1 //

const car = function(carName, carModel, modelYear, horsepower, doorNumber, gasType, engineType) {
    this.cName = carName; 
    this.cModel = carModel;
    this.mYear = modelYear; 
    this.hp = horsepower; 
    this.dType = doorNumber; 
    this.gType = gasType;
    this.eType = engineType;
};

let car1 = new car("Prado", "Toyota", 2022, "200hp",5, "Diesel", "Gasoline");
let car2 = new car("Tesla Model S", "Tesla", 2020, "500hp",5, "Electric", "Electric-energy");
let car3 = new car("Rnge Rover SV", "Range Rover", 2022, "450hp",5, "Petrol", "Gasoline");
let car4 = new car("G-Wagon", "Benz", 2020, "500hp",5, "Petrol", "Gasoline");
let car5 = new car("Rivian Limited", "Rivian", 2022, "600hp",4, "Electric", "Eloectric-energy");

console.log(car2, car5);

// 2 //

const smartphone = function(phoneName, brand, modelYear, storageSize, batterySize ) {
    this.pName = phoneName; 
    this.brand = brand; 
    this.mYear = modelYear; 
    this.sSize = storageSize; 
    this.bsize = batterySize;
};

let smartphone1 = new smartphone("Iphone 13pro Max", "Iphone", 2021, "1TB", "4352mAh");
let smartphone2 = new smartphone("Samsung S22 Ultra", "Samsung", 2022, "1TB", "5000mAh");
let smartphone3 = new smartphone("Vivo 70+ pro", "Vivo", 2021, "256GB", "5000mAh");
let smartphone4 = new smartphone("Huawei Mate 40 pro", "Huawei", 2020, "256GB", "4000mAh");
let smartphone5 = new smartphone("One Plus 10pro", "One Plus", 2021, "256GB", "4500mAh");

console.log(smartphone3, smartphone4);

// 3 //

const laptop = function(laptopName, brand, modelYear, ram, storage) {
    this.lName = laptopName; 
    this.brand = brand; 
    this.mYear = modelYear; 
    this.ram = ram; 
    this.storage = storage;
};

let laptop1 = new laptop("MacBook Pro M1", "Apple", 2021, "18RAM", "1TB");
let laptop2 = new laptop("Lenovo Gaming Laptop", "Lenovo", 2020, "20RAM", "2TB");
let laptop3 = new laptop("HP Notebook", "HP", 2019, "12RAM", "512GB");
let laptop4 = new laptop("Dell Laptop", "DELL", 2020, "18RAM", "1TB");
let laptop5 = new laptop("Microsoft Surface laptop", "Microsoft", 2021, "18RAM", "1TB");

console.log(laptop1);
console.log(laptop5);

// 4 //

const country = function(countryName, capitalCity, vicePresident, numberOfDistricts, population,) {
    this.cName = countryName; 
    this. cCity= capitalCity; 
    this.vPresident = vicePresident; 
    this. noD = numberOfDistricts; 
    this.population = population; 
};

let country1 = new country("Uganda", "Kampala", "Shafiq", 17, "10million");
let country2 = new country("Tanzania", "Dar Es Salaam", "Simon", 25, "25million");
let country3 = new country("Burundi", "Bujumbura", "Rodrick", 11, "6million");
let country4 = new country("Egyt", "Cairo", "Mahmoud", 15, "26million");
let country5 = new country("Rwanda", "Kigali", "Musonera", 10, "7million");

console.log(country1);
console.log(country4);

// 5 //

const television = function(tvName, brand, tvType, tvInches, screenType) {
    this.tName = tvName; 
    this.brand = brand; 
    this.tType = tvType; 
    this.tInches = tvInches; 
    this. sType= screenType;
};

let television1 = new television("Apple tv", "Apple", "Flat Screen", 55, "LCD");
let television2 = new television("Samsung", "Samsung", "Curved", 60, "LCD");
let television3 = new television("Hisence", "Hisence", "Flat Screen", 55, "OLED");
let television4 = new television("LG Bazzleless", "LG", "Flat Screen", 60, "LCD");
let television5 = new television("Sony Bravia", "Sony", "Flat Screen", 55, "LCD");

console.log(television2, television4);

// 6 //

const wireless_buds = function(budsName, brand, playbackTime, chargingTime, price) {
    this.bName = budsName; 
    this.brand = brand; 
    this.playbackTime = playbackTime; 
    this.chargingTime = chargingTime; 
    this.price = price;
};

let wireless_buds1 = new wireless_buds("Samsung Buds 3", "Samsung", "15hrs", "15mins", 345);
let wireless_buds2 = new wireless_buds("Microsoft buds", "Microsoft", "12hrs", "15mins", 314);
let wireless_buds3 = new wireless_buds("Airpods Pro 3", "Apple", "15hrs", "14mins", 349);
let wireless_buds4 = new wireless_buds("Beats Pro", "Beats by Dre", "10hrs", "19mins", 300);
let wireless_buds5 = new wireless_buds("Bose Buds", "Bose", "13hrs", "17mins", 389);

console.log(wireless_buds5, wireless_buds1);

// 7 // 

const movies = function(movieName, category, length, releaseYear, rating) {
    this.mName = movieName; 
    this.category = category; 
    this.length = length; 
    this.rYear = releaseYear; 
    this.rating = rating;
};

let movies1 = new movies("The Endgame", "Action", "2:30hrs", 2019, 10.0);
let movies2 = new movies("Avatar", "Action", "2:40hrs", 2009, 10.0);
let movies3 = new movies("Fast 5", "Action Comedy", "1:30hrs", 2011, 9.0);
let movies4 = new movies("Barbershop", "Comedy", "1:30hrs", 2002, 10.0);
let movies5 = new movies("Lord of the Rings (Part 3)", "Action & Adventure", "3:00hrs", 2003, 10.0);

console.log(movies1, movies5, movies2);

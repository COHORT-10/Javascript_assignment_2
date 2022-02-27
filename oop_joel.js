//First//
const guitar = function (guitarBrand,guitarType,colour,size,price) {
    this.guitarBrand = guitarBrand;
    this.guitarType  = guitarType;
    this.colour      = colour;
    this.size        = size;
    this.price       = price;       
}
let guitar1 = new guitar("taylor","acoustic","black","standard","USD670")
let guitar2 = new guitar("fender", "electric","white","small","USD650")
let guitar3 = new guitar("yamaha","bass","red","blue","medium","USD600")

console.log(guitar2);

//Second//
const bike = function (brandName,colour,tyres,price,size) {
    this.brandName = brandName;
    this.colour    = colour;
    this.tyres     = tyres;
    this.price     = price;
    this.size      = size;
}
let guitar1 = new bike("honda","red","two","980k","large")
let guitar2 = new bike("baja","blue","three","800k","small")
let guitar3 = new bike("suzuki","black","four","850k","medium")

console.log(guitar3);

//third//
const phone = function(brandName,colour,size,price,year) {
    this. brandName = brandName;
    this. colour    = colour;
    this. size      = size;
    this. price     = price;
    this.year       = year;
}
let phone1 = new phone("iphone","white","medium","600k","2019")
let phone2 = new phone("tesla","black","large","900k","2022")
let phone3 = new phone("motorola","grey","small","750k","2020")

console.log(phone2,phone3);

//fourth//
const people = function(colourName,tribe,region,city,population){
    this.colourName = colourName;
    this.tribe      = tribe;
    this.region     = region;
    this.city       = city;
    this.population = population;
}
let people1 = new people("dark","acholi","north","gulu","2million")
let people2 = new people("light","batoro","western","fortportal","3million")
let people3 = new people("brown","baganda","central","kampala","5million")

console.log(people2);

//fifth//
const car = function(brandName,model,size,seats,fuelType){
    this.brandName = brandName;
    this.type      = model;
    this.size      = size;
    this.seats     = seats;
    this.fuelType  = fuelType;
}
let car1 = new car("Vox","jeev","medium","8seats","petrol")
let car2 = new car("benz","gle","large","7seats","diesel")
let car3 = new car("prado","gxl","small","6seats","neon")

console.log(car1);

//sixth//
const family = function(famName,fName,mName,sName,dName){
    this.famName = famName;
    this.fName   = fName;
    this.mName   = mName;
    this.sName   = sName;
    this.dName   = dName;
}
    let family1 = new family("mugambwa","joel","debie","emmanuel","grace")
    let family2 = new family("museveni","kaguta","janet","muhoozi","natasha")
    let family3 = new family("ruyondo","ruth","daniel","esther","faith")

    console.log(family2,family3);

//seventh//
const laptop = function(brandName,size,colour,price,year){
    this.brandName = brandName;
    this.size      = size;
    this.colour    = colour;
    this.price     = price;
    this.year      = year;
}
  let laptop1 = new laptop("mac","medium","grey","990k","2022")
  let laptop2 = new laptop("dell","large","black","800k","2020")
  let laptop3 = new laptop("hp","small","white","760k",2019)

  console.log(laptop2);


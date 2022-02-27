//1
function bus(color, brandName, engineOil, transmission, capacity) {
    this.color = color;
    this.brandName = brandName;
    this.engineOil = engineOil;
    this.transmission = transmission;
    this.capacity = capacity;
    
    this.sound = function () {
        return "the bus hoots"
    };
    
}

let bus1 = new bus("Green", "Benz", "Synthetic", "Manual", "50-seater")
let bus2  = new bus("Blue", "Actros", "SemiSynthetic", "Manual", "20-seater")
let bus3  = new bus("White", "Toyota", "Coventional", "Automatic", "35-seater")

console.log(bus1);
console.log(bus2);
console.log(bus3);

console.log(bus1.sound());

//2
//defining a class called computer 
//and expects those values in the brackets are parameters
function computer(color, brandName, storage, ram, gCard) {
//this keyword is used to create the properties of the class
    this.color = color;
    this.brandName = brandName;
    this.storage = storage;
    this.screen = ram;
    this.gCard = gCard;  
}
// the new word is a constructor 
// a constructor is used to initialize objects 
//key problem is function anonymus
// why not bus 1 instead of bus some applies for all classes as per now
let computer1 = new computer("black", "asus", "256gb", "4gb", "1050ti")
let computer2 = new computer("white", "lenovo", "512gb", "8gb", "1060ti")
let computer3  = new computer("red", "lenovo", "1tb", "16gb", "2080ti")

console.log(computer1);
console.log(computer2);
console.log(computer3);

//f3
function team(homeKit, teamName, stadium, country, league) {
    this.homek = homeKit;
    this.teamName = teamName;
    this.stadium = stadium;
    this.country = country;
    this.league = league;

    };
    
let team1 = new team("red", "manUtd", "oldTrafford", "england", "premierLeague")
let team2  = new team("white", "realMadrid", "bernarbeu", "spain", "laLiga")
let team3  = new team("blue", "manCity", "etihad", "england", "premierLeague")


console.log(team1,team2,team3);

//4
function phone(color, brandName, storage, simCard, camera) {
    this.color = color;
    this.brandName = brandName;
    this.storage = storage;
    this.simCard = simCard;
    this.camera = camera;
    
}

let phone1 = new phone("sieraBlue", "iphone13", "64gb", "singleSim", "12px")
let phone2  = new phone("purple", "s10", "128gb", "dualsim", "16px")
let phone3  = new phone("White", "vivoX70", "256gb", "dualsim", "40px")

console.log(phone1,phone2,phone3);


//5

function shoe(color, brandName, size, type, texture) {
    this.color = color;
    this.brandName = brandName;
    this.size = size;
    this.type = type;
    this.texture = texture;
    
}

let shoe1 = new shoe("black", "addidas", "twelve", "sandals", "swede")
let shoe2  = new shoe("brown", "timberLand", "seven", "boots", "leather")
let shoe3  = new shoe("blue", "nike", "eight", "sneakers", "cloth")

console.log(shoe1,shoe2,shoe3);


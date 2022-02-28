// first class
class soccerPlayer {
    constructor(name, position, number, age, country){
        this.name = name;
        this.position = position;
        this.number = number;
        this.age = age;
        this.country = country;
    }
}

let soccerPlayer2 = new soccerPlayer("Ronaldo", "striker", 7, 42, "Portugal");
let soccerPlayer3 = new soccerPlayer("Neymar", "Winger", 10, 27, "Brazil");
let soccerPlayer4 = new soccerPlayer("Sancho", "England", 23, 24, "Winger");
let soccerPlayer5 = new soccerPlayer("Messi", "Striker", 10, 38, "Argentina");
let soccerPlayer6 = new soccerPlayer("Pogba", "Midfielder", 6, 27, "France");
//console.log(soccerPlayer6);

// second class
const car = function(Color, Name, Origin, Version, speed){
    this.Color = Color;
    this.Name = Name;
    this.Origin = Origin;
    this.Version = Version;
    this.speed = speed;
    this.sound = function(){
        let sound = "tatatata";
        return sound;
    }
}


let car1 = new car("Blue", "Lamborghini", "USA", 2008, 217);
let car2 = new car("Black", "Range Rover", "USA", 2012, 280);
let car3 = new car("White", "Tesla", "USA", 2018, 260);
let car4 = new car("Black", "Mercedez Benz", "USA", 2014, 270);
//console.log(car1);

//third class
const pc = function(label, color, ram, storage, windows){
    this.label = label;
    this.color = color;
    this.ram = ram;
    this.storage = storage;
    this.windows = windows;
}

let pcX = new pc("HP", "Black", 8, 500, 10);
let pcY = new pc("Dell", "Silver", 4, 1000, 11);
let pcZ = new pc("Macbook", "Grey", 12, 1000, "MacIOS");
let pcW = new pc("GForce", "Black", 4, 400, 10);
let pcV = new pc("Nvidia", "Red", 12, 1200, 11);
//console.log(pcZ);

//forth class
const animal = function(name, legs, type, years){
    this.name = name;
    this.legs = legs;
    this.type = type;
    this.years = years;
}

let animalA = new animal("Cow", 4, "Domestic", 6);
let animalB = new animal("Goat", 4, "domesic", 2);
let animalC = new animal("Kangaroo", 2, "wild", 3);
let animalD = new animal("Gorilla", 2, "Wild", 8);
let animalE = new animal("Rabbit", 2, "Wild", 4);
//console.log(animalA);

//5th class

const person = function (name, age, gender, location, job){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.location = location;
    this.job = job;
}

const personW = new person("Brisa", 24, "M", "Kampala", "Dev");
const personX = new person("Saint", 28, "F", "Gulu", "None");
const personY = new person("Davie", 25, "M", "Kabale", "Accountant");
const personZ = new person("Jenny", 22, "F", "Mukono", "Student");
const personZ2 = new person("Doja", 26, "F", "Atlanta", "Artist");
//console.log(personZ2);

//6th Classes

const artist = function(name, genre, location, networth, gang){
    this.name = name;
    this.genre = genre;
    this.location = location;
    this.networth  = networth;
    this.gang = gang;
}

const artist1 = new artist("21 Savage", "Rap", "Atlanta", 200, "Slaughter Gang");
const artist2 = new artist("Drake", "Hip Hop", "Toronto", 400, "None");
const artist3 = new artist("J Cole", "Rap", "North Carolina", 350, "None");
const artist4 = new artist("Kanye", "Rap", "Chicago", 900, "None");

//Seventh class
class phone {
    constructor(name, color, RAM, phoneType) {
        this.name = name;
        this.color = color;
        this.RAM = RAM;
        this.phoneType = phone.phoneType;
    }
}

let phone1 = new phone("iPhone", "Silver", 8, "IOS");
let phone2 = new phone("Techno", "Black", 4, "Android");
let phone3 = new phone("Samsung", "Black", 8, "Android");
console.log(phone1);
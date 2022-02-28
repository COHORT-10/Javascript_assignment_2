// Class One
class person {
    constructor(fName, lName, age, gender, ethicity) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
        this.ethicity = ethicity;
    }
}
let person1 = new person('Amr','Aine',13,'male','Ugandan')
let person2 = new person('Nancy','Muwado',90,'female','Kenyan')
let person3 = new person('Ashraf','Yen',26,'male','Nigerian')

console.log(person1,person2,person3);

// Class Two
class car {
    constructor(name, country, year, color, engineType) {
        this.name = name;
        this.make = make;
        this.year = year;
        this.color = color;
        this.engineType = engineType;
    }
}
let car1 = new car('Range Rover','England',2021,'Red','4000cc')
let car2 = new car('BMW','German',2020,'Matt Black','3900cc')
let car3 = new car('Benz','German',2021,'Matt White','4000cc')

console.log(car1,car2,car3);

// Class Three
class shoe {
    constructor(name, type, country, gender, color) {
        this.name = name;
        this.type = type;
        this.country = country;
        this.gender = gender;
        this.color = color;
    }
}
let shoe1 = new shoe('Mariachi','Gentle','Italy','male','Shiny Black')
let shoe2 = new shoe('Rusell','Gentle','France','male','Dark brown')
let shoe3 = new shoe('Adidas','Sport','USA','female','Black')

console.log(shoe1,shoe2,shoe3);

// Class Four
class tv {
    constructor(name, type, color, model, year) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.model = model;
        this.year = year;
    }
}
let tv1 = new tv('Skyworth','Smart','Black','SW 097','2020')
let tv2 = new tv('Samsung','Smart','Black','AMS 78D','2013')
let tv3 = new tv('Lambert','LED','Blue','ED21','2000')

console.log(tv1,tv2,tv3);

// Class Five
class country {
    constructor(name, population, president, continent, languange ) {
        this.name = name;
        this.population = population;
        this.president = president;
        this.continent = continent;
        this.languange = languange;
    }
}
let country1 = new country('Burundi','1million','Nkuruziza','Africa','French')
let country2 = new country('Uganda','20million','Museveni','Africa','English')
let country3 = new country('USA','100million','Biden','North America','English')

console.log(country1,country2,country3);

// Class Six
class phone {
    constructor(name, country, type, color, year) {
        this.name = name;
        this.country = country;
        this.type = type;
        this.color = color;
        this.year = year;
    }
}
let phone1 = new phone('iPhone','USA','Smart','Gold','2021')
let phone2 = new phone('Samsung','Korea','Smart','Black','2021')
let phone3 = new phone('iTel','China','None smart','White','2011')

console.log(phone1,phone2,phone3);

// Class Seven
class food {
    constructor(name, type, origin, color, value) {
        this.name = name;
        this.type = type;
        this.origin = origin;
        this.color = color;
        this.value = value;
    }
}

let food1 = new food('Yarms','Root','Congo','Red','Carbohydrates')
let food2 = new food('Matooke','Pollinate','Uganda','Green','Iron')
let food3 = new food('Beans','Proteins','Malawi','red','Proteins')

console.log(food1,food2,food3);
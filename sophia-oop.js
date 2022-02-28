//function 1
function Country(name, geogLocation, president, offLanguage, countryCode) {
  this.name = name;
  this.geogLocation = geogLocation;
  this.president = president;
  this.offLanguage = offLanguage;
  this.countryCode = countryCode;
}

const uganda = new Country("Uganda", "East-Africa", "Bobi", "English", 256);
const uganda = new Country("Kenya", "East-AAfrica", "uhuru", "English", 254);
const uganda = new Country(
  "Tanzania",
  "East-Africa",
  "Samia",
  "Swahili",
  "255"
);

//function 2
function Person(firstName, lastName, age, gender, nationality) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.nationality = nationality;
}

const sophia = new Person("sophia", "Alwoch", 26, "female", "ugandan");
const janat = new Person("Alum", "Janat", 22, "female", "ugandan");
const fatuma = new Person("fatuma", "Nandera", 22, "female", "ugandan");

//function 3
function Student(firstName, lastName, schoolName, grade, mark) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.schoolName = schoolName;
  this.grade = grade;
  this.mark = mark;
}

const joanita = new Student("Joanita", "Makubuya", "Kibuli SS", 10, 87);
const kato = new Student("Steven", "Kato", "Kibuli SS", 10, 90);
const kusinza = new Student("Kusinza", "Joseph", "Kibuli SS", 10, 82);

//function 4
function Address(district, countyName, subcounty, parish, village) {
  this.district = district;
  this.countyName = countyName;
  this.subcounty = subcounty;
  this.parish = parish;
  this.village = village;
}

const ttula = new Address(
  "Kampala",
  "Kawempe division",
  "kawempe",
  "Kawempe1",
  "Kawempe"
);
const kabale = new Address(
  "Wakiso",
  "Katabi Town Council",
  "katabi",
  "Katabi",
  "Kabale"
);
const manyago = new Address(
  "Wakiso",
  "Entebbe Municipality",
  "Entebbe",
  "Entebbe",
  "Entebbe township"
);

//function 5
function Phone(operatingSys, phoneName, ramSize, make, releaseDate) {
  this.operatingSys = operatingSys;
  this.phoneName = phoneName;
  this.ramSize = ramSize;
  this.make = make;
  this.releaseDate = releaseDate;
}

const note10 = new Phone("Android", "samsung-note10", "6gb", "samsung", 2020);
const hot10 = new Phone("Android", "infinix-hot10", "4gb", "infinix", 2019);
const camon10 = new Phone("Android", "camon10", "3.5gb", "tecno", 2019);

//function 6
function City(cityName, country, population, mayor, divisions) {
  this.cityName = cityName;
  this.country = country;
  this.population = population;
  this.mayor = mayor;
  this.divisions = divisions;
}

const kigali = new City("Kigali", "Rwanda", 800, 000, "unknown", "unkown");
const kampala = new City("Kampala", "Uganda", 1, 500, 000, "Lukwago", 4);
const gulu = new City("Gulu", "Uganda", 800, 000, "unknown", "unkown");

//function 7
function Tribe(ethnicGroup, language, leader, origin, location) {
  this.ethnicGroup = ethnicGroup;
  this.language = language;
  this.leader = leader;
  this.origin = origin;
  this.location = location;
}

const acholi = new Tribe(
  "Nilotics",
  "Luo",
  "Rwot",
  "Bahr-el-ghazel",
  "Northern Uganda"
);
const baganda = new Tribe(
  "Bantu",
  "Luganda",
  "kabaka",
  "cameroon highlands",
  "central Uganda"
);
const banyankole = new Tribe(
  "Bantu",
  "Runyankole",
  "Omukama",
  "cameroon highlands",
  "western Ugandass"
);

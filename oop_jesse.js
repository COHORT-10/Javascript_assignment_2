// object oriented Programming.

/**
 * creating objects using the this keyword.
 */

// First

const school = function(schoolName, sexOfStudents, establishedIn, location, size){
    this.schoolName = schoolName;
    this.sexOfStudents = sexOfStudents;
    this.establishedIn = establishedIn;
    this.location = location;
    this.size = size;
}
let school1 = new school( 'St.Mary\'s College Kisubi', 'Males', 1906,'Kisubi Wakiso','3000sqkm')
let school2 = new school( 'Mount St.Mary\'s College Namagunga', 'Females', 1906,'Namagunga Mukono','4000sqkm')
let school3 = new school( 'St.Mary\'s Secondary School Kitende', 'Mixed', 2001,' Kitende Wakiso','2300sqkm')
let school4 = new school( 'St.Mary\'s Secondary School Kitende', 'Mixed', 2001,' Kitende Wakiso','2300sqkm')

console.log( school1, school2,school3,school4);

// Second

const foodnutrient = function(type, deficiency, symptoms, foundIn ){
    this.type= type;
    this.deficiency= deficiency;
    this.symptoms= symptoms;
    this.foundIn = foundIn;
}
let a = new foodnutrient( 'vitamin C','Scurvy','delayed wound healing','citrus fruits,strawberries, broccoli')
let b = new foodnutrient( 'iron','anemia','decreased work output','meat,spinach,seafood,brocolli')
let c = new foodnutrient( 'iodine','goitre','enlarged thyroid gland','iodized salt,saltwater, fish')
let d = new foodnutrient( 'vitamin A', 'xerophthalmia','blindness from chronic eye infections','liver, fortified milk, sweet potatoes, spinach, greens, carrots, cantaloupe')
let e = new foodnutrient( 'vitamin D', 'rickets','weakened bones, bowed legs','fortified milk, fish oils, sun exposure')

console.log(a, b, c, d, e);

// Third

const countries= function (countryName, GDP, perCapita, population, ranking) {
    this.countryName= countryName;
    this.GDP = GDP;
    this.perCapita = perCapita;
    this.population= population;
    this.ranking= ranking;
}
let c1 = new countries( 'United States','22.2 Tn','$66,302','334,805,269',1)
let c2 = new countries( 'China','15.47 Tn','$10,679','1,448,471,400',2)
let c3 = new countries( 'Japan','5.50Tn','$43,759','125,584,838',3)
let c4 = new countries( 'Germany','4.16Tn','$49558','83,883,596',4)
let c5 = new countries( 'India','3.26Tn','$2,316', '1,406,631,776',5)
let c6 = new countries( 'United Kingdom','2.93Tn','$43,853','68,497,907',6)

console.log(c1, c2, c3, c4, c5, c6);

// Four

const fuelStation = function( stationName, numberOfLocations, origin, reach, quality ){
    this.stationName = stationName;
    this.numberOfLocations = numberOfLocations;
    this.origin = origin;
    this.reach= reach;
    this.quality = quality;

}
var f1 = new fuelStation('Total',250,'France','Worldwide','Very High Quality')
var f2 = new fuelStation('Shell',450,'United States Of America','Worldwide','High Quality')
var f3 = new fuelStation('Luqman',250,'Kenya ','E.Africa','Good Quality')
var f4 = new fuelStation('Petro',100,'Uganda','Worldwide','Poor Quality')
var f5 = new fuelStation('Rubis',150,'France','Worldwide','High Quality')

console.log(f1,f2,f3,f4,f5);

// Fifth

const fashionBrand = function(brandName, origin, netRevenue, proprietor,targetMarket){
    this.brandName = brandName;
    this.origin = origin;
    this.netRevenue = netRevenue;
    this.proprietor = proprietor;
    this.targetMarket = targetMarket;
}
let fb1 = new fashionBrand('Gucci','Florence,Italy','$9.62billion','','Elite-worldwide')
let fb2 = new fashionBrand('Abrayanz','Kampala,Uganda','Undefined','Ahumuza Brian','Elite-Uganda')
let fb3 = new fashionBrand('OffWhite','Milan,Italy','$36.4billion','Virgil Abloh','Fast-Fashion-youthful')
let fb4 = new fashionBrand('New Balance','Boston ,UnitedStates','','William J. Riley','Ordinary-People')
let fb5 = new fashionBrand('Versace','Milan, Italy','$718 million','Gianni Versace','Elite-worldwide')

console.log(fb1,fb2,fb3,fb4,fb5);

// Sixth

const baby = function(babyName,dateOfBirth,weight,mothersName,immunizationdate,vaccineDelivered){
    this.babyName = babyName;
    this.dateOfBirth= dateOfBirth;
    this.weight= weight;
    this.mothersName= mothersName;
    this.immunizationdate=immunizationdate;
    this.vaccineDelivered= vaccineDelivered;
}
let bby1= new baby('jesse','12/02/1997','13kg','roseMary','23/04/2001','Inactivated polio vaccine (IPV)')
let bby2= new baby('henry','22/07/1995','12kg','Maria','23/04/2001','Bacille Calmette-Guérin (BCG)')
let bby3= new baby('mary','16/12/2001','11kg','Angella','23/04/2001','(Daptacel (Tdap)')
let bby4= new baby('jackson','12/02/1995','9kg','Francesca','23/04/2001','Inactivated polio vaccine (IPV)')
let bby5= new baby('morris','12/02/2000','18kg','Hillary','23/04/2001','PPSV23 (Pneumovax 23)')
let bby6= new baby('jill','12/02/2001','20kg','MaryAnn','23/04/2001','Typhoid Polysaccharide (Typhim Vi)')

console.log(bby1, bby2,bby3,bby4,bby5,bby6);

// Seventh

const pc = function(pcName ,pcCompany, price, batterySize, resolution){
    this.pcName =pcName;
    this.pcCompany=pcCompany;
    this.price = price;
    this.batterySize= batterySize;
    this.resolution =resolution;
}
var pc1 = new pc('Dell Latitude','Dell','$900','2300mAh','1024*768')
var pc2 = new pc('AlienWare','Dell','$1300','3500mAh','1024*768')
var pc3 = new pc('Dell Vostro','Dell','$3000','4500mAh','1366*768')
var pc4 = new pc('Microsoft Surface Book','Microsoft','$2900','5300mAh','1024*768')
var pc5 = new pc('HP Elitebook','HP','$3400','4000mAh','1920*1080')

console.log(pc1, pc2, pc3,pc4, pc5);

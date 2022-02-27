//first class
const makeUp = function(mBrand,lManufacture,mOwner,numOfShade,mRelease){
    this.mBrand = mBrand;
    this.lManufacture = lManufacture;
    this.mOwner = mOwner;
    this.mShade = numOfShade;
    this.mRelease = mRelease;

};
let makeUp1 = new makeUp("Fenty Beauty", "San Franscisco","Rihanna",50,"2017");
let makeUp2 = new makeUp("Mac","Markham-Ontario","Estee Lauder Companies",53,"1984");
let makeUp3 = new makeUp("Maybelline","Manhattan","Thomas Lyle Williams",18,"1914");
let makeUp4 = new makeUp("Nars","Canada"," François Nars",34,"1994");
let makeUp5 = new makeUp("Chanel","France","Coty",30,"1924");

console.log(makeUp3,makeUp2,makeUp1,makeUp4,makeUp5);

//second
const tree = function(location,species,environment,product,typeOfLeaf){
    this.location = location;
    this.tType = species;
    this.environment = environment;
    this.product = product;
    this.typeOfLeaf = typeOfLeaf;
};
let tree1 = new tree("Uganda","Umbrella Tree","Low moist tropical forests","fodder for animals","oval leaf");
let tree2 = new tree("Uganda","Ficus Natalensis","wet,dry and thickets","Back cloth","long oval");
let tree3 = new tree("Masaka","Eucalyptus tree","Tropical","wood","lanceolate-shaped");
let tree4 =  new tree("Califonia","Coast Redwood","wet winters","lightweight wood","needle-like");
let tree5 = new tree("North America","White Oak","moist","Acorns nuts","sinuate");
console.log(tree3,tree5,tree4,tree2,tree1);

//third
const car = function(cBrand,cFounder,cFounded,cHeadquarters,slogan){
    this.cBrand = cBrand;
    this.cFounder = cFounder;
    this.cFounded = cFounded;
    this.cHeadquarters = cHeadquarters;
    this.slogan = this.slogan
}
let car1 = new car("Toyota","Kiichiro Toyoda","1937"," Toyota City, Japan","Let's go places");
let car2 = new car("Volkswagen","German Labour Front","1937","Wolfsburg, Germany","Das Auto");
let car3 = new car("Daimler","Gottlieb Daimler","1886","Stuttgart, Germany","The best or nothing");
let car4 = new car("Ford Motor","Henry Ford","1903","Dearborn, Michigan, U.S","Go further");
let car5 = new car("Honda","Soichiro Honda, Takeo Fujisawa","1948","Minato, Tokyo, Japan","The power of dreams");
 console.log(car1,car2,car4,car3,car5);

 //fourth
 const fashion = function(fBrand,fFounder,fFounded,fHeadquarters,category){
     this.fBrand = fBrand;
     this.fFounder = fFounder;
     this.fFounded = fFounded;
     this.fHeadquarters = fHeadquarters;
     this.category = category

 }
 let fashion1 = new fashion("Nike","Phil Knight","1964","Beaverton, Oregon","men");
 let fashion2 = new fashion("Louis Vuitton","Louis Vuitton","1854"," Paris, France","women");
 let fashion3 = new fashion("Hermes","Thierry Hermès","1837","Paris,France","children");
 let fashion4 = new fashion("Gucci","Guccio Gucci","1921","Florence Italy","men,women,children");
 let fashion5 = new fashion("Zalando","Robert Gentz, David Schneider","2008","Berlin, Germany","men");

 console.log(fashion3,fashion1,fashion4,fashion3,fashion5);

 //fifth
 const school = function(name,location,sCategory,founded,motto){
     this.name = name;
     this.location = location;
     this.sCategory = sCategory;
     this.founded = founded;
     this.motto = motto;
 }
 let school1 = new school("Gayaza High School","Gayaza parish","Secondary","1905","Never give up");
 let school2 = new school("Hormisdallen school","Kamwokya","Primary","1986","Education has no money value");
 let school3 = new school("Makerere University","Makerere Hill","University","1922","We build for the future");
 let school4 = new school("Aga Khan nursery","Kololo","nusery","1994","Strive to Learn");
 let school5 = new school("Ntinda vocational training school","ntinda","vocational","2012","learn");
  console.log(school3,school4,school5,school1,school2);

  //sixth
  const profession = function(pName,pSector,course,workPlace){
      this.pName = pName;
      this.pSector = pSector;
      this.course = course;
      this.workPlace = workPlace;
  }
  let profession1 = new profession("Doctor","Health","Medicine","Case clinic");
  let profession2 = new profession("Electrical enginer","Engineering","UMEME");
  let profession3 = new profession("Architect","Building sector","Architecture","Studio FH Architects");
  let profession4 = new profession("Auditor","Public","ACCA","KPMG");
  let profession5 = new profession("Lawyer","Legal","Law","Sebalu and Lule Advocates");

  console.log(profession5,profession4,profession3,profession2,profession1);

  //seventh
  const typeofglass = function(gName,gShape,drink,origin){
      this.gName = gName;
      this.gShape = gShape;
      this.drink = drink;
      this.origin = origin;
  }
  let typeofglass1 = new typeofglass("Pint","conical","beer,soda water","UK");
  let typeofglass2 = new typeofglass("Flute","cylindrical","champagne","early 1700s");
  let typeofglass3 = new typeofglass("Cocktail","inverted cone","cocktail drinks","Paris Exhibition");
  let typeofglass4 = new typeofglass("Irish Coffee","conical","hot whiskey","England");
  let typeofglass5 = new typeofglass("Snifter","Bowl shape","amber liquors","12th cenntury");
   console.log(typeofglass2,typeofglass1,typeofglass3,typeofglass4,typeofglass5);
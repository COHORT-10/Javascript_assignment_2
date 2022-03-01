// Class 1
// Function definition for Human() function, that takes 6 parameters:
function Human(hName, hGender, hHeight, hColor, hAge, hWeight) {
    this.myName = hName;
    this.myGender = hGender;
    this.myHeight = hHeight;
    this.myColor = hColor;
    this.myAge = hAge;
    this.myWeight = hWeight;
}

// Instantiating Class Human() objects. Calling Objects.
let human1 = new Human("Norman Ainobushoborozi", "Male", "5\'2\"", "Brown", "32yrs", "64kgs")
let human2 = new Human("Kylie Namugga", "Female", "5\'4\"", "Chocolate", "26yrs", "75kgs")
let human3 = new Human("Ddiro Joseph", "Male", "5\'5\"", "Black", "28yrs", "80kgs")
let human4 = new Human("Matsiko Samuel", "Male", "5\'8\"", "Dark", "26yrs", "69kgs")
let human5 = new Human("Odeke Caroline", "Female", "5\'5\"", "Light", "19yrs", "55kgs")


// Formatted data output for different Human class objects. This is what you will see as output in the terminal
console.log("Name: " + human1.myName + "\n" + "Gender: " + human1.myGender + "\n" + "Height: " + human1.myHeight + "\n" + "Complexion: " + human1.myColor + "\n" + "Age: " + human1.myAge + "\n" + "Weight: " + human1.myWeight + "\n");
console.log("Name: " + human2.myName + "\n" + "Gender: " + human2.myGender + "\n" + "Height: " + human2.myHeight + "\n" + "Complexion: " + human2.myColor + "\n" + "Age: " + human2.myAge + "\n" + "Weight: " + human2.myWeight + "\n");
console.log("Name: " + human3.myName + "\n" + "Gender: " + human3.myGender + "\n" + "Height: " + human3.myHeight + "\n" + "Complexion: " + human3.myColor + "\n" + "Age: " + human3.myAge + "\n" + "Weight: " + human3.myWeight + "\n");
console.log("Name: " + human4.myName + "\n" + "Gender: " + human4.myGender + "\n" + "Height: " + human4.myHeight + "\n" + "Complexion: " + human4.myColor + "\n" + "Age: " + human4.myAge + "\n" + "Weight: " + human4.myWeight + "\n");
console.log("Name: " + human5.myName + "\n" + "Gender: " + human5.myGender + "\n" + "Height: " + human5.myHeight + "\n" + "Complexion: " + human5.myColor + "\n" + "Age: " + human5.myAge + "\n" + "Weight: " + human5.myWeight + "\n");


// Class 2
// Function definition for Human() function, that takes 6 parameters:
function Novel(nTitle, nAuthor, nPublisher, nYear, nPages) {
    this.aTitle = nTitle;
    this.anAuthor = nAuthor;
    this.aPublisher = nPublisher;
    this.theYear = nYear;
    this.thePages = nPages;
}

// Instantiating Class Novel() objects. Calling Objects.
let novel1 = new Novel("This One Summer", "Mariko Tamaki & Jillian Tamaki", "AAL", "2015", "254")
let novel2 = new Novel("Generation One", "Pittacus Lore", "INS", "2004", "332")
let novel3 = new Novel("One of Us Is Lying", "Karen M. McManus", "MMSA", "2020", "158")
let novel4 = new Novel("Ready Player One", "Ernest Cline", "WWD", "2010", "403")
let novel5 = new Novel("Two Can Keep a Secret", "Karen M. McManus", "MMSA", "2008", "250")


// Formatted data output for different Human class objects. This is what you will see as output in the terminal
console.log("Title: " + novel1.aTitle + "\n" + "Author: " + novel1.anAuthor + "\n" + "Publisher: " + novel1.aPublisher + "\n" + "Year of Publishing: " + novel1.theYear + "\n" + "Number of Pages: " + novel1.nPages + "\n");
console.log("Title: " + novel2.myName + "\n" + "Author: " + novel2.anAuthor + "\n" + "Publisher: " + novel2.aPublisher + "\n" + "Year of Publishing: " + novel2.theYear + "\n" + "Number of Pages: " + novel2.nPages + "\n");
console.log("Title: " + novel3.myName + "\n" + "Author: " + novel3.anAuthor + "\n" + "Publisher: " + novel3.aPublisher + "\n" + "Year of Publishing: " + novel3.theYear + "\n" + "Number of Pages: " + novel3.nPages + "\n");
console.log("Title: " + novel4.myName + "\n" + "Author: " + novel4.anAuthor + "\n" + "Publisher: " + novel4.aPublisher + "\n" + "Year of Publishing: " + novel4.theYear + "\n" + "Number of Pages: " + novel4.nPages + "\n");
console.log("Title: " + novel5.myName + "\n" + "Author: " + novel5.anAuthor + "\n" + "Publisher: " + novel5.aPublisher + "\n" + "Year of Publishing: " + novel5.theYear + "\n" + "Number of Pages: " + novel5.nPages + "\n");


// Class 3
// Function definition for BAccount() function, that takes 6 parameters:
function BAccount(aName, aNumber, aBalance, aBranch, aLocation) {
    this.myAName = aName;
    this.myANumber = aNumber;
    this.myABalance = aBalance;
    this.myABranch = aBranch;
    this.myALocation = aLocation;
}

// Instantiating Class Human() objects to. Calling Objects.
let account1 = new BAccount("Norman Ainobushoborozi", "00223-31432-2334", 150000, "Makin1", "Kampala")
let account2 = new BAccount("Kylie Namugga", "00223-32212-2322", 12000200, "Mersd1", "Wakiso")
let account3 = new BAccount("Ddiro Joseph", "00223-32232-2211", 1221000, "Ruhr1", "Mbarara")
let account4 = new BAccount("Matsiko Samuel", "00223-34432-2233", 150000, "Ebbz1", "Entebbe")
let account5 = new BAccount("Odeke Caroline", "00223-36552-2234", 100000, "Ktd12", "Kotido")


// Formatted data output for different Human class objects. This is what you will see as output in the terminal
console.log(account1,"\n");
console.log(account2,"\n");
console.log(account3,"\n");
console.log(account4,"\n");
console.log(account5,"\n");


// Class 4
// Function definition for Utensil() function, that takes 6 parameters:

function Utensil(uShape, uMaterial, uSize, uWeight, uPrice) {
    this.shape = uShape;
    this.material = uMaterial;
    this.size = uSize;
    this.weight = uWeight;
    this.price = uPrice;
}

// Calling 5 objects of the class Utensil.

let saucepan = new Utensil('Cylindrical','Stainless Steel','480cubic cm','1.2kg','UGX 10,000');
let knife = new Utensil('Straight','Stainless steel','15cm','0.3kg','UGX 8,000');
let fryingPan = new Utensil('Round','Dull Chrome','28cm','0.75kg','UGX 15,000');
let peeler  = new Utensil('Curved edge','Metal and plastic','10cm','0.2kg','UGX 20,000');
let bakingDish = new Utensil('Box-shaped','PVC','75cubic cm','1kg','UGX 35,000');

// Outputing Utensils to console..
console.log(saucepan,"\n");
console.log(knife,"\n");
console.log(fryingPan,"\n");
console.log(peeler,"\n");
console.log(bakingDish,"\n");

// Class 5
// Function Mineral Definition

function Mineral(mColor, mTexture, mHardness, mWeight, elementSymbol){
    this.color = mColor;
    this.texture = mTexture;
    this.hardness = mHardness;
    this.weight = mWeight;
    this.symbol = elementSymbol;
}

// Instantiating 5 objects of the Mineral class.

let gold = new Mineral('yellowish orange', ['soft','malleable','ductile'], 2.5,'196.96657 u','Au');
let silver = new Mineral('metallic shinny gray', ['soft','ductile','malleable','lustruous'], 2.8,'107.8682 u', 'Ag');
let diamond = new Mineral('yello/pink/brown/gray', ['crystal','hard'], 10, '12.01 g/mol', 'C');
let bronze = new Mineral('reddish brown',['hard','brittle'], 3, '182.26','CuSn');
let copper = new Mineral('reddish metal',['cubic crystalline','malleable','ductile'],3,'63.546 u','Cu');


// Console out objects of the Mineral class

console.log(gold,'\n');
console.log(silver,'\n');
console.log(diamond,'\n');
console.log(bronze,'\n');
console.log(copper,'\n');

// Class 6
// Student Class definition

function Student(sName, sAge, sGender, sClass, sStream, sDorm) {
    this.name = sName;
    this.age = sAge;
    this.gender = sGender;
    this.class = sClass;
    this.stream = sStream;
    this.dorm = sDorm;
}

// Create 5 objects of the Student class

let student1 = new Student('Norman Ainobushoborozi', 32, 'Male', 'Year 2', 'Green', 'Mandela');
let student2 = new Student('Atim Gloria', 35, 'Female', 'Year 4', 'Green', 'Gaddafi');
let student3 = new Student('Wilson Makuru', 44, 'Male', 'Year 6', 'Blue', 'Kenyatta');
let student4 = new Student('Sheila Wendy', 23, 'Female', 'Year 1', 'Orange', 'Moi');
let student5 = new Student('Chris Mugaga', 30, 'Male', 'Year 2', 'Blue', 'Mandela');

// Console out student records

console.log(student1,'\n');
console.log(student2,'\n');
console.log(student3,'\n');
console.log(student4,'\n');
console.log(student5,'\n');


// Class 7
// Semester function definition.

function Semester(acYear,semester,testMark,courseWork,examMark,finalMark) {

    this.year = acYear;
    this.sem = semester;
    this.test = testMark;
    this.cw = courseWork;
    this.exm = examMark;
    finalMark = ((testMark + courseWork) / 2) + examMark;
    this.finMk = finalMark;
}

// Create 5 objects of the Semester class.

let yr1Sem1 = new Semester('2019','One',25,23,30);
let yr1Sem2 = new Semester('2019','Two',22,26,35);
let yr2Sem1 = new Semester('2020','One',32,30,40);
let yr2Sem2 = new Semester('2020','Two',20,19,33);
let yr3Sem1 = new Semester('2021','One',20,15,29);


// Output the results from the previous semesters for a particular student
console.log(yr1Sem1);
console.log(yr1Sem2);
console.log(yr2Sem1);
console.log(yr2Sem2);
console.log(yr3Sem1);

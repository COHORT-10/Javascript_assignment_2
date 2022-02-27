
const team = function(teamName,location,league){
    this.teamName = teamName;
    this.location = location;
    this.league = league;
 }
 
 let team1 = new team ("Arsenal","London","Premier");
 let team2 = new team ("Kobs","legends","ugandaRugbyLeg");
 let team3 = new team ("Lakers","UnitedStates","NBA");
 
 "..............................................one.................................................."
 
 const alcohol = function(title,type,opinion){
    this.title = title;
    this.type = type;
    this.opinion = opinion;
 } 
 
 let alcohol1 = new alcohol ("Malibu", "Rum", "Highly recommend it");
 let alcohol2 = new alcohol ("CaptainMorgan", "Rum" ,"Aliitle rough on the throat");
 let alcohol3 = new alcohol("ugCoco","Waragi","Only take it if you can find Malibu or Morgan");
 
 ".................................................two..............................................."
 
 const event = function(name,location,when){
    this.name = name;
    this.location = location;
    this.when = when;
    this.oliwa = function(){
       let oliwa = "when your asked this just pack your bags";
       return oliwa
    }
 }
   
 let event1 = new event ("NyegeNyege", "Jinja", "September");
 let event2 = new event ("Tuli Wawelu","Zanzibar","December");
 let event3 = new event ("Youddeserve a mid year break", "Kidepo","July")
 
 "................................................three................................................" 
 const country = function(name,location,population){
    this.name = name;
    this.location = location;
    this.population = population;
 } 
 
 let country1 = new country ("Uganda", "East", "60 Million");
 let country2 = new country ("South Africa", "South", "40 Million");
 let country3 = new country ("Nigerian", "West", "30 Million");
 
 "..................................................four.............................................."
 const phone = function(brand,price,color){
    this.brand = brand;
    this.price = price;
    this.color = color;
 } 
 
 let phone1 = new phone ("Samsung", "600k", "black");
 let phone2 = new phone ("Redmi", "300k", "white");
 let phone3 = new phone ("iphone", "1million", "grey");
 
 ".................................................five..............................................."
 const lake = function(name,size,location){
    this.name = name;
    this.size = size;
    this.location = location;
 } 
 
 let lake1 = new lake ("Victoria", "6miles", "South");
 let lake2 = new lake ("Kyoga", "3miles", "East");
 let lake3 = new lake ("Albert", "1mile", "East");
 
 "..................................................six.............................................."
 const car = function(brandName,tyre,color){
    this.brandName = brandName;
    this.trye = tyre;
    this.color = color;
 } 
 
 let car1 = new car ("Totoya", "4-tyres", "black");
 let car2 = new car ("Telsa", "6-tyres", "white");
 let car3 = new car ("Benz", "8-tyres", "grey");
 
 "..................................................seven.............................................."
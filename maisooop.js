function phone(brandName, batteryType, scrType, capacity, charger){
    this.brandName = brandName;
    this.batteryType = batteryType;
    this.scrType = scrType;
    this.capacity = capacity;
    this.charger = charger;
}

 let phone1 = new phone("Samsung", "Inbuilt Li-ion", "LCD", "64gb", "Type-C")
 console.log(phone1);
 let phone2 = new phone("iPhone", "Inbuilt Li-ion", "LED", "128gb", "Lightening Conductor")
 console.log(phone2);
 let phone3 = new phone("Tecno", "Removeable", "LED", "16gb", "Smart pin")
 console.log(phone3);

 function student(stdName, age, house, sex, idNumber){
    this.stdName = stdName;
    this.age = age;
    this.house = house;
    this.sex = sex;
    this.idNumber = idNumber;
}

 let student1 = new student("Maiso Roy", "24 years", "Muteesa", "Male", "KCB0001")
 console.log(student1);
 let student2 = new student("Ubuntu Royalty", "19 years", "Nigeria", "Male", "KCB0002")
 console.log(student2);
 let student3 = new student("Mirembe Hope", "21 years", "Grace", "Female", "KCB0003")
 console.log(student3);

 function country(ctryName, president, capitalCity, population, continent){
    this.ctryName = ctryName;
    this.president = president;
    this.capitalCity = capitalCity;
    this.population = population;
    this.continent = continent;
}

 let country1 = new country("Uganda", "Yoweri Kaguta", "Kampala", "44 million", "Africa")
 console.log(country1);
 let country2 = new country("Nigeria", "Muhammed Buhari", "Abuja", "73 million", "Africa")
 console.log(country2);
 let country3 = new country("China", "Xi Jin Ping", "Shanghai", "100 million", "Asia")
 console.log(country3);

 function domAnimal(animalName, animalOrder, sound, habitat, offspring){
    this.animalName = animalName;
    this.animalOrder = animalOrder;
    this.sound = sound;
    this.habitat = habitat;
    this.offspring = offspring;
}

 let domAnimal1 = new domAnimal("Cat", "Carnivore", "purrs", "kennel", "Kitten")
 console.log(domAnimal1);
 let domAnimal2 = new domAnimal("Dog", "Carnivore", "barks", "kennel", "puppy")
 console.log(domAnimal2);
 let domAnimal3 = new domAnimal("Goat", "Herbivore", "bleats", "pen", "kid")
 console.log(domAnimal3);

 function university(uniName, location, viceChancellor, stdPopulation, uniType){
    this.uniName = uniName;
    this.location = location;
    this.viceChancellor = viceChancellor;
    this.stdPopulation = stdPopulation;
    this.uniType = uniType;
}

 let university1 = new university("Makerere", "Kampala", "Prof. Nawangwe", "40,000", "Public")
 console.log(university1);
 let university2 = new university("Kyambogo", "Banda", "Prof. Katunguka", "30,000", "Public")
 console.log(university2);
 let university3 = new university("UCU", "Mukono", "Dr.Mushengyenzi", "25,000", "Private")
 console.log(university3);
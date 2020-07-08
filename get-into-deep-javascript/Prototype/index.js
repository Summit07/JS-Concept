var mammal = function ( legs, isDomesticated, name) {
    this.legs = legs;
    this.isDomesticated = isDomesticated;
    this.name = name;
}

mammal.prototype.walk = function () {
    console.log(`${this.name} is walking`);
}

mammal.prototype.getDetails = function () {
    console.log(`Legs count ${this.legs}`);
    console.log(`isDomesticated ${this.isDomesticated}`);
    

}




let lion = new mammal(4, true,'sher');
let tiger = new mammal(4, false, 'cheeta');

lion.walk();
tiger.walk();

lion.getDetails();
tiger.getDetails();

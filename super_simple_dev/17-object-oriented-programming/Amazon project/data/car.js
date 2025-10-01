export class car {
    brand;
    model;
    speed = 0;
    isTrunkOpen;

    constructor(carDetail){
        this.brand = carDetail.brand;
        this.model = carDetail.model;
    };

    go(){
        if(this.speed < 200){
            this.speed += 5;
        }
    };
    
    brake(){
        if(this.speed >= 5){
            this.speed -= 5;
        }
    };

    openTrunk(){
        if(this.speed === 0){
            this.isTrunkOpen = true;
        }
    };

    closeTrunk(){
        this.isTrunkOpen = false;
    };

    displayInfo(){
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, Trunk: ${this.isTrunkOpen === true ? 'Open' : 'Close'}`)
    };
};

const car1 = new car({
    brand: 'Toyota',
    model: 'Corolla'
});

const car2 = new car({
    brand: 'Tesla',
    model: 'Model 3'
});

// console.log(car1, car2);

car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();

car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();

car2.go();
car2.go();
car2.go();

car1.openTrunk();

car1.displayInfo();
car2.displayInfo();
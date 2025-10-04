export class car {
    brand;
    model;
    speed = 0;
    isTrunkOpen = false;
    topSpeed = 200;

    constructor(carDetail){
        this.brand = carDetail.brand;
        this.model = carDetail.model;
    };

    go(){
    if(this.isTrunkOpen === false){
        if(this.speed < this.topSpeed){
            this.speed += 5;
        }
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

class raceCar extends car {
    acceleration = 20;
    topSpeed = 300;
    isTrunkOpen = false;

    go(){
        if(this.speed < this.topSpeed){
            this.speed += this.acceleration;
        }
    }

    openTrunk(){};
    closeTrunk(){};

    displayInfo(){
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`)
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

const car3 = new raceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
});

// car1.displayInfo();
// car2.displayInfo();
// car3.displayInfo();
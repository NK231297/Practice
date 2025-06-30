class complexN{
    realN;
    ImagenaryN;

    constructor(realN, imagenaryN){
        this.realN = realN;
        this.imagenaryN = imagenaryN;
        return new complexN(realN, imagenaryN)
    };

    add(num){
        this.realN += num;
        this.ImagenaryN += num;
    };
};

let num1 = new complexN(2, 4);

console.log(num1);
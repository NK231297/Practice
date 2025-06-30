class complexN{
    realN;
    ImagenaryN;

    constructor(realN, imagenaryN){
        this.realN = realN;
        this.imagenaryN = imagenaryN;
    };
};

let num1 = new complexN(2, 4);

console.log(`${num1.realN}, ${num1.imagenaryN}`);
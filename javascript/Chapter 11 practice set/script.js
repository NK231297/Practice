class complexN{
    realN;
    ImagenaryN;

    constructor(realN, imagenaryN){
        this.realN = realN;
        this.imagenaryN = imagenaryN;
    };

    add(num){
        this.realN += num;
        this.ImagenaryN += num;
    };
};


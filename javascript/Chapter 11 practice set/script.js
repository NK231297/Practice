class kanche{
    nikkuKeKanche;
    rakuKeKanche;

    constructor(nikkuKeKanche, rakuKeKanche){
        this.nikkuKeKanche = nikkuKeKanche;
        this.rakuKeKanche = rakuKeKanche;

    };
};

let kancheBT = document.getElementById("kancheBT");

kancheBT.addEventListener(`click`, function(e){
    e.preventDefault();
})
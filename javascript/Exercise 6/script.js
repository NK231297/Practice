class todo{
    discription;
    
    static id = 1;
    constructor(discription){
        this.id = todo.id++;
        this.discription = discription;
    }
};

let discInput = document.getElementById(`disc`);
let saveBT = document.getElementById(`save`);


saveBT.addEventListener(`click`, function(e){
    e.preventDefault();

    let newTask = new todo(discInput.value);

    console.log(newTask)
});

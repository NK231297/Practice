class todo{
    static id = 1;
    discription;

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

    localStorage.setItem(id, newTask);
});

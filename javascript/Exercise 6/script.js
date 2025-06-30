class todo{
    static id = 1;
    discription;

    constructor(id, discription){
        this.id = todo.id++;
        this.discription = discription;
    }
};

let discInput = document.getElementById(`disc`);
let saveBT = document.getElementById(`save`);


saveBT.addEventListener(`click`, function(e){
    e.preventDefault();

    let newTask = new todo(id, discInput.value);

    localStorage.setItem(id, newTask.value);
});

class user {
    
    constructor(name, age, income){
    
        this.name = name;

        this.age = age;

        this.income = income;
    
    };

    static sortByAge (a, b){
        return a.age - b.age;
    };

    static sortByIncome (a, b){
        return a.income - b.income;
    };

}

const user1 = new user(`Vibhuti`, 30, 500);

const user2 = new user(`Happu`, 35, 25000);

const user3 = new user(`Manmohan`, 32, 50000);

const user4 = new user( `Gulfam Kali`, 30, 20000 );

const user5 = new user( `Prem Choudhari`, 100000 );

const users = [user1, user2, user3, user4, user5]

// users.sort( (a, b)=> a.age - b.age );

// users.sort( user.sortByAge );

users.sort( user.sortByIncome );

console.log(users);
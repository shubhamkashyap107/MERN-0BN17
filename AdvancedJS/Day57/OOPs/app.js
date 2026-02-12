// class BankAccount{

//     #name;
//     #balance;

//     constructor(name, balance, add)
//     {
//         this.#name = name
//         this.#balance = balance
//         this.address = add
//     }

//     withdraw(amount)
//     {
//         if(this.#balance < amount)
//         {
//             console.log("Insufficient Balance")
//             return
//         }
//         this.#balance -= amount
//         console.log(`${amount} withdrawn, balance is ${this.#balance}`)
//     }

//     deposit(amount)
//     {
//         this.#balance += amount
//         console.log(`${amount} deposited, balance is ${this.#balance}`)
//     }

//     checkBalance()
//     {
//         console.log(`Balance is ${this.#balance}`)
//     }
// }

// let account1 = new BankAccount("Aman", 100, "Delhi")
// // account1.address = "Pune"
// // console.log(account1)
// // account1.#balance = 9999999
// // console.log(account1.#balance)
// // account1.withdraw(20)
// account1.checkBalance()
// account1.deposit(10000)





// inheritance

class Vehicle{
    constructor(color, fuel, speed)
    {
        this.color = color
        this.fuel = fuel
        this.speed = speed
    }

    tellClass()
    {
        console.log("This is a method from Vehicle class.")
    }
}

class LandVehicle extends Vehicle{

    constructor(fuel, speed, tc, gc, color)
    {
        super(color, fuel, speed)
        this.tyres = tc
        this.gates = gc
        
    }

    tellClass()
    {
        console.log("This is a method from Land Vehicle class.")
    }

    abc()
    {
        console.log("ABC function without any parameters")
    }

    abc(name)
    {
        console.log("ABC with name parameter")
    }
    
}

// const vehicle = new Vehicle("Black", "Petrol", 100)
// console.log(vehicle)
// vehicle.tellClass()
const car = new LandVehicle("Red", "Petrol", 200, 4,4)
car.tellClass()
car.abc()
// console.log(car)
















// class LandVehicle{
//     constructor(color, fuel, speed, tc, gc)
//     {
//         this.color = color
//         this.fuel = fuel
//         this.speed = speed
//         this.tyres = tc
//         this.gates = gc
//     }
// }

// class AirVehicle{
//     constructor(color, fuel, speed, wingspan, type)
//     {
//         this.color = color
//         this.fuel = fuel
//         this.speed = speed
//         this.wingspan = wingspan
//         this.type = type
//     }
// }


// const v1 = new Vehicle("Black", "Diesel", 100)
// console.log(v1)

// const lv1 = new LandVehicle("White", "Petrol", 120, 4, 4)
// console.log(lv1)

// const av1 = new AirVehicle("White", "Petrol", 120, 50, "commercial")
// console.log(av1)


















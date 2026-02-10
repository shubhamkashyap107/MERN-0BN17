// class Person{
//     name  = "Shubham"
//     age = 20
//     city  = "Delhi"
//     gender = "Male"
//     favColor = "Black"
//     working = true
//     company = "Acciojob"
// }

// let p1 = new Person()
// console.log(p1)

// let p2 = new Person()
// console.log(p2)


// class Student{

//    constructor(rollNumber, nm, gndr, age, stndrd)
//    {
//     this.rollNumber = rollNumber
//     this.name = nm
//     this.gender = gndr
//     this.age = age
//     this.standard = stndrd
//    }


//     greet()
//    {
//     console.log(`Hello ${this.name}`)
//    }

// }


// const s1 = new Student(32, "Abhishek", "Male", 10, "5th")
// // console.log(s1)
// s1.greet()







// let s1 = new Student(32, "Abhishek", "Male", 10, "5th")
// console.log(s1)

// let s2 = new Student(1, "Aaditya", "Male", 10, "10th")
// s2.greet()
// console.log(s2)
// console.log(s2 instanceof Person)



// let obj = {}
// let obj2 = new Object()
// console.log(obj2)
// let arr = []
// let arr2 = new Array(10)
// console.log(arr2)


// let map = new Map()
// let set = new Set()
// let str = new String()
// let bool = new Boolean(true)
// let num = new Number(10)
// let fn = new Function()

// console.log(map)
// console.log(set)
// console.log(str)
// console.log(bool)
// console.log(num)
// console.log(fn)



class Rectangle{
    constructor(h,w)
    {
        this.height = h
        this.width = w
    }

    showArea()
    {
        console.log(this.height * this.width)
    }

    showPerimeter()
    {
        console.log(2 * (this.height + this.width))
    }
}

// const rect = new Rectangle(10,20)
// rect.showArea()
// rect.showPerimeter()


class BankAccount // name, amount, method -> withdraw, deposit, balance
{
    constructor(n, a)
    {
        this.name = n
        this.amount = a
    }

    withdraw(withdrawAmount)
    {
        if(withdrawAmount > this.amount)
        {
            console.log("Insufficient Balance")
            return
        }

        this.amount -= withdrawAmount
        console.log("Amount Withdrawn")
    }

    deposit(depositAmount)
    {
        this.amount += depositAmount
        console.log("Amount Deposited")
    }

    checkBalance()
    {
        console.log(`Balance : ${this.amount}`)
    }
}


// const account1 = new BankAccount("Shubham", 100)
// // console.log(account1)

// account1.withdraw(90)
// account1.withdraw(20)
// account1.deposit(1000)
// account1.checkBalance()







class ShoppingCart{
    
}
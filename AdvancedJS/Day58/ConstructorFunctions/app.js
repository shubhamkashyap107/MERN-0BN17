function Person(name, age, gender)
{
    this.name = name
    this.age = age
    this.gender = gender
}

Person.prototype.sayHi = function()
{
    console.log("Hello " + this.name)
}

let p1 = new Person("XYZ", 12, "Male")
console.log(p1)
p1.sayHi()

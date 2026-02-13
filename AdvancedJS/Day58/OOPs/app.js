class Parent{
    constructor(pp)
    {
        this.parentProperty = pp
    }
}


class Child extends Parent{
    constructor(pp, cp)
    {
        super(pp)
        this.childProperty = cp
    }
}

class GrandChild extends Child{
    constructor(pp,cp,gcp)
    {
        super(pp, cp)
        this.grandChildProperty = gcp
    }
}


const p = new Parent("This is parent")
const c = new Child("This is parent from child", "This is child")
const gcp = new GrandChild("This is parent from grandchild", "this is child from granchild", "this is grandchild")




// console.log(p)
// console.log(c)
// console.log(gcp)
// console.log([])
// console.log(String.prototype)




// let arr = [1,2,3]
// let arr2 = []
// console.log(arr)
// console.log(arr.__proto__) // double underscore proto - dunder proto
// console.log(arr.__proto__.__proto__) // Object prototype
// console.log(arr.__proto__.__proto__.__proto__) // null
// console.log(arr.__proto__.__proto__.__proto__.__proto__)

// console.log(arr.hasOwnProperty(1))
// arr.kuchBhi()
// console.log(arr.hasOwnProperty == arr2.hasOwnProperty)


// console.log(Function.prototype.__proto__.__proto__)
// console.log(Boolean.__proto__.__proto__.__proto__)
// console.log(Boolean.prototype.__proto__.__proto__)
// console.log(Array.prototype)

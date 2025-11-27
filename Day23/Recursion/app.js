function greet (n)
{
    if(n == 6)
    {
        return
    }
    console.log("Namaste")
    n++
    greet(n)
}

greet(1)






function sayHi(n)
{
    if(n == 0)
    {
        return
    }

    console.log("Hello")
    sayHi(--n)
}

sayHi(5)
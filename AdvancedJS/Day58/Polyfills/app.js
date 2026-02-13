if(!Array.prototype.hasOwnProperty("contains"))
{
    Array.prototype.contains = function(ele)
    {
        for(let i = 0; i < this.length; i++)
        {
            if(this[i] == ele)
            {
                return i
            }
        }
        return -1
    }
}


Array.prototype.push = function(ele)
{
    this.unshift(ele)
}

String.prototype.toUpperCase = function()
{
    return this.toLowerCase()
}


let arr = [1,2,3]
console.log(arr.contains(33))

arr.push(4)
console.log(arr)


console.log("qwe".toUpperCase())


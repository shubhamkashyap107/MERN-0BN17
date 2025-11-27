
function sumOfNaturalNumbers(n)
{
    if(n == 1)
    {
        return 1
    }
    return n + sumOfNaturalNumbers(n - 1)
}

function sumOfNaturalNumbers2(n, sum)
{
    if(n == 0)
    {
        console.log(sum)
        return
    }
    sumOfNaturalNumbers2(n - 1, sum + n)
}


// console.log(sumOfNaturalNumbers(5))
// sumOfNaturalNumbers2(5, 0)




function helper(n, m, sum)
{
  if(m == 0)
  {
    console.log(sum)
    return
  }
  helper(n, m - 1, sum + n)
}


helper(7181,8811,0)
// import React from 'react'
// const{memo} = React

// const Child = memo(() => {

//     console.log("Child Rendered")

//   return (
//     <div>Child</div>
//   )
// })

// // export default React.memo(Child)
// // const MemoisedChild = React.memo(Child)
// // export default MemoisedChild


// export default Child


import React, { useCallback, useMemo, useState } from 'react'

const Child = () => {

  console.log("Child Rendered")
  const[number, setNumber] = useState("")
  const[count, setCount] = useState(0)


  const isPrime = useCallback((num) => {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
  }, [])


  const nthPrime = useCallback(  function (n) {
      let count = 0;
      let num = 1;

      while (count < n) {
          num++;

          if (isPrime(num)) {
              count++;
          }
      }

      return num;
  }, [isPrime])

  // const ans = nthPrime(Number(number))
  const ans = useMemo(() => {
    return nthPrime(number)
  }, [number, isPrime, nthPrime])


  return (
    <div>
      <input 
        onChange={(e) => {
          setNumber(e.target.value)
        }}
        type="text" 
        placeholder='Enter n' 
      />

      <h1>Answer is {ans > 1 ? ans : ""}</h1>

      <div>
        <h1>Child Count : {count}</h1>

        <button onClick={() => {
          setCount(count + 1)
        }}>Increment Child Count</button>
        <button onClick={() => {
          setCount(count - 1)
        }}>Decrement Child Count</button>
      </div>
    </div>
  )
}

export default React.memo(Child)
import { useEffect, useState } from "react";

export function useFetch(url)
{
    const[data, setData] = useState([])

    useEffect(() => {
        async function getData()
        {
            const res = await fetch(url)
            const apiData = await res.json()

            setData(apiData)
        }
        getData()
    }, [])

    return [data]
}
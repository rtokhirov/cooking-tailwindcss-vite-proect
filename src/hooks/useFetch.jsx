import { useState, useEffect } from "react";

function useFetch (url) {
    const [data, setData]= useState(null)
    const [isPending, setIspending]= useState(false)
    const [error, setError]= useState(null)

    useEffect(()=>{
        const fetchRequest= async ()=>{
            try {
                setIspending(true)
                const req = await fetch(url)

                if(!req.ok){
                    throw new Error(req.statusText)
                }

                let jsonData = await req.json()

                setData(jsonData)
                setIspending(false)
                setError(null)

            } catch (err) {
                setIspending(false)
                setError(err.message)
                console.log(err.message);
            }
        }
        fetchRequest(url)
    },[url])

    // console.log(data);
    return {data,isPending,error}
}

export { useFetch }
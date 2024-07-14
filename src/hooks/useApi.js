import { useEffect, useState } from "react"

export const useApi = () => {

    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState(null);
    const [data, setData] = useState(null);


    useEffect(() => {

        if (url) {
            console.log(url,method);
            fetch(url).then((res) =>{
                console.log(res);
                 return res.json()
                }).then((data) =>{setData(data)});
        }
    }, [url, method])



    const trigrFetch = (fetchUrl, fetchOption) => {
        setUrl(fetchUrl);
        setMethod(fetchOption);
    }


    return { data, trigrFetch }
}
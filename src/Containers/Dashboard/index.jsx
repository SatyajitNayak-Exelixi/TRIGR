import { useState } from "react"
import { TGButton } from "../../Components/TGButton"
import { TGDropdown } from "../../Components/TGDropdown"
import { TGInput } from "../../Components/TGInput"
import { useApi } from "../../hooks/useApi";
import JsonFormatter from 'react-json-formatter';

const DropDownItems = ["GET", "POST", "PUT", "DELETE"];

const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' }
  }

export const TGDashboard = () =>{

    const [options, setOptions] = useState({
        method:"GET",
        url:"",
    })

    const {data,trigrFetch} = useApi();

    const handleInputChange = (e) =>{
        setOptions(prev=>{ return {...prev, url :e.target.value}});
    };

    const handleDropdownChange = (e) =>{
        setOptions(prev=>{ return {...prev, method :e.target.value}});

    };

    const handleClick = ()=>{
        trigrFetch(options.url,options.method);
    }

    return <>
    <section className="tg-dashboard" >
        <div className="form-group" >
           <TGDropdown onChange={handleDropdownChange} items={DropDownItems} />
           <TGInput onChange={handleInputChange} placeholder="Enter URL"/>
           <TGButton onClick={handleClick} label={"Send"} />
        </div>
        <div className="json-display" >
            <div>{data && <JsonFormatter json={data} tabWith={4} jsonStyle={jsonStyle} />}</div>
        </div>
    </section>
    </>
}
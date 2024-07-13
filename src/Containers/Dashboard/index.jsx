import { TGButton } from "../../Components/TGButton"
import { TGDropdown } from "../../Components/TGDropdown"
import { TGInput } from "../../Components/TGInput"

export const TGDashboard = () =>{

    const DropDownItems = ["GET", "POST", "PUT", "DELETE"]

    return <>
    <section className="tg-dashboard" >
        <div className="form-group" >
           <TGDropdown items={DropDownItems} />
           <TGInput placeholder="Enter URL"/>
           <TGButton label={"Send"} />
        </div>
        <div className="json-display" >
            <div>code</div>
        </div>
    </section>
    </>
}
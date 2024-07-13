export const TGButton = ({label,onClick=()=>{}})=>{
    return <>
    <button onClick={onClick} className="tg-button" >{label}</button>
    </>
}
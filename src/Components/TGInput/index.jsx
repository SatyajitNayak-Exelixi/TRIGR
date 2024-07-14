export const TGInput = ({type="text", placeholder, onChange=()=>{}}) =>{
    return <>
    <input onChange={onChange}  className="tg-input" placeholder={placeholder} type={type}/>
    </>
}
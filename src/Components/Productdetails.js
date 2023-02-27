import { useParams } from "react-router-dom"
import products from '../products.json'
export default function Productdetails(){
    const param = useParams()
    const p = products.find(pro=> pro.name ===param.name)
    console.log(p);
    return <>
    {p ? <p>{p.name}</p> : <p>There is no product</p>}
    
     
     
     </>
}
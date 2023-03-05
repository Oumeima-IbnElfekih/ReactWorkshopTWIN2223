import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getallProducts } from "../service/api"

export default function Productdetails(){
    const param = useParams()
    const [p,setP] =useState({})
    const getProduct=async ()=>{
        const res = await getallProducts(param.id)
        if( res.status ===200)
        setP(res.data)
    }
     useEffect(()=>{
        getProduct()
     },[]) 
    return <>
    {p.id !==undefined ? <p>{p.name}</p> : <p>There is no product</p>}
     </>
}
import { useEffect, useState } from "react";

const useAllGadgets = () => {
    const [allGadgets, setAllGadgets]= useState([])
    const fetchAllGadgets= async()=>{
        try {
            let res= await fetch('../../data/gadgets.json')
            let data = await res.json()
            setAllGadgets(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        fetchAllGadgets()
    },[])
    return [allGadgets];
};


export default useAllGadgets;
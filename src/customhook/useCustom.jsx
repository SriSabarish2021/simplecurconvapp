import React from 'react'
import  { useState,useEffect } from 'react'

const useCustom = (apiurl,fromname) => {
    const [frmcurr,setfrmcurr]=useState([])
    const [tocurr,settocurr]=useState([])
    const[data,setdata]=useState({})

    useEffect(() => {
          let getingdata=async()=>{
          let fetching=await fetch(apiurl)
          let jsondata=await fetching.json()
          setdata(jsondata.conversion_rates)
          console.log(jsondata.conversion_rates);
          setfrmcurr(Object.keys(jsondata.conversion_rates))
          settocurr(Object.keys(jsondata.conversion_rates))
        }
        
        getingdata()
        return () => {
          setfrmcurr([])
          settocurr([])
        }
      }, [fromname])
  return {frmcurr,tocurr,data}
}

export default useCustom

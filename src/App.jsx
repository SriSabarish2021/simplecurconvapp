import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Amtinp from './Amtinp'
import Curr from './Curr'
import Disamt from './Disamt'
import useCustom from './customhook/UseCustom'
function App() {

  const [fromname,setfromname]=useState('INR')
  const [toname,settoname]=useState('USD')
  const [curamt,setcuramt]=useState(0)
  const {frmcurr,data}=useCustom(`https://v6.exchangerate-api.com/v6/b4be06c6e42246cc91f78147/latest/${fromname}`,fromname)

console.log(fromname,toname);

  return (
    <div className='app'>
      <Header/>
      <Amtinp curamt={curamt} setcuramt={setcuramt}/>
      <Curr curr={frmcurr}  name={fromname} setname={setfromname}/>
      <Curr curr={frmcurr}   name={toname} setname={settoname}/>
      <Disamt fromname={fromname} toname={toname} data={data} curamt={curamt}/>
    </div>
  )
}

export default App

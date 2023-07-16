import React, { useState } from 'react'
import "./Logo.css"
import Billing from './Billing'


const Logo = () => {

  const [showcomponent,setShowcomponent] = useState(false)

  const changing = ()=>{
     setShowcomponent(true)

  }

  return (
    <>
   <div id='icon'>
   <h2 id='h2'>LOGO</h2>
    <div id='icon1'>
      <button id='btn1'><i id='i1' class="fa-solid fa-list"></i><span style={{paddingLeft:"20px"}}>Dashboard</span></button><br></br>
    <button id='btn2'><i id='i2' class="fa-sharp fa-solid fa-hospital-user"></i><span style={{paddingLeft:"20px"}}>Patient</span></button><br></br>
     <button id='btn3'><i id='i3' class="fa-solid fa-calendar-check"></i><span style={{paddingLeft:"20px"}}>Appointment</span></button><br></br>
     <button onClick={changing} id='btn4'><i id='i4' class="fa-solid fa-file-invoice"></i><span style={{paddingLeft:"20px"}}>Billing</span></button>
     <hr style={{width:"90%",marginLeft:"-5px",marginRight:"auto"}}/>
    </div>
    
    <div id='icon2'>
    <button id='btn4'><i id='i4' class="fa-sharp fa-solid fa-circle-info"></i><span style={{paddingLeft:"20px"}}>Support</span></button>
    <button id='btn4'>  <i id='i4' class="fa-solid fa-gear"></i><span style={{paddingLeft:"20px"}}>Support</span></button>
    </div>
   </div>
   {showcomponent ? <Billing/> : "Loading"}
    </>
  )


}

export default Logo

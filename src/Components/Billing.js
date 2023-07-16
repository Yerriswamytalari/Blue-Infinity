import React, { useState } from 'react'
import "./Billing.css"
import Bill from './Bill'
import Jbill from './Jbill'
import Tombill from './Tombill'
import Hankbill from './Hankbill'
import Khanbill from './Khanbill'


const Billing = () => {

    const [patent,setPatent] = useState(null)
  

    const handleclick = (component)=>{
    
       setPatent(component)
    }


  return (
   <>
       <div id='mhead'>
       <div id='head'>
    <i id='search' class="fa-solid fa-magnifying-glass"></i>
      <input id='input' type='search' placeholder='Search Patients'/>  
      <button id='btn11'>Make an Appointment</button>
      <button id='btn22'>Add Patient</button>
      <i id='note' class="fa-sharp fa-solid fa-bell"></i>
       </div>
       <div id='head2'>
       <div>
        <h2>Billing Overview</h2>
       </div>
       <div id='date'>
        <button id='left'><i class="fa-solid fa-chevron-left"></i></button>
        <h5 style={{marginTop:"12px",margin:"6px"}}>February 2021</h5>
        <button id='right'><i class="fa-solid fa-chevron-right"></i></button>
       </div>
       </div>
       

       <div>
        <div onClick={ () => handleclick(`Component A`)} id='details'>
           <div>
            <img src='http://verastic.com/site/wp-content/uploads/2014/02/Leonardo-DiCaprio.jpg' alt='dicaprio' style={{height:"100px",width:"100px",borderRadius:"10px"}}/>
           </div>
           <div id='detail'>
            <h4  id='name'>Leonardo Di-caprio</h4>
            <h4 id='age'>48, Male</h4>
            <p id='no'>Bill No <b> 012345678</b></p>
           </div>
        </div>

        <div onClick={()=>handleclick(`Component B`)} id='details'>
           <div>
            <img src='https://tse3.mm.bing.net/th?id=OIP.qH1M9vQGXmwPgGmrOSuZ9QHaKX&pid=Api&P=0&h=180' alt='dicaprio' style={{height:"100px",width:"100px",borderRadius:"10px"}}/>
           </div>
           <div id='detail'>
            <h4 id='name'>Johnny Depp</h4>
            <h4 id='age'>60, Male</h4>
            <p id='no'>Bill No <b> 012345678</b></p>
           </div>
        </div>

        <div onClick={()=>handleclick(`Component C`)} id='details'>
           <div>
            <img src='https://tse1.mm.bing.net/th?id=OIP.SVRX67yTc7BoVPcvw7vjwwHaKE&pid=Api&P=0&h=180' alt='dicaprio' style={{height:"100px",width:"100px",borderRadius:"10px"}}/>
           </div>
           <div id='detail'>
            <h4 id='name'>Tom Cruise</h4>
            <h4 id='age'>61, Male</h4>
            <p id='no'>Bill No <b> 012345678</b></p>
           </div>
        </div>

        <div onClick={()=>handleclick(`Component D`)} id='details'>
           <div>
            <img src='https://tse2.mm.bing.net/th?id=OIP.yXww8D-iWZGh_6OIGNJKQQHaJ4&pid=Api&P=0&h=180' alt='dicaprio' style={{height:"100px",width:"100px",borderRadius:"10px"}}/>
           </div>
           <div id='detail'>
            <h4 id='name'>Tom Hank</h4>
            <h4 id='age'>67, Male</h4>
            <p id='no'>Bill No <b> 012345678</b></p>
           </div>
        </div>

        <div onClick={()=>handleclick(`Component E`)} id='details'>
           <div>
            <img src='https://tse2.mm.bing.net/th?id=OIP.7eWnvKE2BCckTz3--OYKqQHaJV&pid=Api&P=0&h=180' alt='dicaprio' style={{height:"100px",width:"100px",borderRadius:"10px"}}/>
           </div>
           <div id='detail'>
            <h4 id='name'>Amir Khan</h4>
            <h4 id='age'>58, Male</h4>
            <p id='no'>Bill No <b> 012345678</b></p>
           </div>
        </div>
       </div>


       </div>
          {patent === `Component A` && <Bill/>}
          {patent === `Component B` && <Jbill/>}
          {patent === `Component C` && <Tombill/>}
          {patent === `Component D` && <Hankbill/>}
          {patent === `Component E` && <Khanbill/>}
   </>
  )
}

export default Billing

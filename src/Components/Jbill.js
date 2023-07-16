import React from 'react'
import "./Bill.css"

const Jbill = () => {
  return (
    <>
    <div id='border'>
    <div id='bill'>
     <h4>Billing Details</h4>
     <button id='bprint'>Print Bill</button>    
    </div>  

    <div id='mbasic'>
        <div id='basic1'>
         <p>Patient Name</p>
         <p>Age/Gender</p>
         <p>Bill No</p>
         <p>Date/Time</p>
         <p>Receipt No</p>
        </div>

        <div id='basic2'>
         <p><b>Johnny C - Depp</b></p>
         <p><b>60, Male</b></p>
         <p><b>017674</b></p>
         <p><b>5/7/23, 4:30AM</b></p>
         <p><b>14178988</b></p>
        </div>
    </div>

    <div id='num'>
     <p id='p1'><b>Sr.no</b></p>
     <p id='p2'><b>Service Name</b></p>
     <p id='p3'><b>Price</b></p>
     <p id='p4'><b>Quantity</b></p>
     <p id='p5'><b>Amount</b></p>
    </div>
    <hr></hr>

    <div id='num1'>
        <p id='p1'>1</p>
        <p id='p22'>Consultation</p>
        <p id='p33'>500</p>
        <p id='p44'>1</p>
        <p id='p55'>500</p>
    </div>

    <div id='num11'>
        <p id='p1'>2</p>
        <p id='p22'>Infection</p>
        <p id='p333'>100</p>
        <p id='p44'>2</p>
        <p id='p55'>2000</p>
    </div>


    <div id='mobile'>
        <div id='tax'>
           <p><b>Mobile Number</b></p>
           <p><b>Tax</b></p>
           <p><b>Discount</b></p>
        </div>

        <div id='tax1'>
            <p>6305089174</p>
            <p id='ip'>200</p>
            <p id='jp'>50</p>
        </div>
    </div>
    
    <div id='total'>
        <p id='tp1'><b>Total</b></p>
        <p id='tp2'><b>2,500</b></p>
    </div>
    </div>
   </>

  )
}

export default Jbill

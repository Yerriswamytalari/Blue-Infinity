import React from 'react'
import "./Bill.css"

const Bill = () => {
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
         <p><b>Leonardo Di-caprio</b></p>
         <p><b>32, Male</b></p>
         <p><b>012678</b></p>
         <p><b>5/7/23,2:30AM</b></p>
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
        <p id='p22'>X- Ray</p>
        <p id='p333'>1500</p>
        <p id='p44'>2</p>
        <p id='p55'>3000</p>
    </div>


    <div id='mobile'>
        <div id='tax'>
           <p><b>Mobile Number</b></p>
           <p><b>Tax</b></p>
           <p><b>Discount</b></p>
        </div>

        <div id='tax1'>
            <p>6947678987</p>
            <p id='ip'>200</p>
            <p id='jp'>50</p>
        </div>
    </div>
    
    <div id='total'>
        <p id='tp1'><b>Total</b></p>
        <p id='tp2'><b>3,650</b></p>
    </div>
    </div>
   </>
  )
}

export default Bill

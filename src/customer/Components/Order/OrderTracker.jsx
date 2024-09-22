import React from 'react'
import {Step, StepLabel, Stepper} from '@mui/material'
const OrderTracker = ({activeStep}) => {

  const steps = [
      "Placed",
      "Order Confirmed",
      "Shipped",
      "Out for Delivery",
      "Delivered"
  ]

  return (
    <div className=' shadow-2xl py-10 w-full'>
        <Stepper activeStep={activeStep} alternativeLabel >
          {steps.map((label)=>
          <Step>
            <StepLabel sx={{color:"#9255FD",fontSize:"44px"}} >
              {label}
            </StepLabel>
          </Step> 
          )}
        </Stepper>
    </div>
  )
}

export default OrderTracker
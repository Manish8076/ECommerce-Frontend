import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'

const OrderCard = () => {
  return (
    <div className=' shadow-lg p-5 mb-4 '>
        <Grid container spacing={2} sx={{justifyContent:"space-between", justifyItems:"center"}} >
            <Grid item xs={6} >
                <div className=' flex cursor-pointer object-cover object-top ' >
                    <img className=' w-[5rem] h-[5rem] ' src="data:image/jpeg;base64,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" alt="" />
                    <div className=' ml-5 space-y-2 '>
                      <p>Men Slim Rise Black Jeans</p>
                      <p className=' opacity-50 text-xs font-semibold'>Size : M </p>
                      <p className=' opacity-50 text-xs font-semibold'>Color : Black </p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2} >
              <p>₹1099</p>
            </Grid>
            <Grid item xs={4} >
              { true && <div>
                <p>
                <AdjustIcon sx={{height:"15px", width:"15px"}} className=' text-green-600 text-xl mr-2 ' />
                <span>
                    Delivered On March 05
                </span>
              </p>
              <p className=' text-xs'>
                Your item has been delivered
              </p>
              </div> }
              {false && <div>
                <p>
                <AdjustIcon/>
                <span>
                  Expected Delivery On Nov 04
                </span>
              </p>
              </div>  }
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard
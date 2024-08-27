import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={{ xs:7.4, sm:8 }} >
        <Grid item xs={1}>

            <Box>
                <Avatar className='text-white' sx={{width:56,height:56, bgcolor:"#9155fd"}}  >R</Avatar>
            </Box>

        </Grid>
        <Grid item xs={9}>
            <div className=' space-y-2'>
                <div>
                    <p className=' font-semibold text-lg'>Raam</p>
                    <p className=' opacity-70'>August 22, 2024</p>
                </div>
            </div>
            <Rating  value={3.5} name='half-rating' readOnly precision={0.5} />
            <p className=''>nice product i love the fabric of the shirt pure cotton and very comfortable </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard

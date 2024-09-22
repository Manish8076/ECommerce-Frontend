import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import {Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder"


const Orderdetails = () => {
  return (
    <div className=" px-5 lg:px-20">
      <div className=" ">
        <h1 className=" text-xl py-10  font-bold">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className=" py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1,1,1,1,1].map((item)=> <Grid item container className=" shadow-xl rounded-md p-5" sx={{alignItems:"center",justifyContent:'space-between'}} >
          <Grid xs={12} sm={8} item >
            <div className=" flex items-center space-x-4" >
              <img className=" w-[6rem] h-[6rem] object-cover object-top rounded-md " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtRiA7cIIwp4AB5M44PMBKO8hWQJGClch0A&s" alt="" />
              <div>
                <p>Mens Slim Mid Rise Black Jeans</p>
                <p className=" space-x-5"> <span>Color: Black</span> <span>Size: M</span> </p>
                <p>Seller: Linaria</p>
                <p>₹1099</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Box sx={{color:deepPurple[500]}} >
              <StarBorderIcon sx={{fontSize:"2rem"}} className=" px-2" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid> )}
      </Grid>
    </div>
  );
};

export default Orderdetails;

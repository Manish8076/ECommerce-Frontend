import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className=" p-5 shadow-lg border rounded-md">
      <div className=" flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img className=" w-full h-full"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>

        <div className=" ml-5 space-y-1 ">
          <p className=" font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className=" opacity-70">Size: L, White</p>
          <p className=" opacity-70"> Seller: Crishtaliyo 2fashion </p>
          <div className=" flex space-x-5 items-center text-gray-900 mt-6">
            <p className=" font-semibold">₹199</p>
            <p className=" opacity-50 line-through">₹211</p>
            <p className=" text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center lg:space-x-10 pt-4">
        <div className=" flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className=" py-1 px-7 border rounded-sm ">3</span>
          <IconButton sx={{color:"RGB(145 85 253)"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:"RGB(145 85 253)"}}  >Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

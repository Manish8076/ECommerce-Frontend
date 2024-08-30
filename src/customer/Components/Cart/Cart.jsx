import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";

const Cart = () => {
  return (
    <div className="   ">
      <div className=" lg:grid grid-cols-3 lg:px-16 relative  ">
        <div className=" col-span-2">
          {[1, 1, 1, 1].map((item) => ( 
            <CartItem />
          ))}
        </div>
        <div className=" col-span-1 px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className=" border p-5 shadow-lg ">
            <p className=" uppercase font-bold opacity-60 pb-4">
              price details
            </p>
            <hr />
            <div className=" space-y-3 font-semibold mb-10">
              <div className=" flex justify-between pt-3 text-black ">
                <span>Price</span>
                <span className=" ">₹4934</span>
              </div>
              <div className=" flex justify-between pt-3 text-black ">
                <span>Disount</span>
                <span className=" text-red-600">-₹3419</span>
              </div>
              <div className=" flex justify-between pt-3 text-black ">
                <span>Delivery Charges</span>
                <span className=" text-red-600">Free</span>
              </div>
              <hr />
              <div className=" flex justify-between pt-3 text-black ">
                <span className=" text-lg font-bold">Total</span>
                <span className=" text-green-600 text-lg font-bold ">
                  {" "}
                  ₹1278
                </span>
              </div>
            </div>
            <Button
              variant="contained"
              className=" w-full mt-5"
              sx={{
                px: "2rem",
                py: "1rem",
                bgcolor: "#9155fd",
                ":hover": { bgcolor: "#9155fd" },
              }}
            >
              {" "}
              Proceed To Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

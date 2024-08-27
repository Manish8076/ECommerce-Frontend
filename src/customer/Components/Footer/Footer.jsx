import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Footer = () => {
  return (
    <div>
      <Grid
        className=" bg-black text-white text-center"
        container
        sx={{ bgcolor: "black", color: "white", py: 5 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" >
              About
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Blog
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Press
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Jobs
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6" >
            Company
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" >
              About
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Blog
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Press
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Jobs
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6" >
            Company
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" >
              About
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Blog
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Press
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Jobs
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6" >
            Company
          </Typography>
          <div>
            <Button className=" pb-5" variant="h6" >
              About
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Blog
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Press
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              {" "}
              Jobs
            </Button>
          </div>
          <div>
            <Button className=" pb-5" variant="h6" >
              Partners
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

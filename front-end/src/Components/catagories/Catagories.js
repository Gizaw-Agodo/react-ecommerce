import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import menImage from "../../assets/men.jpg";
import womanImage from "../../assets/women.jpg";
import kidImage from "../../assets/kid.jpg";
import { Divider } from "@material-ui/core";

import CatagoriesItem from "./CatagoryItem";

const data = [
  {
    cat: "men",
    img: "https://i.pinimg.com/originals/f4/36/1f/f4361ff75249dee101f817eff036edf7.jpg",
  },
  {
    cat: "women",
    img: "https://earn-smarter.com/wp-content/uploads/2021/02/0db9d2d0ed8a0c0a1a70fc02990e648a-683x1024.jpg",
  },
  {
    cat: "child",
    img: "https://i.pinimg.com/originals/c6/6f/1d/c66f1ddd73c75aea192ddc61aeee64c8.jpg",
  },
];

function Catagories() {
  return (
    <Box name = "catagories">
      <Typography mt={10} variant="h5" align="center">
        Catagories
      </Typography>
      <Divider />
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={9}
        justifyContent="space-around"
        mt={1}
        mb={5}
      >
        {data.map((item, index) => (
          <CatagoriesItem key={index} item={item}/>
        ))}
      </Stack>
    </Box>
  );
}

export default Catagories;

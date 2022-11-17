import { Box, Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../api";
import Product from "./product/Product";
import useStyles from "./style";


function Products({cat,filters,sort}) {
  const classes = useStyles();
  const [products,setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
   getProducts(cat).then((productsList)=>{
     setProducts(productsList)
   })
  },[cat])

 useEffect(() => {
   cat &&
     setFilteredProducts(
       products.filter((item) =>
         Object.entries(filters).every(([key, value]) =>
           item[key].includes(value)
         )
       )
     );
 }, [products, cat, filters]);

 useEffect(() => {
   if (sort === "newest") {
     setFilteredProducts((prev) =>
       [...prev].sort((a, b) => a.createdAt - b.createdAt)
     );
   } else if (sort === "asc") {
     setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
   } else {
     setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
   }
 }, [sort]);
console.log(products);
  
  return (
    <div style={{ marginTop: "55px" }} name="products">
      <Typography mt={20} align="center" variant="h5">
        Our Products
      </Typography>
      <Divider />
      <Box className={classes.container}>
        {
        /* {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            )) */}
          {
           products.map((item) => <Product item={item} key={item.id} />)
              
          }
      </Box>
    </div>
  );
}

export default Products;

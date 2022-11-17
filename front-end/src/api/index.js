import axios from "axios"
import { logInFailure, logInStart, logInSuccess } from "../redux/userRedux"

const URL = axios.create({baseURL:"http://localhost:3001/"})

// log in request
export const login = async(dispatch,user)=>{
  dispatch(logInStart())
  try {
    const response = await URL.post("auth/logIn",user)
    dispatch(logInSuccess(response.data))
  } catch (error) {
    dispatch(logInFailure())
  }
}

export const getProducts = async(cat)=>{     
     try {
        const res = await axios.get(
          cat
            ? `http://localhost:3001/products?category=${cat}`
            : "http://localhost:3001/products"
        );
        // console.log(res);
        return res.data
        
      } catch (err) {}
    
}

export const getProduct = async (productId) => {
  try {
        const res = await axios.get(
          `http://localhost:3001/products/${productId}` 
        );
        return res.data;
      } catch (err) {}
};


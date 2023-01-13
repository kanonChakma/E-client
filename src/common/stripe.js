import axios from "axios";

export const CreatePaymentIntents=async(authtoken,coupon)=>{
    return await axios.post(
        `${process.env.REACT_APP_API}/create-payment-intent`,
         {coupon},
        {
          headers:{
              authtoken
            }
         }
      )
  }
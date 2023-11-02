import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Redux/slices/todoSlice";
// const storeToLocalStoreage = ({ getState }) => (next) => (action) => {
//     const result = next(action);
  
//     try {
//       localStorage.setItem("reduxState", JSON.stringify(getState()));
//     } catch (error) {
//       console.error("Error saving Redux state to local storage:", error);
//     }
  
//     return result;
//   };
  
const store  = configureStore ({
    reducer: {
        todo:todoSlice

    },

    // middleware:( getDefaultMiddleware )=> getDefaultMiddleware().concat(storeToLocalStoreage)

})

export default  store 
import { configureStore  } from "@reduxjs/toolkit";
import authentication from "./reducer/AuthSlice";
import  loadingReducer  from "./reducer/LoadingSlice";

const store =configureStore({

    reducer:{
        auth:authentication,

        loading:loadingReducer
    },
})

export default store
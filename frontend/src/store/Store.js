import { configureStore  } from "@reduxjs/toolkit";
import authentication from "./reducer/Reducers";

const store =configureStore({

    reducer:{
        auth:authentication,
    },
})

export default store
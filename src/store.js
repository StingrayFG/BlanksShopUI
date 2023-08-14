import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "services/User/UserSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
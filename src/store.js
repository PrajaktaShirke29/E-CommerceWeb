import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./pages/Auth/loginSlice";

export const store = configureStore({
  reducer: {
    auth: loginSlice
  },
});

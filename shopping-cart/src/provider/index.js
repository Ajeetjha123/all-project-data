"use client";

import store from "@/store";
import { Provider } from "react-redux";

const Reduxprovider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Reduxprovider;

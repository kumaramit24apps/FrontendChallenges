import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Profile } from "./components/Profile";

const AppLayout = () => {
  return (
    <>
      <Profile />
    </>
  );
};

const app = document.getElementById("app");
const appRoot = ReactDOM.createRoot(app);

appRoot.render(<AppLayout />);

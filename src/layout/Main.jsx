import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../pages/Shared/Navabar/Navbar";
import "./main.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="messanger-contanier">
        <div className="mannanger-img">
          <MessengerCustomerChat
            pageId="<PAGE_ID>"
            appId="1091845821775288"
            htmlRef="<REF_STRING>"
          />
          ,{/* <img className="massanger-log" src={massanger} /> */}
        </div>
      </div>
      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;

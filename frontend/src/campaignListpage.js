import React from "react";

import "./campaignListpage.css";
import Topbar from "./components/Topbar";
import LeftBar from "./components/LeftBar";
import Titlebar from "./components/Titlebar";
import Filterbar from "./components/Filterbar";
import Mainlist from "./components/Mainlist";
// import Form from "./components/Form";

export default function campaignListpage() {
  return (
    <>
      <div className="campaignListpage">
        <div className="campaignListpage_Admindashboard">
          <Topbar />
        </div>

        <div className="campaignListpage_LeftBar">
          <LeftBar />
        </div>
        <div className="campaignListpage_container">
          {/* <div className="Productsrow">
    <div className="Productlogo" ><BsFillBagCheckFill/></div>
    <div className="title">Products</div>
    <div className="Active">Products</div>
    <div className="Draft">Products</div>
    <div className="Assembly">Products</div>
    <div className="addlogo"></div>
    
    <button>Add product</button>
  </div> */}
          <div className="campaignListpage_Filterbar">
            <Titlebar />
          </div>
          <div className="campaignListpage_Filterbar">
            <Filterbar />
          </div>
          <div className="campaignListpage_Mainlist">
            <Mainlist />
          </div>
        </div>
      </div>
    </>
  );
}

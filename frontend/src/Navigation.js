
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./Login";
// import Signup from "./Signup";
// import Admindashboard from "./Admindashboard.js"
// import Salesdashboard from "./Salesdashboard.js"
// import Array1 from "./Array1";
// import Model from "./Model.js";
// import Verticalbar from "./Verticalbar.js"
// import Horizontalbar from "./Horizontalbar.js"
import Doughnut from "./Doughnut.js"
// import Progressbar from "./Progressbar.js"
// import Profile1 from "./Profile1.js"
// import Profile from "./Profile.js"
import CampaignListpage from "./campaignListpage"
import Campaigneditpage from "./Campaigneditpage";



export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>

          <Route path="/campaignListpage" element={<CampaignListpage/>}></Route>
          <Route path="/Doughnut" element={<Doughnut/>}></Route>
          <Route path="/Campaigneditpage" element={<Campaigneditpage/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}


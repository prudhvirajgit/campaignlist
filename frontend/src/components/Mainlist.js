// import "./Mainlist.css";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import { dblClick } from "@testing-library/user-event/dist/click";
// import React, { useState } from "react";
// export default function Mainlist() {
//   const [array, setArray] = useState([
//     { name: "samplename1", isclicked: false },
//     { name: "samplename2", isclicked: false },
//     { name: "samplename3", isclicked: false },
//     { name: "samplename4", isclicked: false },
//   ]);
//   return (
//     <>
//       <div className="Mainlist_Outer">
//         <div className="Mainlist_box"></div>
//         <div className="Mainlist_header">
//           <div className="Mainlist_row1">
//             <ul>
//               <li>FirstName</li>
//               <li>LastName</li>
//               <li>Status</li>
//               <li>Created on </li>
//               <li>Email</li>
//               <li>Responses</li>
//               <li>Owner</li>
//             </ul>
//           </div>
//         </div>
//         <div className="Mainlist_Innerbox">
//           <div className="Mainlist_list">

//             {array.map((itm, indx) => {
//               return <ListRow itm={itm} array={array} setArray={setArray}/>;
//             })}

//             <div>
//               <button className="Mainlist_Button">load more leads</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// function ListRow({itm, array, setArray}) {
//   const handleClick=(e, itm)=>{
//     let temp=[...array];
//     for (const iterator of temp) {
//       if(itm.name==iterator.name){
//         iterator.isclicked=!iterator.isclicked;
//       }
//     }
//     setArray(temp)
//   }
//   return (
//     <>
//       <div className={itm.isclicked?"Mainlist_list_row_topSelected":"Mainlist_list_row_top"} >
//         <input className="Cb" type="checkbox"  onClick={e=>handleClick(e, itm)}>

//         </input>
//         <label for="checkbox"></label>
//         <div className="Mainlist_list_row">
//           <label className="">{itm.name}</label>
//           <label>Smith</label>
//           <label>Confirmed</label>
//           <label>2022-02-01</label>
//           <label>larrywilson@nomail.com</label>
//           <label>10</label>
//           <label>Larry wilson</label>
//           <div className="Mainlist_icon">
//             <AiOutlineArrowRight />
//           </div>
//         </div>
//       </div>
//
//     </>
//   );
// }

import "./Mainlist.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { dblClick } from "@testing-library/user-event/dist/click";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
export default function Mainlist() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/dev/GetSingleCampaign";
    const data = {};
    const Header = {};
    axios.post(url, data, { Headers: Header })
      .then((res) => {
        // setArray1(Json.stringify(res.data));
        console.log("Response==>" + JSON.stringify(res.data));
        setArray((res.data))
      })
      .catch((err) => {
        console.log("Error==>" + err);
      });
  }, []);
  return (
    <>
      <div className="Mainlist_Outer">
        <div className="Mainlist_box"></div>
        <div className="Mainlist_header">
          <div className="Mainlist_row1">
            <ul>
              <li>Campaign</li>
              <li>Parent Campaign</li>
              <li>Status</li>
              <li>Start Date </li>
              <li>End Date</li>
              <li>Responses</li>
              <li>Owner</li>
            </ul>
          </div>
        </div>
        <div className="Mainlist_Innerbox">
          <div className="Mainlist_list">
            {array.map((itm, indx) => {
              return <ListRow itm={itm} array={array} setArray={setArray} />;
            })}
            <div>
              <button className="Mainlist_Button">load more leads</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function ListRow({ itm, array, setArray }) {
  const handleClick = (e, itm) => {
    let temp = [...array];
    for (const iterator of temp) {
      if (itm.CampaignName === iterator.CampaignName) {
        iterator.isclicked = !iterator.isclicked;
      }
    }
    setArray(temp)
  }
  const d = new Date()
  return (
    <>
      <div className={itm.isclicked ? "Mainlist_list_row_topSelected" : "Mainlist_list_row_top"} >
        <input className="Cb" type="checkbox" onClick={e => handleClick(e, itm)} />
        <label for="checkbox"></label>
        <div className="Mainlist_list_row">
          <label>{itm.CampaignName}</label>
          <label>{itm.ParentCampaginName}</label>
          <label>{itm.Status}</label>
          <label>{itm.Startdate}</label>
          <label>{itm.Enddate}</label>
          <label>{itm.Responses}</label>
          <label>{itm.Owner}</label>
          <div className="Mainlist_icon">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
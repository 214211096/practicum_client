import React from "react";
// import React, { useContext, useState, useRef } from "react";
import { useState,useContext } from "react";

import { userContext } from "./UserContext";

import { useNavigate } from "react-router-dom";

export default function Success(){
const userCtx = useContext(userContext);
const navigate = useNavigate();

    return(
        <div style={{ padding: "10%" }}>  
             {userCtx.firstName }{userCtx.lastName}
             <h2>הפרטים נקלטו בהצלחה!</h2>

             <div >
             <button class="btn btn-outline-primary" onClick={()=>{navigate('/excel')}}>Download page Exel with your details</button>
             </div>
        </div>
    )
}
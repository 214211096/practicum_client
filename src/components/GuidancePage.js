import React from "react";
// import React, { useContext, useState, useRef } from "react";
import { useState,useContext } from "react";

import { userContext } from "./UserContext";

import { useNavigate } from "react-router-dom";

export default function GuidancePage(){
const userCtx = useContext(userContext);

    return(
        <div style={{ textAlign: "center" }}>
           
            <h1>שלום {userCtx.firstName} {userCtx.lastName}</h1> 
            <h2>הנחיות למילוי הטופס:</h2>
            <h4>חובה למלא את כל השדות</h4>
            <h4>יש למלא פרטים נכונים ומדויקים</h4>
        </div>
    )
}
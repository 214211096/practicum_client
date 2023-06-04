import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {userContext} from '../UserContext';
import { Button } from "@mui/material";
import '../style/StyleSheet.css'

export default function GuidencePage(){

    const nameCtx=useContext(userContext);
    const navigate=useNavigate()

    return(
        <div className="direct row div-location padd" >
            <div className="m-3">
                <h4  style={{color:" rgb(22, 248, 233)"}}>שלום {nameCtx.firstName}  {nameCtx.lastName}</h4>
            להלן הנחיות למילוי הטופס<br/>
           
            </div>
            <p className="m-1">
             בטופס תתבקש/י למלא את פרטיך ופרטי ילדיך<br/>
            יש למלא פרטים נכונים ומדויקים<br/>
    כדי שנוכל לספק בעבורך את השירות המתאים<br/>
                  
            </p>
            <div className="m-3">
            <br/>
             שים/י לב:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg><br/>
            <ul className="list-inline-item">
                <li className="m-2">הכנס/י את פרטיך האישיים על פי ההוראות הכתובות בטופס.</li>
                <li className="m-2">כדי להוסיף ילד לחץ/י על הכפתור +.</li>
                <li className="m-2">הפרטים יאובטחו וישמרו רק בהסכמתך.</li>
                <li className="m-2" >לאחר השמירה לא תוכל/י לשנות את הבחירה.</li>
            </ul>
            <br/>
            בהצלחה!!
            </div>
            <Button style={{color:" rgb(22, 248, 233)"}} variant="text" size="large" onClick={()=>navigate('/')}>חזרה לטופס</Button>
        </div>
    )
}
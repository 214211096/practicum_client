import React, { useState ,useContext} from "react";
import axios from 'axios';


import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
 export default function ChildForm(props) {
 var index=props.index;
const childCtx = useContext(userContext)
  return (
    <div className="App">
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">FirsName</label>
          <input class="form-control"
            type="text"
            name="firstNameC" required placeholder="firstName"
            onChange={(e) => 
              childCtx.setChildArr[index].name=e.target.value} 
              defaultValue={childCtx.firstNameC}
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">id</label>
          <input class="form-control"
            type="text" name="childId" 
            required="required" placeholder="id"
            onChange={(e) => 
              childCtx.setChildArr[index].id=(e.target.value)} 
              defaultValue={childCtx.childId}
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">dateOfBirth</label>
          <input class="form-control"
            type="date"
            name="dateOfBirthC"  required placeholder="dateOfBirth"
            onChange={(e) => childCtx.setChildArr[index].birth = e.target.value}
              defaultValue={childCtx.dateOfBirthC}
          />
        </div>
        <div className="form-control">
        </div>
    </div>
  );
}
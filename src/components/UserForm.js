import React, { useState ,useContext,useEffect} from "react";
import axios from 'axios';
// import Page from "./Login";
import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Page from "./GuidancePage";
import ChildForm from "./ChildForm";

 export default function UserForm(props) {
  const[isShow,setIsShow]=useState(false)
  const addDetailsChild = (len) => {
    const childrenArr = [];
    for (let index = 1; index <= len; index++) {
      childrenArr.push(
        <div>
          <p> enter details child {index}</p>
          <p></p>
          <ChildForm key={index-1}></ChildForm>
          <p></p>
        </div>)
    }
   userCtx.setChild([childrenArr])
  }

const userCtx = useContext(userContext)
const navigate = useNavigate();


const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

  const addUser = () => {
let id=0;
    let eGender = 0;
        let eHmo = 0;
        if (userCtx.gender === "female") {
            eGender = 1;
        }
        if (userCtx.medicare === "klalit") {
         eHmo=1
        }
        else if (userCtx.medicare === "leumi") {
          eHmo=2

        }
        else if (userCtx.medicare === "meuchedet") {
          eHmo=3

        }
        {console.log(userCtx)}
        {console.log(userCtx.childArr)}
    axios
      .post("https://localhost:44365/api/User", {
      
        firstName: userCtx.firstName,
        tz: userCtx.userId,
        lastName: userCtx.lastName,
        dateOfBirth: userCtx.dateOfBirth,
        hmo: eHmo,
        gender: eGender,
       
      })
      .then(async result => {
        await axios.get("https://localhost:44365/api/User")
        .then(
      async result => {
        id = result.data[result.data.length - 1].userId;
        console.log(result)
      })
    })
    .then(async result => {
      userCtx.childArr.forEach(element => {
        
          axios.post('https://localhost:44365/api/Child', { tz: element.id, firstName: element.name, dateOfBirth:element.date , parenId:5 })
      });
       })
       navigate('/succes')
   };
  return (
    <div class="needs-validation">
      {userCtx &&<form onSubmit={handleSubmit(console.log('uyhu'))}>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">FirsName</label>
          <input class="form-control"
            type="text"
            name="firstName" required placeholder="firstName"
            onChange={(e)=>
            userCtx.setFirstName(e.target.value)}
           defaultValue={userCtx.firstName}
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">lastName</label>
          <input class="form-control"
            type="text" name="lastName" placeholder="lastName"
             onChange={(e)=>
              userCtx.setLastName(e.target.value)}
            defaultValue={userCtx.lastName}
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">id</label>
          <input class="form-control"
            type="text" name="userId" minLength="9" maxLength="9" required placeholder="id"
            onChange={(e)=>
              userCtx.setUserId(e.target.value)}
            
            defaultValue={userCtx.userId}
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">dateOfBirth</label>
          <input class="form-control"
            type="date"
            name="dateOfBirth"  required
            onChange={(e)=>
              userCtx.setDateOfBirth(e.target.value)}
            defaultValue={userCtx.dateOfBirth}
          />
        </div>
        <div class="col-md-4 mb-3">
        <label for="validationTooltip01">
     בחר קופת חולים
      <select  class="form-control" id="exampleFormControlSelect1"
        onInput={(e)=>
          userCtx.setMedicare(e.target.value )}
            defaultValue={userCtx.medicare}
            >
        <option value="macabi">macabi</option>
        <option value="meuchedet">meuchedet</option>
        <option value="leumi">leumi</option>
        <option value="klalit">klalit</option>
      </select>
    </label>
        </div>
        <div class="col-md-4 mb-3">
        <label for="validationTooltip01">
     בחר  מין
      <select  class="form-control"
        onInput={(e)=>
          userCtx.setGender(e.target.value )}
            
            defaultValue={userCtx.gender}
            >  
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </label>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">numOfChildren</label>
          <input class="form-control"
            type="number"
            name="numChildren"  required
            minLength="0"
            onInput={(e)=>{addDetailsChild(e.target.value)
              userCtx.setNumChildren(e.target.value )}}
                defaultValue={userCtx.numChildren}
          /> {userCtx.child}
        </div>
        <div >
        <button class="btn btn-outline-primary" variant="primary" type="submit" onClick={addUser} >
          send form
        </button>
        <button class="btn btn-outline-primary" onClick={() => {navigate('/page') }}>לדף ההנחיות</button>
        {/* <button  class="btn btn-outline-primary" onClick={() => {navigate('/succes') }}>לשליחה</button> */}
        </div>
      </form>}
    </div>
  );
}

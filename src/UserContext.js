import React, { createContext, useState } from "react";

export const userContext=createContext();

export default function UserContext(props){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [idNumber,setIdNumber]=useState('')
    const [birthDate,setBirthDate]=useState('')
    const [gender,setGender]=useState('')
    const [HMO,setHMO]=useState('')
    const [children,setChildren]=useState([])

    return(
        <div className="div-location bg-body-tertiary">
            <userContext.Provider value={{firstName,setFirstName,lastName,setLastName,idNumber,setIdNumber,birthDate,setBirthDate,gender,setGender,HMO,setHMO,children,setChildren}}>
                {props.children}
            </userContext.Provider>
        </div>
    )
}
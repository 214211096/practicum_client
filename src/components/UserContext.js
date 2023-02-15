import React, {useEffect, createContext,useState,useContext } from 'react';
// import Page from './Login';

export const  userContext=createContext();

export default function  UserContext (props) {
    const[firstName,setFirstName]=useState('');
    const[firstNameC,setFirstNameC]=useState('trvy');
    const[lastName,setLastName]=useState('');
    const[dateOfBirth,setDateOfBirth]=useState(Date);
    const[dateOfBirthC,setDateOfBirthC]=useState(Date);
    const[gender,setGender]=useState('');
    const[userId,setUserId]=useState('');
    const[childId,setChildId]=useState('');
    const[medicare,setMedicare]=useState('');
    const[numChildren,setNumChildren]=useState(0);
    const[detalisChild,setDetalisChild]=useState([]);
    const [child, setChild] = useState();
    const[childArr,setChildArr] =useState([{name:'',birth:new Date(),id:''}])
    return(
       <userContext.Provider value={{firstName,setFirstName,lastName,setLastName,dateOfBirth,setDateOfBirth,gender,setGender
       ,userId,setUserId,medicare,setMedicare,numChildren,setNumChildren,detalisChild,setDetalisChild
       ,child,setChild,firstNameC,setFirstNameC,dateOfBirthC,setDateOfBirthC,childId,setChildId,childArr,setChildArr
       }} >
           {props.children}
       </userContext.Provider>
)
}
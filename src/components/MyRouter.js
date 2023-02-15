import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import GuidancePage from './GuidancePage'
import UserForm from './UserForm';
import UserContext from './UserContext';
import Success from './Succes';
import DwonloadExcel from './DownloadExcel';
export default function  MyRouter () {
    return (<div>



<Routes>
 <Route path='/' element={<UserContext><UserForm /></UserContext>} /> 

 <Route path='/page' element={<UserContext><GuidancePage/></UserContext>} />
 <Route path='/UserForm' element={<UserContext><UserForm /></UserContext>} /> 
 <Route path='/succes' element={<UserContext><Success /></UserContext>} /> 
 <Route path='/excel' element={<UserContext><DwonloadExcel /></UserContext>} /> 
</Routes>
</div>
    )
    
}
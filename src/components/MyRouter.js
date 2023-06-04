import React from "react";
import {Routes,Route} from 'react-router-dom'
import AddChild from "./AddChild";
import Form from "./Form";
import GuidencePage from "./GuidencePage";
import Succsses from "./Success";

export default function MyRouter(){
    return(
        <div >
            <Routes>
                <Route path="/guidence" element={<GuidencePage/>}/>
                <Route path="/" element={<Form />}/>
                <Route path="/addChild" element={<AddChild />}/>
                <Route path="/success/:id" element={<Succsses />}/>
            </Routes>
        </div>
    )
}
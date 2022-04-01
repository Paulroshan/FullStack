 import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export const Rectue=()=>{

    const[person, setPerson]=useState({
        "resName":"",
        "resPay":0,
        "resArea":"",
        "resSkills":new Array()

    })
    const traks=(s)=>{
        const{value}=s.target
        person.resSkills.push(value)

    }

    const track=(paul)=>{
        const{name,value}=paul.target
        setPerson(
            (dhand)=>{
            return{
                ...dhand,
                [name]:value
                
            }
        }

        )

    }

    const roshan=()=>{
        alert(JSON.stringify(person))
    }

    return(
        <>
        <div className="container-fluid mt-5">
        <h1 className="text-center text-info display-4 text uppercase font monospace">New Recuitment </h1>
        <div className="row justify-content-center">
        <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-3">
        <div className="form group">
        <label> Resource Name</label>
        <input type="text"
         name="resName"
         onChange={track}
         value={person.resName}
         placeholder="name of the resource person"
         className="from-control" 
        />
    </div>
    <div className="row justify-content-between">
        <div className="col-md-6 col-sm-12">
            <label>Resource Commercial</label>
            <input
                type="number"
                name="resPay"
                onChange={track}
                value={person.resPay}
                placeholder="commercial per day of the resource person"
                className="form-control"
                />
                </div>
    <div className="col-md-6 col-sm-12">
            <label>Resource Location</label>
            <select name="resArea" className="form-select" onChange={track} value={person.resArea}>
                <option> Select Location</option>
                <option>Chennai</option>
                <option>Salem</option>
                <option>coimbatore</option>
                <option>Bangalore</option>
                </select>
                </div>
          </div>
          <div className="forn-check-line">
              <lable className="me-sm-5 me-lg-5">Resource skill</lable>
              <input 
                    type ="checkbox"
                    name="java"
                    onChange={traks}
                    value="Java"
                    className="form-check-input"/>Java
              <input 
                    type="checkbox"
                    name="python"
                    onChange={traks}
                    value="Python"
                    classname="form-check-input ms-sm-5 ms-md-5 ms-lg-5"/>Python
               <input
                     type="checkbox"
                     onChange={traks}
                     name="javascript"
                     value="Javascript"
                     classname="form-check-input ms-sm-5 ms-md-5 ms-lg-5"/>Javascript
                     </div>
                     <div className="mt-4 row justify-content-around">
                         <button onClick={roshan} className="col-2 btn btn-outline-success">Hire</button>
                         <button className="col-2 btn btn-outline-success">cancel</button>
                   </div>
                         </div>
                     </div>
                     </div>
                     </>

         
    )
}
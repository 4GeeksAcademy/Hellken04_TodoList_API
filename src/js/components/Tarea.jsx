import React, {useState} from "react";

const Tarea = ({tarea, deleteToDo, index}) => {
    const [visible,setVisible]= useState(false);
    console.log(tarea);
    return (
        
            <div className="row alert alert-light my-0" style={{width:"400px"}} role="alert" onMouseOver={()=>{setVisible(true)}} onMouseOut={()=>{setVisible(false)}}>
                <div className="col-10">
                    <p>{tarea}</p>
                </div>
                <div className="col-2">
                  <button type="button" className={`btn-close ${visible ? "visible" : "invisible"}`} onClick={() => { deleteToDo(index) }}></button>
                </div>
                
            </div>
    );
};

export default Tarea;
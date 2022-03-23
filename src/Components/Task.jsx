import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { newContexte } from "../App";

function Task (){
    const contexte = useContext(newContexte)
    console.log(contexte.setState);

    const {register, handleSubmit, formState} = useForm();
    const { errors } = formState;
    const onSubmit = data =>{
        //  console.log(data);
        //  console.log(contexte);
         const copyTache = [...contexte.state];
        //  console.log('copyTache: ',copyTache);
         const lastId = copyTache[copyTache.length -1].id;
        //  console.log(lastId);

         const task = {
             id: lastId+1,
             title: data.task,
             priority: data.priority,
         }
         copyTache.push(task);
         contexte.setState(copyTache);
         }
    
    return(
        <div>
            <h1>Tache</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="task" {...register ('task',{required: true,})} ria-describedby="emailHelp"/>
                </div>
                {/* <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div> */}
                <div>
                    <select className="form-select" {...register ('priority',{required: true,})} aria-label="Default select example">
                        <option >Niveau de priorité:</option>
                        <option value="important">Important</option>
                        <option value="urgent">Urgent</option>
                        {/* <option value="3">Three</option> */}
                    </select>
                </div>
              
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Task
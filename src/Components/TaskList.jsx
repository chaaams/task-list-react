import React, { useContext } from "react";
import { newContexte } from "../App";

function TaskList (){
    const contexte = useContext(newContexte)
    console.log(contexte);
    return(
        <div>
            {contexte.state.map(e =>{
                return <div key={e.id}>
                    <h2>{e.title}</h2>
                    <p>{e.priority }</p>
                </div>
            })}
            {/* <h1>Liste de tache</h1>
            <p>{contexte.state[0].title}</p>
            <p>{contexte.state[1].priority }</p>
            <p>{contexte.state[0].id}</p> */}

        </div>
    )
}

export default TaskList
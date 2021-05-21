import React,{useState,useContext} from 'react';
export const Form=()=>{
    const[value,setValue] =useState('')

    const submitHandler = event =>{
        event.preventDefault()
    }
    return(
        <form onSubmit={submitHandler}>
            <div clasName="form-group">
                <input type="text"
                className="form-control"
                placeholder="Введите название заметки"
                value={value}
                onChange={e =>setValue(e.target.value)}/>
            </div>
        </form>
    )
}
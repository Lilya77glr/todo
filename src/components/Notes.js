import React from 'react';

export const Notes=({notes})=>{
    return(
        <ul className="list-group">
{notes.map(note=>(
    <li className="list-group-item note" 
    key={note.id}
    ><strong>(note.title)</strong>
    <small>{new Date().toLocaleDateString()}</small>
    <button type="button" className="btn btn-outline-danger">&times;</button>
    </li>
))}
        </ul>
    )
}
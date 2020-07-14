import React, { useContext } from 'react'
import props from 'react'
import { FirebaseContext } from '../context/firebase/FirebaseContext'
import { AlertContext } from '../context/alertContext'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

export const NotesList = ({notes}) => {
  const {removeNotes} = useContext(FirebaseContext)
  const alert = useContext(AlertContext)

  //   function getAlert(){
  //   const btn = document.getElementById("#notelist").getAttribute("onClick")
  // }  
  //   if(getAlert()){ 
  //     alert.show('Заметка была удалена!')
  //   }
  

  return (
    <TransitionGroup component='ul'  className="list-group"> 
    {notes.map(note => (
      <CSSTransition
        key={note.id}
        classNames={'note'}
        timeout={{
          enter:400,
          exit:600
        }}
      > 
       <li  className="list-group-item" ><div>
        <strong>{note.title} </strong>
        <small>{note.data}</small>
        </div>
        <button style={{marginLeft:'61rem'}} 
        id='notelist'
        onClick={()=> removeNotes(note.id) 
        
        }  
        type="button" className="btn btn-danger btn-sm">&times;</button>
        </li>
        </CSSTransition> 
    ))}
    </TransitionGroup>
  )

    }


    
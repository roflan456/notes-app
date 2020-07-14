import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alertContext'
import { FirebaseContext } from '../context/firebase/FirebaseContext'

export const Form = () => {
  const [value,setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)
  const {removeNotes} = useContext(FirebaseContext)

  const submitHandler = (event) => {
  event.preventDefault()

  if(value.trim()){
    firebase.addNotes(value.trim()).
    then(()=>{
    alert.show('Заметка была создана','success')
  })  
  .catch(()=> {
    alert.show('Что-то пошло не так!','danger')
  })
    setValue('')
  }else{  
    alert.show('Введите название заметки!')
  }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <input style={{marginTop:'25px'}}  value={value} onChange={(event)=> setValue(event.target.value)}   type='text' className='form-control' placeholder='Введите текст заметки...'></input>
      </div>
    </form>
  )
}

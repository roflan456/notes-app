import React,{useContext} from 'react'
import { AlertContext } from '../context/alertContext'
import {CSSTransition} from 'react-transition-group'


export const Alert = () => {

  const {alert,hide} = useContext(AlertContext)
  
  return (
  <CSSTransition
    in={alert.visible}
    timeout={{
      enter:500,
      exit:300
    }}
    classNames={'alert'}
    mountOnEnter
    unmountOnExit
  >
  <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}style ={{textAlign:'center',marginLeft:'6rem',marginRight:'6rem',marginTop:'1.5rem'}} role="alert">
  <strong>Внимание!
    &nbsp;{alert.text}</strong> 
  <button onClick={hide} type="button" className="close"  aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</CSSTransition>
  )
  
}
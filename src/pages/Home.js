import React, { Fragment,useContext, useEffect } from 'react'
import {Form} from '../components/Form'
import {NotesList} from '../components/NotesList'
import { firebaseReducer } from '../context/firebase/firebaseReducer'
import { FirebaseContext } from '../context/firebase/FirebaseContext'
import { Loader } from '../components/Loader'
import props from 'react'


export const Home = () => {
    const {loading,notes,fetchNotes} = useContext(FirebaseContext) 

    useEffect(() => {
        fetchNotes()
        //eslint-disable-next-line
    },[]) 

    return (
        <Fragment>
            <Form/> 
            <hr/>
                {loading 
                ? <Loader/>
                : <NotesList notes={notes} />  

                }

            <hr/>
        </Fragment>
            
        
    )
}


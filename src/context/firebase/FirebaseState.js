import React, { useReducer } from 'react'
import axios from 'axios'
import { FirebaseContext } from './FirebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER, REMOVE_NOTES, ADD_NOTES, FETCH_NOTES } from './firebaseTypes'


const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {

    const initialState = {
        notes:[], 
        loading:false
    }

    const [state,dispatch] = useReducer(firebaseReducer,initialState)

    const showLoader = () => dispatch({type:SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const response = await axios.get(`${url}/notes.json`)
        const payload = Object.keys(response.data).map(key => {
          return {
                 ...response.data[key],
              id:key
             }
                 }) 
        dispatch({type:FETCH_NOTES,payload})

     }
 
    const addNotes = async title => {
        const note = {  
            title,
            data:new Date().toJSON()
        }

        try{
            const response = await axios.post(`${url}/notes.json`,note)
            const payload = {
                ...note,
                id:response.data.name 
            }
            dispatch({type:ADD_NOTES,payload})
 
        }catch(e){
            throw new Error('Error: ',e.message)
        }
    
    }
    
    
    const removeNotes = async id => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type:REMOVE_NOTES,
            payload:id
        })

    }

  
    return(
        <FirebaseContext.Provider value={{
            showLoader,fetchNotes,addNotes,removeNotes,
            loading:state.loading,
            notes:state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
)
}



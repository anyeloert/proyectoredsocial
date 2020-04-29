import {INFO_FACEBOOK} from '../Actions/tipes'
import {INFO_GOOGLE} from '../Actions/tipes'

const defaulState ={
    name: '',
    picture:''
}

export default function (state = defaulState, action)  {
    switch (action.type){
        case INFO_FACEBOOK:
            return{
                ...state,
                name: action.payload.name,
                picture: action.payload.url            
            }           
        case INFO_GOOGLE:
            return{
                ...state,
                name: action.payload.name,
                picture: action.payload.imageUrl            
            }           
        default:
            return state
    }        
}
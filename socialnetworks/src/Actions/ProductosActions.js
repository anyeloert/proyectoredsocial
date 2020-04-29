import {INFO_FACEBOOK} from './tipes'
import {INFO_GOOGLE} from './tipes'

export const getInfoFacebook = response => dispatch => {
    const {name, picture} = response
    const {url} = picture.data
    dispatch( {
        type : INFO_FACEBOOK,
        payload : {
            name,
            url
        }            
    })
}
export const getInfoGoogle = response => dispatch => {
    const {name, imageUrl} = response.profileObj
    dispatch( {
        type : INFO_GOOGLE,
        payload : {
            name,
            imageUrl
        }            
    })
}




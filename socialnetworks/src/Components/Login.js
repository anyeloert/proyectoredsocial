import React from 'react';

//social networks
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

//Redux
import {getInfoFacebook, getInfoGoogle} from '../Actions/ProductosActions'
import {connect} from 'react-redux'

const Login = (props) => {

    const {getInfoFacebook, getInfoGoogle} = props

    const responseFacebook = (response) => {
        //Save info in store        
        getInfoFacebook(response);
        
        //almacenar en local storage
        localStorage.setItem('name' , JSON.stringify(response.name))
        localStorage.setItem('image' , JSON.stringify(response.picture.data.url))


        //Redirection
        props.history.push('/home')
    }
    const responseGoogle = (response) => {
        //Save info in store   
        getInfoGoogle(response)

         //almacenar en local storage
         localStorage.setItem('name' , JSON.stringify(response.profileObj.name))
         localStorage.setItem('image' , JSON.stringify(response.profileObj.imageUrl))
       
         //Redirection
         props.history.push('/home')
    }
    const failure = (error) => {
        console.log(error);
    }

    return (
        <div className='login'>
            <div className="row card grey lighten-5 ">
                <div className="card-action ">
                    <div className='col-s12'>
                        <FacebookLogin
                            appId="226275288604762"
                            textButton='facebook'
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            onFailure= {failure}
                            cssClass="btn-large facebook "
                            icon="fab fa-facebook-f col-s12"
                        />
                    </div>
                    <br/>
                        <GoogleLogin
                            clientId="484760356109-n2hvrj325qn52nm5ll5hi0cii4u5vjqo.apps.googleusercontent.com"
                            render={renderProps => (
                                <button onClick={renderProps.onClick}  className='btn-large google'><i className="fab fa-google"></i> Google</button>
                            )}
                            autoLoad={false}
                            onSuccess={responseGoogle}
                            onFailure={failure}
                            cookiePolicy={'single_host_origin'}
                        />
                </div>
            </div>
        </div>
    );
};

export default connect(null, {getInfoFacebook, getInfoGoogle})(Login);
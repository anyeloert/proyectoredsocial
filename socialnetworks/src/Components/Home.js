import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom'

//Redux

import {connect} from 'react-redux'

const Home = (props) => {

    const [name, getName] = useState('')
    const [picture, getPicture] = useState('')
    const [isLogged, getIsLogged] = useState(true)
    
    useEffect(() => {
        getName(JSON.parse(localStorage.getItem('name')))
        getPicture(JSON.parse(localStorage.getItem('image')))
        getIsLogged(true)
    })    

    if (isLogged === false)
        return (<Redirect to='/'/>)
    
    return (       
        <nav>
            <div className="nav-wrapper ">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">{name}</a></li>
                    <img src={picture} onClick={() => {localStorage.clear(); getIsLogged(false)}}/>
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({
    name: state.productos.name,
    picture: state.productos.picture
})

export default connect (mapStateToProps)(Home);
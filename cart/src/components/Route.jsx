import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Login from './Login'
import About from './About'
import Home from './Home'
import Cart from './Cart'

export default  function Routes(props){
    const { app } = props
    console.log(app)
    return (
        <Switch>
            <Route path = '/' exact render={(props)=><Home {...props} app={app} />} ></Route>
            <Route path = '/about' component={About}></Route>
            <Route path = '/login' render ={(props)=><Login {...props} app={app}/>}></Route>
            <Route path='/shoppingcart' render={(props) =><Cart {...props} app={app} />}></Route>
            {/* <Route path = '/' component={Contactus}></Route> */}
            {/* <Route path = '/' component={Navbar}></Route> */}
        </Switch>
    )
} 
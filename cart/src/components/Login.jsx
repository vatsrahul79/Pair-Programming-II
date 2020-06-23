import React from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
         }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const {app} = this.props
        console.log(app)
        const { username,password} = this.state
        let payload = {
            username,
            password
        }
        app.checkValidUser( payload )
    }

    render(){
        const {username,password} = this.state
        const {app} = this.props
        
        if(app.isAuth()){
            return <Redirect to = '/'/>
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    username
                    <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e=>this.setState({ username:e.target.value})}/>
                </div>
                <div>
                    password
                    <input type= "text" name ="password"
                    value={password}
                    onChange={e=>this.setState({ password:e.target.value})}/>
                </div>
                <input type ="submit" value="Login"/>

            </form>
        )
    }
}

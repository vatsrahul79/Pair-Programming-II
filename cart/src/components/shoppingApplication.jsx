import React from 'react'
import Navbar from './Navbar'
import Route from './Route'


class Shopping extends React.Component{
    constructor(){
        super();
        this.state ={
            cartItems: [],
            users: [ 
                {
                    username: 'admin',
                    password: 'admin'
                }
             ],
            isAuthenticated: false,
            user: null
        }
    }

    isAuthenticated = () => {
        console.log(this.state)
        if(this.state.isAuthenticated){
            return true
        }
        else{
            return false
        }
    }

    getCartItems = () => {
        return this.state.cartItems
    }

    getUser = () => {
        return this.state.user
    }


    checkValidUser = ({username,password}) => {
        let flag = false;
        this.state.users.forEach(user => {
            if( user.username === username && user.password === password ) {
                flag = true;
            }
        });
        this.setState({ 
            isAuthenticated: true,
            });
        if(flag){
            alert('user is authenticated')
        }
        return flag;
    }

    addToCart = (payload) => {

        if( !this.isAuthenticated() ){
            alert('please login')
        }

        let cart = [...this.state.cartItems];
        let id = payload.id
        
        let item = {
            ...payload,
            qty: 1
        }
        // if duplicated
        let duplicated = false
        for( let i = 0; i < cart.length; i++){
            if(cart[i].id === Number(id)){
                duplicated = true
                cart[i].qty++
                this.setState({ cartItems: cart})
                break
            }
        }
        if(!duplicated){
            this.setState({
                cartItems: [ ...cart, item ]
            })
        }

    }

    getCartItemsLength = () => {
        return this.state.cartItems.length
    }

    render(){
        let appData = {
            addToCart: this.addToCart,
            checkValidUser: this.checkValidUser,
            getCartItems: this.getCartItems,
            isAuth: this.isAuthenticated ,
            getUser: this.getUser,
            getCartItemsLength: this.getCartItemsLength
        }
        return(
            <div>
                <Navbar/>
                <Route app = {appData} />
            </div>
        )
    }
}

export default Shopping
import React from 'react'
import {Redirect} from "react-router-dom"
import CartItem from "./Cartitems"
const Cart = (props) => {
    const {app} = props
    const length = app.getCartItemsLength()
    const isAuthenticated = app.isAuth()
    const cartItems = app.getCartItems()
    if(!isAuthenticated){
        alert('user not authenticated')
        return <Redirect to='/login'/>
    }

    return (
        <div>
            { length===0 && "Cart is empty"}
            { length!==0 && cartItems.map( item=> <CartItem key={item.id} {...item} /> ) }
        </div>
    )
}

export default Cart
import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = (props) => {
    return (
        <div className="prod-item">
            <div>{props.name}</div>
            <img src={props.img} alt={props.name} />
            <div>Price: {props.price}</div>
            <div>Qty: {props.qty}</div>
            

            <style jsx>
            {`
                .prod-item{
                    width: 200px;
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 30px;
                    margin: 10px;
                }
            `}
            </style>
        </div>
    )
}

export default CartItem
import React from 'react'
import ProductItem from './ProductItems'
import data from "../utils/data..json"
const Home = (props) => {
    const { app } = props

    const handleClick = (id) => {
        let item = data.find( item=>item.id===Number(id))
        console.log(app)
        app.addToCart(item)
    }
    

    return (
        <>
        <div className="home">
            
            {
                data.map(item => <ProductItem key={item.id} {...item} handleClick={handleClick} />)
            }
            <style jsx>
                {`
                    .home{
                        display: flex;
                        flex-wrap: wrap;
                        padding: 10px
                    }
                `}
                </style>
        </div>
        </>
    )
}

export default Home

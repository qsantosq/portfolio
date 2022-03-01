import React from 'react'
import "./Home.css"
import Header from '../Header/index'
import Body from '../Body/index'
import Footer from '../Footer/index'

const Home = () => {
    return (
        <div className="Home">
            <div className="Flex-header-body">
            <div className="contenedor-header">
               <Header />
               <Footer />
            </div>
                <Body />
            </div>

        </div>
    )
}

export default Home
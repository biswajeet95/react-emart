import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="https://img.freepik.com/free-photo/young-woman-yellow-leather-jacket-copy-space_23-2148674153.jpg?size=626&ext=jpg" className="card-img" alt="background" height="550px"/>
                    <div className="card-img-overlay d-flex flec-column justify-content-center">
                        <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                       

                        </div>
                        
                    </div>
            </div>
            <Products/>
        </div>
    )


}

export default Home;

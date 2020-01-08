import React from 'react'; 
import './Display.css';

const Display = () => {
    return(
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                className="img-responsive"
                src="https://images-na.ssl-images-amazon.com/images/I/61MnT8q%2B3UL._UY500_.jpg"
                alt="img-Tshirt"
                />
            </div>
            <div className="memeText text-center">
                <div className="upperText">
                    <p>Upper Text</p>
            </div>
            <img
            src="https://images-na.ssl-images-amazon.com/images/I/71Pzqic%2BArL._UY395_.jpg"
            alt="meme-text"
            />
                <div className="lowerText">
                    <p>Lower Text</p>
                </div>
            </div>
        </div>
    )
    
}

export default Display
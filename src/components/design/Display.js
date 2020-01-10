import React from 'react'; 
import './Display.css';

const Display = ({ display }) => {
    
    return(
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                className="img-responsive"
                src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`}
                alt="img-Tshirt"
                />
            </div>
            <div className="memeText text-center">
                <div className="upperText">
                    <p>{display.upperText}</p>
            </div>
            <img
            src="https://images-na.ssl-images-amazon.com/images/I/71Pzqic%2BArL._UY395_.jpg"
            alt="meme-text"
            />
                <div className="lowerText">
                    <p>{display.lowerText}</p>
                </div>
            </div>
        </div>
    )
    
}

export default Display
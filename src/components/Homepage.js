import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    const [getPhones, setPhones] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8001/phone_models")
            .then((response) => response.json())
            .then((data) => setPhones(data));
    }, []);

    const handleClick = (phoneId) => {
        navigate(`/product/${phoneId}`);
    };

    return (
        <div className="home">
            {getPhones.map((phone) => (
                <div className='phones' key={phone.id}>
                    <img src={phone.img} alt={phone.name} />
                    <h3>Brand: {phone.brand}</h3>
                    <h4>Name: {phone.name}</h4>
                    <p>Price: {phone.price}USD</p>
                    <button onClick={() => handleClick(phone.id)}>View More Details</button>
                </div>
            ))}
        </div>
    );
}

export default Homepage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [selectedPhone, setSelectedPhone] = useState(null);
    const [deliveryLocation, setDeliveryLocation] = useState({
        city: "",
        address: ""
    });

    useEffect(() => {

        fetch(`http://localhost:8001/phone_models/${id}`)
            .then((response) => response.json())
            .then((data) => setSelectedPhone(data));
    }, [id]);

    const handleAddToCart = () => {

    };

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        setDeliveryLocation((prevLocation) => ({
            ...prevLocation,
            [name]: value
        }));
    };

    if (!selectedPhone) {

        return null;
    }

    return (
        <div className="prod">
            <div className="product-details">
                <div className="product-image">
                    <img src={selectedPhone.img} alt={selectedPhone.name} />
                </div>
                <div className="product-info">
                    <h2>{selectedPhone.name}</h2>
                    <p>Brand: {selectedPhone.brand}</p>
                    <p>Price: {selectedPhone.price} USD</p>
                    <div className="description">
                        <p>Specifications</p>
                        <p>Screen Size:{selectedPhone.screen_size}</p>
                        <p>Release Date:{selectedPhone.release_date}</p>
                        <p>Camera:{selectedPhone.camera}</p>
                        <p>Release Date:{selectedPhone.release_date}</p>
                        <p>Chipset:{selectedPhone.chipset}</p>
                        <p>Battery:{selectedPhone.battery}</p>
                        <p>Technology:{selectedPhone.technology}</p>
                        <p>Sensors:{selectedPhone.sensors}</p>
                    </div>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <div className="deli">
                <h3>Delivery Location</h3>
                <input

                    type="text"
                    name="city"
                    placeholder="City"
                    value={deliveryLocation.city}
                    onChange={handleLocationChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={deliveryLocation.address}
                    onChange={handleLocationChange}
                />
            </div>
        </div>
    );
}

export default ProductDetails;
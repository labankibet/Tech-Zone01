import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    const [getPhones, setPhones] = useState([]);
    useEffect(() => {
        fetch("https://json-server-dusky-nine.vercel.app/phone_models")
            .then((response) => response.json())
            .then((data) => setPhones(data));
    }, []);

    const handleClick = (phoneId) => {
        navigate(`/product/${phoneId}`);
    };
    const [search ,setSearch] = useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }
    const filtered = getPhones.filter((i) =>{
        if (search === ''){
            return true
        }else{
            return i.name.includes(search)
        }
    })

    return (
        <div >
            <div>
                <form>
                    <input type="text" placeholder="search..." value= {search} onChange={handleChange}/>
                </form>

            </div>
            <div className="home">
            {filtered.map((phone) => (
                <div className='phones' key={phone.id}>
                    <img src={phone.img} alt={phone.name} />
                    <h3>Brand: {phone.brand}</h3>
                    <h4>Name: {phone.name}</h4>
                    <p>Price: {phone.price}USD</p>
                    <button onClick={() => handleClick(phone.id)}>View More Details</button>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Homepage;

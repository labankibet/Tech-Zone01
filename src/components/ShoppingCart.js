import { useEffect, useState } from "react";

function Cart(){
    const [cart ,setInCart] = useState([])
    useEffect(() =>{
        fetch('https://json-server-dusky-nine.vercel.app/cart-details')
        .then((response) => response.json())
        .then((data) => setInCart(data));
    },[])

    function handleDelete(id){
        console.log(id)
        fetch(`https://json-server-dusky-nine.vercel.app/cart-details/${id}`,{
            method:"DELETE"
        })
        const updatedCart = cart.filter((item)=> item.id !== id)
        setInCart(updatedCart)
    }
    
    let total = 0
    let cartData = cart.map((item)=>{
        let amount = parseFloat(item.price)
        total+= amount
    })
    console.log(cartData)

    const [getDate , setDate] = useState('')
    const [getCardDetails, setCardDetails] = useState('')
    const [getName, setName]= useState('')
    const [getAddress , setAddress] = useState('')

    const [getOrder, SetOrder]= useState([])

    function handleDate(e){
        setDate(e.target.value)
    }
    function handleName(e){
        setName(e.target.value)
    }
    function handleCardDetails(e){
        setCardDetails(e.target.value)
    }
    function handleAddress(e){
        setAddress(e.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
         const orderDetails={
            date:getDate,
            name:getName,
            card:getCardDetails,
            address:getAddress,
            amount:{total} 
         }
         fetch('https://json-server-dusky-nine.vercel.app/order-details',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(orderDetails)
         })
         setAddress('')
         setCardDetails('')
         setDate('')
         setName('')
         alert('order details submitted')
    }
    return (
        <div className="output">
        {cart.length > 0 ? 
        <table>
            <thead>
                <tr>
                    <th colSpan ="5"><h3>Cart Details</h3></th>
                </tr>
            <tr>
                <th>Number</th>
                <th>Item Name</th>
                <th>Item Brand</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {cart.map((item , index)=>(
                    <tr key = {item.id}>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.price} USD</td>
                        <td><button onClick ={()=>handleDelete(item.id)}>Remove From Cart</button></td>

                    </tr>
                ))}
            </tbody>
        </table>
        : 
        <p>Cart is Empty!</p>
        }
        <form id = "checkout" onSubmit={handleSubmit}>
            <h3>Checkout Details</h3>
            <p>Complete your purchase item by providing your payment details order</p>
            <label htmlFor="date">
                Order Date:
                <input type="date" value ={getDate} onChange={handleDate}/>
            </label>
            <label htmlFor="name">
                Customer Name:
                <input type="text" placeholder="name" value={getName} onChange={handleName}/>
            </label>
            <label htmlFor="card">
                Card Details:
                <input type="text" placeholder="card details" value={getCardDetails} onChange={handleCardDetails}/>
            </label>
            <label>
                Delivery Address
                <input type="text"placeholder="address" value={getAddress} onChange={handleAddress}/>
            </label>
            <label>
               Amount to be paid : {total} USDs
            </label>
            <button>Proceed To Checkout</button>
        </form>

        </div>
    )
}
export default Cart;

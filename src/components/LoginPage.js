import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')
    //const [isLoggedIn,setIsLoggedIn]= useState(false)
    const [userdata, setUserData]= useState([])
    useEffect(()=>{
        fetch('https://json-server-dusky-nine.vercel.app/user-data')
        .then(response => response.json())
        .then( data => setUserData(data))
    },[])
    const user = userdata.find((user) => user.email === getEmail && user.password === getPassword)
    function handleSubmit(e){
        e.preventDefault()
            if(user){
                alert('Login Success')
            }else{
               alert('Wrong password and email combination')
            }
            setEmail('')
            setPassword('')
    }
      
   

    return(
        <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={getEmail} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={getPassword} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        <h4>Register Here<Link to="/registration">Register</Link></h4>
      </form>
    )
}
export default Login;

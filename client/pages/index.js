//minimize.com/
import Login from '../components/Login.js';
import NavBar from '../components/NavBar.js';
import Register from '../components/Register.js';
import {useState} from "react";


export default function HomePage() {
  const [register, setRegister] = useState(false);
  
  return (
    <>
    <NavBar />
    {(register === true)? (<Register setRegister = {setRegister} />) : (<Login setRegister = {setRegister}/>)}
    </>
  )
}

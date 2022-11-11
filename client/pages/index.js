//minimize.com/
import Login from '../components/Login.js';
import NavBar from '../components/NavBar.js';
import Logo from '../styles/logo-long.png';

export default function HomePage() {
  return (
    <>
    <NavBar />
    <img
            href={Logo}
            height="300"
          />
    <Login />
    </>
  )
}

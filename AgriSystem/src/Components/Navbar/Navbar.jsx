import './Navbar.css'

export const Navbar = () => {
  return (
    <div className = 'nav'>
      <div className="nav-logo">AgriSystem</div>

        <ul className="nav-menu">
          <li>Home</li>
          <li>The Program</li>
          <li>About Us</li>
          <li className='nav-contact'>Contact Us</li>
        </ul>

    </div>
  )
}

export default Navbar
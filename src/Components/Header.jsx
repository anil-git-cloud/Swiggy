import "./header.css"
import swiggy from "./images/Swiggy-Logo.png"

const Header = () => {
  return (
      <>
        <div className="header">
            <div className='logo'>
                  <a href="/"><img src={swiggy} alt=""/></a>
            </div>
            <div className="nav-menu">
                  <ul>
                      <li>
                          <a href="#">Restaurants</a>
                          <a href="#">Help</a>
                          <a href="#">Sign in</a>
                          <a href="#">Cart</a>
                      </li>
                  </ul>
            </div>
        </div>
    </>
  )
}

export default Header

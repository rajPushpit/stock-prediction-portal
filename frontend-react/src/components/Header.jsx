import { useContext } from 'react'

import Button from './Button'

import {
  Link,
  useNavigate
} from 'react-router-dom'

import { AuthContext } from '../AuthProvider'

const Header = () => {

  const { isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {

    // Remove Tokens
    localStorage.removeItem('access_Token')
    localStorage.removeItem('refresh_Token')

    // Update Auth State
    setIsLoggedIn(false)

    console.log('Logged out')

    // Redirect
    navigate('/login')

  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top shadow-sm"
        style={{
          background:
            'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e293b 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >

        <div className="container py-2">

          {/* LOGO */}
          <Link
            className="navbar-brand fw-bold text-info fs-3"
            to="/"
          >
            📈 StockPredict AI
          </Link>

          {/* MOBILE TOGGLER */}
          <button
            className="navbar-toggler bg-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAVBAR CONTENT */}
          <div
            className="collapse navbar-collapse"
            id="navbarContent"
          >

            {/* LEFT SIDE */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">

              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-semibold"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link text-light fw-semibold"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              )}

            </ul>

            {/* RIGHT SIDE */}
            <div
              className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0"
            >

              {isLoggedIn ? (
                <>

                  <Button
                    text="Dashboard"
                    class="btn-info fw-semibold px-4"
                    url="/dashboard"
                  />

                  <button
                    className="btn btn-danger fw-semibold px-4"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                </>
              ) : (
                <>

                  <Button
                    text="Login"
                    class="btn-outline-info fw-semibold px-4"
                    url="/login"
                  />

                  <Button
                    text="Register"
                    class="btn-info fw-semibold px-4"
                    url="/register"
                  />

                </>
              )}

            </div>

          </div>

        </div>

      </nav>
    </>
  )
}

export default Header
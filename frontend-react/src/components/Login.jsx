import React, { useState, useContext } from 'react'
import {
  faSpinner,
  faUser,
  faLock
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const { setIsLoggedIn } = useContext(AuthContext)

  const handleLogin = async (e) => {

    e.preventDefault()

    setLoading(true)
    setError('')

    const userData = {
      username,
      password
    }

    try {

      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/token/',
        userData
      )

      // Save Tokens
      localStorage.setItem(
        'accessToken',
        response.data.access
      )

      localStorage.setItem(
        'refreshToken',
        response.data.refresh
      )

      // Update Auth State
      setIsLoggedIn(true)

      // Redirect
      navigate('/dashboard')

    } catch (error) {

      console.error('Login failed:', error.response?.data)

      setError('Invalid username or password.')

    } finally {

      setLoading(false)

    }

  }

  return (
    <>
      <div
        className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background:
            'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e293b 100%)'
        }}
      >

        <div className="row w-100 justify-content-center">

          <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4">

            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
              style={{
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(10px)'
              }}
            >

              <div className="card-body p-4 p-md-5">

                {/* Logo/Icon */}
                <div className="text-center mb-4">

                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '80px',
                      height: '80px',
                      background:
                        'linear-gradient(135deg, #0dcaf0, #2563eb)'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '2rem'
                      }}
                    >
                      📈
                    </span>
                  </div>

                  <h2 className="fw-bold text-white">
                    Welcome Back
                  </h2>

                  <p className="text-secondary">
                    Login to your Stock Prediction account
                  </p>

                </div>

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger text-center">
                    {error}
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleLogin}>

                  {/* Username */}
                  <div className="mb-4">

                    <label className="form-label text-light">
                      Username
                    </label>

                    <div className="input-group">

                      <span className="input-group-text bg-dark border-secondary text-info">
                        <FontAwesomeIcon icon={faUser} />
                      </span>

                      <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) =>
                          setUsername(e.target.value)
                        }
                        required
                      />

                    </div>

                  </div>

                  {/* Password */}
                  <div className="mb-4">

                    <label className="form-label text-light">
                      Password
                    </label>

                    <div className="input-group">

                      <span className="input-group-text bg-dark border-secondary text-info">
                        <FontAwesomeIcon icon={faLock} />
                      </span>

                      <input
                        type="password"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }
                        required
                      />

                    </div>

                  </div>

                  {/* Button */}
                  <div className="d-grid">

                    {loading ? (

                      <button
                        type="submit"
                        className="btn btn-info btn-lg fw-semibold"
                        disabled
                      >
                        <FontAwesomeIcon
                          icon={faSpinner}
                          spin
                          className="me-2"
                        />
                        Logging in...
                      </button>

                    ) : (

                      <button
                        type="submit"
                        className="btn btn-info btn-lg fw-semibold"
                      >
                        Login
                      </button>

                    )}

                  </div>

                </form>

                {/* Footer */}
                <div className="text-center mt-4">

                  <p className="text-secondary mb-0">
                    Don't have an account?{' '}
                    <Link
                      to="/register"
                      className="text-info text-decoration-none fw-semibold"
                    >
                      Register
                    </Link>
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Login
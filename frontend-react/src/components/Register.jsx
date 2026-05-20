import React, { useState } from 'react'

import axios from 'axios'

import {
  faSpinner,
  faUser,
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) => {

    e.preventDefault()

    setLoading(true)
    setErrors({})
    setSuccess(false)

    const userData = {
      username,
      email,
      password
    }

    try {

      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/register/',
        userData
      )

      console.log('Registration successful:', response.data)

      setSuccess(true)

      // Clear Inputs
      setUsername('')
      setEmail('')
      setPassword('')

    } catch (error) {

      console.error(
        'Registration failed:',
        error.response?.data
      )

      setErrors(error.response?.data || {})

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

                {/* Header */}
                <div className="text-center mb-4">

                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '85px',
                      height: '85px',
                      background:
                        'linear-gradient(135deg, #0dcaf0, #2563eb)'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>
                      🚀
                    </span>
                  </div>

                  <h2 className="fw-bold text-white">
                    Create Account
                  </h2>

                  <p className="text-secondary">
                    Join the AI Stock Prediction Platform
                  </p>

                </div>

                {/* Success Message */}
                {success && (
                  <div className="alert alert-success text-center">
                    Registration successful! You can now login.
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleRegistration}>

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
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) =>
                          setUsername(e.target.value)
                        }
                        required
                      />

                    </div>

                    {errors.username && (
                      <small className="text-danger">
                        {errors.username}
                      </small>
                    )}

                  </div>

                  {/* Email */}
                  <div className="mb-4">

                    <label className="form-label text-light">
                      Email Address
                    </label>

                    <div className="input-group">

                      <span className="input-group-text bg-dark border-secondary text-info">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>

                      <input
                        type="email"
                        className="form-control bg-dark text-light border-secondary"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        required
                      />

                    </div>

                    {errors.email && (
                      <small className="text-danger">
                        {errors.email}
                      </small>
                    )}

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
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }
                        required
                      />

                    </div>

                    {errors.password && (
                      <small className="text-danger">
                        {errors.password}
                      </small>
                    )}

                  </div>

                  {/* BUTTON */}
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
                        Creating Account...
                      </button>

                    ) : (

                      <button
                        type="submit"
                        className="btn btn-info btn-lg fw-semibold"
                      >
                        Register
                      </button>

                    )}

                  </div>

                </form>

                {/* Footer */}
                <div className="text-center mt-4">

                  <p className="text-secondary mb-0">
                    Already have an account?{' '}
                    <Link
                      to="/login"
                      className="text-info text-decoration-none fw-semibold"
                    >
                      Login
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

export default Register
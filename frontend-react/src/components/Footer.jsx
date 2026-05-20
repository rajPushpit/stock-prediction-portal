import React from 'react'

import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

const Footer = () => {

  return (
    <>
      <footer
        className="mt-5"
        style={{
          background:
            'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e293b 100%)',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >

        <div className="container py-5">

          <div className="row gy-4 align-items-center">

            {/* LEFT SIDE */}
            <div className="col-lg-6 text-center text-lg-start">

              <h3 className="text-info fw-bold mb-3">
                📈 StockPredict AI
              </h3>

              <p
                className="text-secondary mb-0"
                style={{
                  maxWidth: '500px',
                  lineHeight: '1.8'
                }}
              >
                AI-powered stock prediction platform built using
                React, Django, Machine Learning, and LSTM models
                to help users analyze market trends smarter and faster.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">

              <div
                className="d-flex flex-column align-items-center align-items-lg-end"
              >

                {/* SOCIAL ICONS */}
                <div className="d-flex gap-3 mb-3">

                  <a
                    href="#"
                    className="btn btn-outline-info rounded-circle"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#"
                    className="btn btn-outline-info rounded-circle"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="#"
                    className="btn btn-outline-info rounded-circle"
                  >
                    <FaTwitter />
                  </a>

                </div>

                {/* COPYRIGHT */}
                <p className="text-light mb-0 text-center text-lg-end">

                  © {new Date().getFullYear()} — Built with ❤️ by{' '}

                  <span className="text-info fw-semibold">
                    Pushpit Raj
                  </span>

                </p>

              </div>

            </div>

          </div>

        </div>

      </footer>
    </>
  )
}

export default Footer
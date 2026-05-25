import React from 'react'
import Button from './Button'
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="position-relative overflow-hidden"
        style={{
          minHeight: '100vh',
          background:
            'radial-gradient(circle at top left, rgba(13,202,240,0.12), transparent 25%), radial-gradient(circle at bottom right, rgba(37,99,235,0.15), transparent 25%), linear-gradient(135deg, #020617 0%, #071126 40%, #0f172a 100%)'
        }}
      >

        {/* GLOW EFFECTS */}
        <div
          className="position-absolute top-0 start-0 rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            background: '#0dcaf0',
            opacity: '0.12',
            filter: 'blur(120px)',
            zIndex: 0
          }}
        ></div>

        <div
          className="position-absolute bottom-0 end-0 rounded-circle"
          style={{
            width: '350px',
            height: '350px',
            background: '#2563eb',
            opacity: '0.15',
            filter: 'blur(120px)',
            zIndex: 0
          }}
        ></div>

        <div className="container position-relative z-1">

          <div
            className="row align-items-center justify-content-center"
            style={{
              minHeight: '100vh'
            }}
          >

            {/* LEFT SIDE */}
            <div className="col-lg-6 text-center text-lg-start">

              <span
                className="badge px-4 py-3 mb-4"
                style={{
                  background: 'rgba(13,202,240,0.15)',
                  color: '#22d3ee',
                  border: '1px solid rgba(13,202,240,0.3)',
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(10px)'
                }}
              >
                🚀 AI Powered Stock Market Intelligence
              </span>

              <h1
                className="fw-bold text-white mb-4"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-3px'
                }}
              >
                Predict
                <br />

                <span
                  style={{
                    background:
                      'linear-gradient(135deg,#22d3ee,#2563eb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Stock Trends
                </span>

                <br />
                With AI
              </h1>

              <p
                className="mb-5"
                style={{
                  color: '#94a3b8',
                  fontSize: '1.15rem',
                  lineHeight: '2',
                  maxWidth: '650px'
                }}
              >
                Transform financial data into powerful market insights
                using Artificial Intelligence, Deep Learning, and LSTM
                neural networks. Analyze patterns, forecast stock prices,
                and make smarter investment decisions with real-time
                predictive analytics.
              </p>

              {/* BUTTONS */}
              <div
                className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
              >

                <Button
                  text="Launch Dashboard"
                  class="btn-info btn-lg px-5 py-3 fw-semibold shadow"
                  url="/dashboard"
                />

                <a
                  href="#features"
                  className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                >
                  Explore Features
                </a>

              </div>

              {/* STATS */}
              <div
                className="d-flex flex-wrap gap-4 mt-5 justify-content-center justify-content-lg-start"
              >

                <div>
                  <h2 className="text-info fw-bold">
                    100+
                  </h2>

                  <p className="text-secondary mb-0">
                    Stocks Analyzed
                  </p>
                </div>

                <div>
                  <h2 className="text-info fw-bold">
                    AI
                  </h2>

                  <p className="text-secondary mb-0">
                    Deep Learning
                  </p>
                </div>

                <div>
                  <h2 className="text-info fw-bold">
                    24/7
                  </h2>

                  <p className="text-secondary mb-0">
                    Market Insights
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <div
                className="position-relative mx-auto"
                style={{
                  maxWidth: '550px'
                }}
              >

                {/* GLASS CARD */}
                <div
                  className="p-4 rounded-5 shadow-lg"
                  style={{
                    background: 'rgba(15,23,42,0.55)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(18px)'
                  }}
                >

                  {/* TOP BAR */}
                  <div
                    className="d-flex justify-content-between align-items-center mb-4"
                  >

                    <div className="text-start">
                      <h5 className="text-white fw-bold mb-1">
                        Market Overview
                      </h5>

                      <small className="text-secondary">
                        Real-Time AI Analysis
                      </small>
                    </div>

                    <div
                      className="px-3 py-2 rounded-pill"
                      style={{
                        background: 'rgba(34,197,94,0.15)',
                        color: '#22c55e',
                        fontWeight: '600'
                      }}
                    >
                      +12.8%
                    </div>

                  </div>

                  {/* STOCK CHART IMAGE */}
                  <img
                    src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg"
                    alt="Stock Prediction"
                    className="img-fluid rounded-4"
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                      filter:
                      'drop-shadow(0 0 35px rgba(34,211,238,0.18))'
                      }}
                    />

                  {/* BOTTOM STATS */}
                  <div className="row mt-4 g-3">

                    <div className="col-4">

                      <div
                        className="p-3 rounded-4 text-center"
                        style={{
                          background: 'rgba(255,255,255,0.04)'
                        }}
                      >

                        <h5 className="text-info fw-bold">
                          92%
                        </h5>

                        <small className="text-secondary">
                          Accuracy
                        </small>

                      </div>

                    </div>

                    <div className="col-4">

                      <div
                        className="p-3 rounded-4 text-center"
                        style={{
                          background: 'rgba(255,255,255,0.04)'
                        }}
                      >

                        <h5 className="text-info fw-bold">
                          AI
                        </h5>

                        <small className="text-secondary">
                          Predictions
                        </small>

                      </div>

                    </div>

                    <div className="col-4">

                      <div
                        className="p-3 rounded-4 text-center"
                        style={{
                          background: 'rgba(255,255,255,0.04)'
                        }}
                      >

                        <h5 className="text-info fw-bold">
                          Live
                        </h5>

                        <small className="text-secondary">
                          Data
                        </small>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="py-5"
        style={{
          background: '#020617'
        }}
      >

        <div className="container py-5">

          <div className="text-center mb-5">

            <h2
              className="fw-bold text-white mb-3"
              style={{
                fontSize: '3rem'
              }}
            >
              Powerful Features 🚀
            </h2>

            <p
              className="mx-auto"
              style={{
                color: '#94a3b8',
                maxWidth: '700px',
                fontSize: '1.1rem'
              }}
            >
              Everything you need for intelligent stock prediction
              and financial market analysis.
            </p>

          </div>

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-md-4">
              <Link
                  to="/dashboard"
                  style={{ textDecoration: "none" 

                  }}>

              <div
                className="card-hover p-4 rounded-5 h-100"
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >

                <div className="display-4 mb-4" >
                  📊
                </div>

                <h4 className="text-white fw-bold mb-3">
                  Smart Analytics
                </h4>

                <p
                  style={{
                    color: '#94a3b8',
                    lineHeight: '1.8'
                  }}
                >
                  Analyze historical stock data using advanced
                  financial indicators and intelligent chart systems.
                </p>

              </div>
              </Link>

            </div>

            {/* CARD 2 */}
            <div className="col-md-4">
              <Link
                  to="/dashboard"
                  style={{ textDecoration: "none" 
                    
                  }}>

              <div
                className="card-hover p-4 rounded-5 h-100"
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >

                <div className="display-4 mb-4">
                  🤖
                </div>

                <h4 className="text-white fw-bold mb-3">
                  AI Prediction
                </h4>

                <p
                  style={{
                    color: '#94a3b8',
                    lineHeight: '1.8'
                  }}
                >
                  Forecast future stock prices using LSTM neural
                  networks and machine learning algorithms.
                </p>

              </div>
              </Link>

            </div>

            {/* CARD 3 */}
            <div className="col-md-4">
              <Link
                  to="/dashboard"
                  style={{ textDecoration: "none" 
                    
                  }}>

              <div
                className="card-hover p-4 rounded-5 h-100"
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >

                <div className="display-4 mb-4">
                  ⚡
                </div>

                <h4 className="text-white fw-bold mb-3">
                  Real-Time Insights
                </h4>

                <p
                  style={{
                    color: '#94a3b8',
                    lineHeight: '1.8'
                  }}
                >
                  Access real-time stock trends and market
                  movement insights with lightning-fast APIs.
                </p>

              </div>
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'

import axiosInstance from '../../axiosinstance'

const Dashboard = () => {

  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)

  useEffect(() => {

    const fetchProtectedData = async () => {

      try {

        const response =
          await axiosInstance.get('/protected-view/')

        console.log('Success:', response.data)

        setProtectedData(response.data)

      } catch (error) {

        console.error(
          'Error fetching protected data:',
          error
        )

      } finally {

        setLoading(false)

      }

    }

    fetchProtectedData()

  }, [])

  return (
    <>
      <div
        className="min-vh-100 py-5"
        style={{
          background:
            'linear-gradient(135deg,#020617 0%,#071126 45%,#0f172a 100%)'
        }}
      >

        <div className="container">

          {/* HEADER */}
          <div className="mb-5">

            <h1
              className="fw-bold text-white"
              style={{
                fontSize: '3rem'
              }}
            >
              📈 AI Stock Dashboard
            </h1>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '1.1rem'
              }}
            >
              Welcome to your intelligent stock prediction workspace.
            </p>

          </div>

          {/* LOADING */}
          {loading ? (

            <div className="text-center py-5">

              <div
                className="spinner-border text-info"
                style={{
                  width: '4rem',
                  height: '4rem'
                }}
              ></div>

              <p className="text-light mt-4">
                Loading Dashboard...
              </p>

            </div>

          ) : (

            <>
              {/* TOP CARDS */}
              <div className="row g-4 mb-5">

                {/* CARD 1 */}
                <div className="col-md-4">

                  <div
                    className="p-4 rounded-5 h-100"
                    style={{
                      background: '#0f172a',
                      border:
                        '1px solid rgba(255,255,255,0.08)'
                    }}
                  >

                    <h5 className="text-secondary">
                      Market Status
                    </h5>

                    <h2 className="text-success fw-bold">
                      Bullish 📈
                    </h2>

                    <p className="text-secondary mb-0">
                      AI predicts positive market momentum.
                    </p>

                  </div>

                </div>

                {/* CARD 2 */}
                <div className="col-md-4">

                  <div
                    className="p-4 rounded-5 h-100"
                    style={{
                      background: '#0f172a',
                      border:
                        '1px solid rgba(255,255,255,0.08)'
                    }}
                  >

                    <h5 className="text-secondary">
                      Prediction Accuracy
                    </h5>

                    <h2 className="text-info fw-bold">
                      92%
                    </h2>

                    <p className="text-secondary mb-0">
                      Based on historical market analysis.
                    </p>

                  </div>

                </div>

                {/* CARD 3 */}
                <div className="col-md-4">

                  <div
                    className="p-4 rounded-5 h-100"
                    style={{
                      background: '#0f172a',
                      border:
                        '1px solid rgba(255,255,255,0.08)'
                    }}
                  >

                    <h5 className="text-secondary">
                      AI Signals
                    </h5>

                    <h2 className="text-warning fw-bold">
                      18 Active
                    </h2>

                    <p className="text-secondary mb-0">
                      Live AI-generated stock opportunities.
                    </p>

                  </div>

                </div>

              </div>

              {/* MAIN DASHBOARD */}
              <div className="row g-4">

                {/* LEFT PANEL */}
                <div className="col-lg-8">

                  <div
                    className="p-4 rounded-5 h-100"
                    style={{
                      background: '#0f172a',
                      border:
                        '1px solid rgba(255,255,255,0.08)'
                    }}
                  >

                    <div className="d-flex justify-content-between align-items-center mb-4">

                      <div>

                        <h3 className="text-white fw-bold">
                          Stock Analytics
                        </h3>

                        <p className="text-secondary mb-0">
                          AI-driven market overview
                        </p>

                      </div>

                      <div
                        className="px-3 py-2 rounded-pill"
                        style={{
                          background:
                            'rgba(34,197,94,0.15)',
                          color: '#22c55e'
                        }}
                      >
                        +12.8%
                      </div>

                    </div>

                    {/* IMAGE */}
                    <img
                      src="https://img.freepik.com/free-vector/gradient-stock-market-concept_52683-76355.jpg"
                      alt="Stock Dashboard"
                      className="img-fluid rounded-4"
                    />

                  </div>

                </div>

                {/* RIGHT PANEL */}
                <div className="col-lg-4">

                  <div
                    className="p-4 rounded-5"
                    style={{
                      background: '#0f172a',
                      border:
                        '1px solid rgba(255,255,255,0.08)'
                    }}
                  >

                    <h4 className="text-white fw-bold mb-4">
                      Protected API Response 🔐
                    </h4>

                    <div
                      className="p-3 rounded-4"
                      style={{
                        background:
                          'rgba(255,255,255,0.04)'
                      }}
                    >

                      <pre
                        className="mb-0"
                        style={{
                          color: '#22d3ee',
                          whiteSpace: 'pre-wrap'
                        }}
                      >
                        {JSON.stringify(
                          protectedData,
                          null,
                          2
                        )}
                      </pre>

                    </div>
                  </div>

                </div>

              </div>
            </>
          )}

        </div>

      </div>
    </>
  )
}

export default Dashboard
import { useEffect, useState, useRef } from "react";
import axiosInstance from "../../axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faChartLine,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";

const Dashboard = () => {
  const [ticker, setTicker] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [plot, setPlot] = useState("");
  const [ma100, setMA100] = useState("");
  const [ma200, setMA200] = useState("");
  const [prediction, setPrediction] = useState("");

  const [mse, setMSE] = useState(null);
  const [rmse, setRMSE] = useState(null);
  const [r2, setR2] = useState(null);

  const [marketData, setMarketData] = useState([]);
  const [news, setNews] = useState([]);

  const tickerRef = useRef(null);

  const scrollLeft = () => {
    tickerRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    tickerRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const fetchMarketData = async () => {
    try {
      const res = await axiosInstance.get(
        "/market-overview/"
      );

      setMarketData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNews = async () => {
    try {
      const res = await axiosInstance.get(
        "/market-news/"
      );

      setNews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axiosInstance.get("/protected-view/");

    fetchMarketData();
    fetchNews();

    const interval = setInterval(() => {
      fetchMarketData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post(
        "/predict/",
        {
          ticker,
        }
      );

      const backendRoot =
        import.meta.env.VITE_BACKEND_ROOT;

      setPlot(
        `${backendRoot}${response.data.plot_img}`
      );

      setMA100(
        `${backendRoot}${response.data.plot_100_dma}`
      );

      setMA200(
        `${backendRoot}${response.data.plot_200_dma}`
      );

      setPrediction(
        `${backendRoot}${response.data.plot_prediction}`
      );

      setMSE(response.data.mse);
      setRMSE(response.data.rmse);
      setR2(response.data.r2);

      if (response.data.error) {
        setError(response.data.error);
      }
    } catch (error) {
      setError("Unable to fetch prediction.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-bg min-vh-100 py-4">
      <div className="container">

        {/* MARKET TICKER */}

        <div className="ticker-wrapper glass-card mb-4">

          <button
            className="ticker-btn"
            onClick={scrollLeft}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
            />
          </button>

          <div
            className="market-ticker"
            ref={tickerRef}
          >
            {marketData.map(
              (item, index) => (
                <div
                  key={index}
                  className="ticker-item"
                >
                  <div className="ticker-name">
                    {item.name}
                  </div>

                  <div className="ticker-price">
                    {item.price}
                  </div>

                  <div
                    className={
                      item.change >= 0
                        ? "positive"
                        : "negative"
                    }
                  >
                    {item.change}
                  </div>
                </div>
              )
            )}
          </div>

          <button
            className="ticker-btn"
            onClick={scrollRight}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
            />
          </button>

        </div>

        {/* HEADER */}

        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white">
            <FontAwesomeIcon
              icon={faChartLine}
            />
            {" "}
            Stock Predictor AI
          </h1>

          <p className="text-light opacity-75">
            Analyze stocks with Machine
            Learning predictions
          </p>
        </div>

        {/* SEARCH */}

        <div
          className="glass-card p-4 mx-auto mb-5"
          style={{
            maxWidth: "750px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Stock Ticker (AAPL, TSLA, NVDA)"
                value={ticker}
                onChange={(e) =>
                  setTicker(
                    e.target.value.toUpperCase()
                  )
                }
                required
              />

              <button
                className="btn btn-primary px-4"
                type="submit"
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                    />{" "}
                    Loading
                  </>
                ) : (
                  "Predict"
                )}
              </button>
            </div>

            {error && (
              <div className="alert alert-danger mt-3">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* NEWS + TRENDING */}

        <div className="row g-4 mb-5">

          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <h4 className="text-white mb-4">
                Latest Market News
              </h4>

              {news.length > 0 ? (
                news.map(
                  (article, index) => (
                    <div
                      key={index}
                      className="news-item"
                    >
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {article.title}
                      </a>

                      <small>
                        {article.source}
                      </small>
                    </div>
                  )
                )
              ) : (
                <p className="text-light">
                  No news available
                </p>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="glass-card p-4 ">
              <h4 className="text-white mb-4">
                Trending Markets
              </h4>

              {marketData.map(
                (item, index) => (
                  <div
                    key={index}
                    className="market-row"
                  >
                    <span>
                      {item.name}
                    </span>

                    <span>
                      {item.price}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

        </div>

        {/* METRICS */}

        {prediction && (
          <>
            <div className="row g-4 mb-5">

              <div className="col-md-4">
                <div className="metric-card">
                  <h6>MSE</h6>
                  <h3 className="text-success">
                    {Number(mse).toFixed(2)}
                  </h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="metric-card">
                  <h6>RMSE</h6>
                  <h3 className="text-info">
                    {Number(rmse).toFixed(2)}
                  </h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="metric-card">
                  <h6>R² Score</h6>
                  <h3 className="text-warning">
                    {Number(r2).toFixed(4)}
                  </h3>
                </div>
              </div>

            </div>

            <div className="row g-4">

              <ChartCard
                title="Stock Closing Price"
                image={plot}
              />

              <ChartCard
                title="100 Day Moving Average"
                image={ma100}
              />

              <ChartCard
                title="200 Day Moving Average"
                image={ma200}
              />

              <ChartCard
                title="Prediction vs Original"
                image={prediction}
              />

            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ChartCard = ({
  title,
  image,
}) => (
  <div className="col-lg-6">
    <div className="glass-card chart-card h-100">
      <h5 className="text-white mb-3">
        {title}
      </h5>

      <img
        src={image}
        alt={title}
        className="img-fluid rounded"
      />
    </div>
  </div>
);

export default Dashboard;
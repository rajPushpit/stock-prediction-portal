# Purpose: A Dockerfile is a step-by-step instruction file that tells Docker how to build and run your application.

FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# RUN apt-get update && apt-get install -y --no-install-recommends \
#     gcc \
#     libpq-dev \
#     && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

# gunicorn = production server
# stock_prediction.wsgi:application = Django entry point
# --bind 0.0.0.0:8000 = listen on port 8000
# --workers 3 = run 3 worker processes

# CMD ["gunicorn", "stock_prediction.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
CMD ["gunicorn", "stock_prediction.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "1", "--timeout", "180"]
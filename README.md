# 🚀 Donation System - DevOps Project

## 📌 Overview

This project is a simple **Donation System** built to demonstrate a complete **DevOps workflow** including:

* Containerization using Docker
* CI/CD pipeline using GitHub Actions
* Cloud deployment on Azure Container Instances
* External database integration with MongoDB Atlas

---

## 🧱 Architecture

```
User → Azure Container (App) → MongoDB Atlas (Database)
```

---

## 🐳 Docker

The application is containerized using Docker.

### 🔹 Features:

* Node.js backend (Express)
* MongoDB integration via environment variables
* Runs on port `3000`

### 🔹 Build Image:

```bash
docker build ./app -t donation-app
```

### 🔹 Run Container:

```bash
docker run -d -p 3000:3000 donation-app
```

---

## ⚙️ CI/CD Pipeline

Implemented using **GitHub Actions**

---

### 🥇 Continuous Integration (CI)

Triggered on every push to `main` branch:

* Checkout code
* Build Docker image
* Run container tests
* Push image to **GitHub Container Registry (GHCR)**

---

### 🥈 Continuous Deployment (CD)

* Automatically triggered after CI
* Deploys application to Azure

---

## ☁️ Azure Deployment

Application is deployed using **Azure Container Instances (ACI)**

### 🔹 Deployment Command:

```bash
az container create \
  --resource-group donation-rg \
  --name donation-app \
  --image ghcr.io/YOUR_USERNAME/donation-app \
  --ports 3000 \
  --os-type Linux \
  --cpu 0.5 --memory 1 \
  --dns-name-label donation-app-unique \
  --environment-variables PORT=3000 MONGO_URI="YOUR_MONGO_URI"
```

---

### 🔹 Public Access

Application is accessible via:

```
http://<dns-name>.westeurope.azurecontainer.io:3000
```

---

## 🗄️ Database (MongoDB Atlas)

* Cloud-hosted MongoDB database
* Free tier used for development

### 🔹 Configuration:

* Create cluster (M0 Free Tier)
* Create database user
* Whitelist IP:

  ```
  0.0.0.0/0
  ```

### 🔹 Connection String:

```
mongodb+srv://<username>:<password>@cluster.mongodb.net/donations
```

---

## 🔐 Environment Variables

Configured in Azure Container:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## 📡 API Endpoints

### 🔹 Health Check

```
GET /
```

### 🔹 Create Donation

```
POST /donate
```

### 🔹 Get All Donations

```
GET /donations
```

---

## 🧪 Testing

### Create Donation:

```bash
curl -X POST http://localhost:3000/donate \
-H "Content-Type: application/json" \
-d '{"name":"Mario","amount":100}'
```

### Get Donations:

```bash
curl http://localhost:3000/donations
```

---

## 🧠 Key DevOps Concepts Learned

* Docker containerization
* Multi-service architecture
* Reverse proxy basics
* CI/CD pipelines
* Artifact management (Docker images)
* Cloud deployment (Azure)
* Managed databases (MongoDB Atlas)
* Environment variables & secrets handling
* Application is deployed using **Azure Container Instances (ACI)

---

## 🚀 Future Improvements

* Add frontend (React / Vue)
* Implement authentication
* Use HTTPS (TLS)
* Add monitoring (Prometheus / Grafana)
* Add logging (ELK stack)
* Use Kubernetes instead of ACI

---

## 👨< Mario Makram > 💻 Author

This project is built as a hands-on DevOps learning journey.


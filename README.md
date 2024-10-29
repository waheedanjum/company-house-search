# Company Search Application

This is a simple Angular application for searching and viewing company details and officers. It uses a backend proxy server to handle API requests to a company information service.

## Prerequisites

Before running this project, ensure you have the following installed:

**Node.js (v18 or later)**
**Angular CLI (v17.3.6 or later)**
**npm (Node Package Manager)**

## Getting Started
Follow the steps below to set up and run the project:
**1. Clone the Repository**

git clone <repository-url>
cd company-searchin

**2. Install Dependencies**
Run the following command to install the necessary npm packages:
npm install

**3. Running the Application**
The application consists of two parts:

Angular frontend
Backend proxy server

You can start both the Angular application and the backend proxy server concurrently using the following command:
npm start

This will:

Start the backend proxy server on http://localhost:4000
Serve the Angular application on http://localhost:4200

**4. Running Unit Tests**
To execute the unit tests using Karma, run:

npm test

**Proxy Server**
The backend proxy server is used to forward API requests to a company information service. It is located in the backend-proxy/server.js file.

You can customize the API URL and headers by modifying the CompanyService located at src/app/services/company.service.ts.

The backend proxy runs on http://localhost:4000.

**API Endpoints**
The available API endpoints are:

Search for companies: /api/TruProxyAPI/rest/Companies/v1/Search?Query={search_term}
Get company officers: /api/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber={company_number}

**Project Structure**
.
├── backend-proxy/         # Proxy server for forwarding API requests
├── src/                   # Angular application source code
│   ├── app/               # Main application folder
│   │   ├── components/    # Components (search, details, etc.)
│   │   ├── models/        # Data models for the app
│   │   ├── services/      # API services
│   │   ├── store/         # NgRx store for state management
│   └── assets/            # Static assets
├── angular.json           # Angular CLI configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Documentation

**Customizing the Project**
src/app/services/company.service.ts

**License**
This project is licensed under the MIT License.

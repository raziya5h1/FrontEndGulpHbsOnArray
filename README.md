#                                   CRUD on Arrays – Keshavshoft

## Overview
This project demonstrates the basic CRUD (Create, Read, Update, Delete) operations using JavaScript Arrays. It is developed as a practice project under Keshavshoft to understand how frontend and backend interact in a simple CRUD system.

# CRUD is the foundation of most applications:

   Create → Add new data to an array.

   Read → Display or fetch data from the array.

   Update → Modify existing data in the array.

   Delete → Remove data from the array.

   The project is run inside Visual Studio Code with Node.js for backend logic and plain HTML, CSS, JavaScript for frontend.

# How It Works
# 1. Frontend

   Built with HTML, CSS, and JavaScript.

   Provides input fields and buttons for CRUD operations.

   Uses JavaScript DOM manipulation to show array data on the webpage.

   Sends requests to the backend (if connected with Node.js) or directly manipulates arrays in the browser.

# Example frontend flow:

   User enters data (e.g., name, age).

   Clicks Add → data is pushed to the array.

   Data is displayed in a table or list.

   Edit/Delete buttons allow modification of array values.

# 2. Backend (Optional with Node.js/Express) 

   If using only arrays in the frontend → backend is not required.

   If using Node.js →

   Backend maintains the array data in memory.

   Provides REST API endpoints like:

   POST /create → Add new item

   GET /read → Fetch all items

   PUT /update/:id → Update item

   DELETE /delete/:id → Delete item

   Frontend calls these APIs using fetch() or Axios.

# Example Workflow

   User opens the app in browser.

   Frontend shows a form + table.

   User adds a record → array gets updated.

   User can view the updated list.

   User clicks Edit → updates array data.

   User clicks Delete → removes data from array.

# 📂 Project Structure
```
project-root/
├── app.js                 # Main entry point
├── .env                   # Environment variables
├── public/                # Static files (CSS, JS, images, etc.)
│
├── routes/                # Route definitions
│   ├── v1/                # Public/normal routes (version 1 API)
│   │   └── yourRoutes.js
│   └── secure/            # Auth/secure routes
│       └── yourSecureRoutes.js
│
├── schemas/               # JSON schemas & validators
│   ├── yourSchema.json
│   └── schema.json
│
├── data/                  # Database/data files
│   └── db.json
│
├── token/                 # Token management (JWT helpers, refresh, etc.)
│
└── utils/                 # (Optional) Utilities/helpers 
```
# How to Run
 Option 1 – Pure Frontend

 Open index.html in a browser.

 Perform CRUD directly on arrays in JavaScript.

 Option 2 – With Backend (Node.js)

# Install dependencies:

  npm install express

  Run server:

  node server.js

  Open index.html → It communicates with backend APIs.
  
#  Key Learning

   Understanding CRUD logic.

   How frontend interacts with arrays.

   How backend APIs can be used to store and manipulate data.

   A foundation for moving from arrays → databases (MongoDB, SQL).

# About Keshavshoft

  This project is created under Keshavshoft for learning and practice purposes. It is intended to give beginners a hands-on experience of how CRUD works before moving to advanced database-driven applications.

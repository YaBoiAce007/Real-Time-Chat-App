# Real-Time Chat Application

A basic **real-time chat application** that supports authentication and persistent two-way communication between users.  
The application allows users to create chat rooms, send messages in real time, and view previously sent messages.

## Live Demo

Frontend deployed on Vercel:  
https://real-time-chat-app-pied-five.vercel.app/

Backend hosted on Railway.

---

# Features

## Authentication

The application includes a secure authentication system.

- Users can **register or login** using a username and password
- **Usernames must be unique**
- Authentication is handled using **Time-based JSON Web Tokens (JWT)**
- Tokens are sent with every request and validated by the backend
- If a token expires:
  - The user is automatically **logged out**
  - The user is redirected to the **login page**
- On application startup, the token is validated:
  - If valid → user starts at the **homepage**
  - If expired → user starts at the **login page**

---

## Real-Time Messaging

Real-time communication is implemented using **WebSockets with STOMP**.

Features include:

- Persistent **two-way communication**
- Instant message delivery
- Previously sent messages fetched using **pagination**
- Chat history retrieval when a user opens a chat room

---

## Application Sections

### Login / Register Page

Allows users to:

- Register with a **unique username and password**
- Login with existing credentials

After successful authentication, users are redirected to the homepage.

---

### Profile Section

Displays information related to the currently authenticated user.

---

### Chat Rooms Section

Displays a list of all available chat rooms created by users.

If no chat rooms exist, an empty container is displayed.

---

### Create Chat Room

Users can create a chat room by entering a **unique room name**.

Once created, the room becomes visible in the **chat rooms list**.

---

### Chat Room

Inside a chat room users can:

- Send and receive messages in real time
- View previously sent messages
- Use the message input box located at the bottom of the interface

---

### Chat Room Details

Displays metadata and details about the selected chat room.

---

## Environment Variables

The frontend uses environment variables for configuration:

- **Backend Base URL**
- **WebSocket Connection URL**

These values are used when initializing:

- HTTP requests
- WebSocket connections

---

## API Communication

The frontend communicates with the backend using **Axios**.

Axios includes:

- **Request interceptors** to attach JWT tokens
- **Response interceptors** to handle authentication errors

---

# Step-by-Step Guide to Using the Application

### 1. Register or Login

If you are a new user:

1. Open the application
2. Register using a **unique username and password**
3. After registering, you will be redirected to the **login page**

If you already have an account:

1. Login using your registered credentials

---

### 2. Homepage Navigation

After successful authentication, you will be redirected to the **homepage**.

On the **left side of the screen**, there are two icons:

- **Top Icon → Chat Rooms Section**
- **Bottom Icon → User Profile Section**

---

### 3. Viewing Chat Rooms

Click the **Chat Rooms icon** to view available chat rooms.

You will see:

- A list of existing chat rooms
- Or an empty container if none exist

---

### 4. Creating a Chat Room

At the **top right of the Chat Rooms section**, click the **Create Chat Room icon**.

Steps:

1. Enter a **unique room name**
2. Submit the form
3. The newly created room will appear in the **chat rooms list**

---

### 5. Joining a Chat Room

Click on any chat room from the list.

You will see:

- All existing messages (if any)
- A message input area at the bottom

---

### 6. Sending Messages

1. Type a message in the input field
2. Send the message
3. Messages appear **instantly for all connected users**

---

### 7. Viewing Chat Room Details

In the **top right corner of the chat room**, click the **Chat Room Details icon** to view information about the room.

---

# Technologies Used

## Frontend

- React

## Backend

- Spring Boot

## Database

- PostgreSQL

## Real-Time Communication

- WebSockets
- STOMP Protocol

## Authentication

- JSON Web Tokens (JWT)

## HTTP Client

- Axios

---

# Deployment

Frontend deployed using Vercel.

Live URL:  
https://real-time-chat-app-pied-five.vercel.app/

Backend hosted on Railway.

---

# Running the Project Locally

Follow the steps below to run the frontend on your local machine (make sure to clone the backend repository first).

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/YaBoiAce007/Real-Time-Chat-App.git
```

### 2. Navigate to the Project Directory

```bash
cd Real-Time-Chat-App
```

### 3. Install Dependencies

Make sure you have Node.js installed.

Then run:

```bash
npm install
```

This installs all required dependencies for the React application.

---

### 4. Configure Environment Variables

Create a `.env` file in the root of the project and add the required variables:

```
VITE_API_BASE_URL=http://localhost:8081/real-time-chat-app
VITE_WS_URL=http://localhost:8081/real-time-chat-app/ws-connect
```

These variables are used to configure:

- API requests
- WebSocket connections

---

### 5. Start the Development Server

Run:

```bash
npm run dev
```

The application will start on a local development server.

---

### 6. Open the Application

Open your browser and navigate to:

```
http://localhost:5173
```

You can now use the chat application locally.

---

# Author

Aniketh Gurung
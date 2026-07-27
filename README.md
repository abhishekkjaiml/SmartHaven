# 🏠 Smart Home IoT Web Application

> A full-stack Smart Home IoT web application built with **React, TypeScript, Vite, Node.js, Express.js, Firebase, and ESP32/ESP8266** for real-time device monitoring and remote appliance control.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![ESP32](https://img.shields.io/badge/ESP32-IoT-red)

---

# 📖 Overview

Smart Home IoT is a modern full-stack web application that allows users to remotely monitor and control smart home devices in real time. The system integrates IoT hardware (ESP32/ESP8266) with a secure backend and an intuitive web dashboard, enabling users to manage appliances, monitor sensor data, and automate home operations from anywhere.

A dedicated **React Native mobile application** for this project is also available in a separate repository.

---

# ✨ Features

- 🔐 Secure Firebase Authentication
- 🏠 Smart Home Dashboard
- ⚡ Real-Time Device Monitoring
- 💡 Remote Appliance Control
- 🌡️ Live Temperature & Humidity Monitoring
- 📊 Sensor Data Visualization
- ☁️ Cloud Data Synchronization
- 🔄 Instant Device Status Updates
- 🌐 REST API Integration
- 📱 Responsive User Interface
- 🔒 Secure Backend APIs

---

# 🛠️ Tech Stack

## Frontend

- React.js
- TypeScript
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)

## Backend

- Node.js
- Express.js

## Authentication

- Firebase Authentication

## Database

- Firebase Realtime Database
- Firebase Firestore

## IoT Hardware

- ESP32
- ESP8266
- IoT Sensors
- Relay Modules

## APIs & Tools

- REST APIs
- Git & GitHub
- VS Code
- Postman

---

# 🏗️ System Architecture

```text
                     User
                      │
                      ▼
        React + TypeScript + Vite
           Smart Home Dashboard
                      │
                      ▼
            Node.js + Express.js
                      │
         ┌────────────┴────────────┐
         ▼                         ▼
Firebase Authentication    Firebase Database
         │                         │
         └────────────┬────────────┘
                      │
                  REST APIs
                      │
                      ▼
                ESP32 / ESP8266
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
     IoT Sensors             Relay Modules
```

---

# 📂 Project Structure

```text
smart-home-iot-web
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── services/
│   ├── utils/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── server/
│
├── hardware/
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

# 🚀 Core Functionalities

- User Registration & Login
- Secure Authentication
- Device Management
- Real-Time Sensor Monitoring
- Appliance ON/OFF Control
- Cloud Data Storage
- Live Dashboard
- Device Status Tracking
- Responsive Interface

---

# 📱 Companion Mobile Application

This project also includes a dedicated **React Native Mobile Application** that provides the same smart home monitoring and control experience for Android and iOS users.

**Mobile Repository**

```text
https://github.com/your-username/smart-home-iot-mobile
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/smart-home-iot-web.git
```

## Navigate to Project

```bash
cd smart-home-iot-web
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# 🔧 Backend Setup

```bash
cd server

npm install

npm run dev
```

---

# 🔥 Firebase Setup

1. Create a Firebase Project.
2. Enable Authentication.
3. Enable Realtime Database or Firestore.
4. Copy Firebase configuration.
5. Create a `.env` file.

Example:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

# 🤖 ESP32 / ESP8266 Setup

- Install Arduino IDE or PlatformIO
- Configure Wi-Fi credentials
- Upload firmware
- Connect sensors & relay modules
- Connect to backend APIs

---

# 📸 Screenshots

Add screenshots here.

| Login | Dashboard | Device Control |
|-------|-----------|----------------|
| Image | Image | Image |

---

# 🎥 Demo

Add your demo video or GIF here.

Example

```text
https://your-demo-link.com
```

---

# 🌐 Live Demo

```text
https://your-live-demo.com
```

---

# 📈 Future Improvements

- 🤖 AI-Based Home Automation
- 📊 Energy Consumption Analytics
- 📱 Progressive Web App (PWA)
- 🔔 Push Notifications
- 🎙️ Voice Assistant Integration
- 📷 CCTV Monitoring
- 👥 Multi-User Device Sharing
- ⏰ Smart Scheduling
- 🌍 Multi-Language Support

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 👨‍💻 Author

**Abhishek Kumar**

Full Stack Web & Mobile Developer

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

Portfolio: https://your-portfolio.com

---

# ⭐ Support

If you found this project helpful, please consider giving it a **Star ⭐**.

It helps support future development and encourages new open-source contributions.

---

# 📄 License

This project is licensed under the **MIT License**.

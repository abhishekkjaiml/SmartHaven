import { io } from "socket.io-client";

export const BACKEND_URL = "https://sheat-iot-backend.onrender.com";
export const socket = io(BACKEND_URL);

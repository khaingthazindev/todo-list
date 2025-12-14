import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {AuthProvider} from "./Auth.jsx";
import {ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <App />
        <ToastContainer />
    </AuthProvider>
)

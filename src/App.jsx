import { useAuth } from "./Auth"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Register from "./Register.jsx";
import {useState} from "react";

export default function App() {
		const { user } = useAuth()
		const [mode, setMode] = useState("register")

		if (user) return <Dashboard />

		return mode === "login" ? (
				<Login onSwitch={() => setMode("register")} />
		) : (
				<Register onSwitch={() => setMode("login")} />
		)
}

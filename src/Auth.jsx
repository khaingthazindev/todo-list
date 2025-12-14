import React, {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
		const [user, setUser] = useState(null);

		useEffect(() => {
				const savedUser = localStorage.getItem("USER")
				if (savedUser) setUser(JSON.parse(savedUser))
		}, [])

		function register(email, password) {
				const user = { email, password } // ⚠ demo only
				localStorage.setItem("USER", JSON.stringify(user))
				setUser(user)
		}

		function login(email, password) {
				const savedUser = JSON.parse(localStorage.getItem("USER"))
				if (!savedUser) return false

				if (
						savedUser.email === email &&
						savedUser.password === password
				) {
						setUser(savedUser)
						return true
				}
				return false;
		}

		const logout = () => setUser(null);

		return (
				<AuthContext.Provider value={{user, login, logout}}>
						{children}
				</AuthContext.Provider>
		);
}

export const useAuth = () => useContext(AuthContext);
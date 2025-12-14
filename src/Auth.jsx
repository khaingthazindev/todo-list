import React, {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
		const [user, setUser] = useState(null);

		useEffect(() => {
				const token = localStorage.getItem("TOKEN");
				if (token) {
						// simulate token validation
						const savedUser = JSON.parse(localStorage.getItem("USER"));
						if (savedUser) setUser(savedUser);
						else localStorage.removeItem("TOKEN"); // invalid token
				}
		}, [])

		function register(email, password) {
				const user = { email, password } // ⚠ demo only
				const token = crypto.randomUUID();

				localStorage.setItem("USER", JSON.stringify(user))
				localStorage.setItem("TOKEN", token);
				setUser(user)
		}

		function login(email, password) {
				const savedUser = JSON.parse(localStorage.getItem("USER"))
				if (!savedUser) return false

				if (
						savedUser.email === email &&
						savedUser.password === password
				) {
						const token = crypto.randomUUID();
						localStorage.setItem("TOKEN", token);
						setUser(savedUser)
						return true
				}
				return false;
		}

		const logout = () => {
				localStorage.removeItem("TOKEN");
				setUser(null)
		};

		return (
				<AuthContext.Provider value={{user, register, login, logout}}>
						{children}
				</AuthContext.Provider>
		);
}

export const useAuth = () => useContext(AuthContext);
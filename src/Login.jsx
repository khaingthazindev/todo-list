import { useState } from "react"
import { useAuth } from "./Auth"
import {toast} from "react-toastify";

export default function Login({ onSwitch }) {
		const { login } = useAuth()
		const [email, setEmail] = useState("")
		const [password, setPassword] = useState("")

		function handleSubmit(e) {
				e.preventDefault()
				const ok = login(email, password)
				if (ok) toast("Login successfully 🎉");
				else toast.error("Invalid credentials")
		}

		return (
				<div className="tw-bg-slate-100 tw-w-1/2">
						<form
								onSubmit={handleSubmit}
								className="tw-min-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center"
						>
								<h1 className="tw-text-5xl tw-mb-4 tw-font-arizonia tw-text-teal-700">Login</h1>
								<input
										className="tw-border tw-p-2 tw-mb-2 tw-w-1/2"
										placeholder="Email"
										value={email}
										onChange={e => setEmail(e.target.value)}
								/>
								<input
										className="tw-border tw-p-2 tw-mb-4 tw-w-1/2"
										type="password"
										placeholder="Password"
										value={password}
										onChange={e => setPassword(e.target.value)}
								/>
								<button className="tw-bg-red-500 tw-text-white tw-px-4 tw-py-2 tw-w-1/2">
										Login
								</button>
								<p
										className="tw-mt-3 tw-text-gray-500"
										onClick={onSwitch}
								>
										Don't have an account? <span className="tw-text-teal-700 tw-cursor-pointer">Register</span>
								</p>
						</form>
				</div>
		)
}

import { React, useState } from "react";
import "./register.css";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";

function Register() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errores, setErrores] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const data = { name, email, password, password_confirmation: confirmPassword };
		console.log(data);
		axios
			.post("auth/registro", data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error.response.data);
				if (error.response.status === 422) {
					setErrores(error.response.data.errors);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div>
			<Navbar />
			<div className="main-register">
				<h1 className="h1-register">REGISTRO DE USUARIO</h1>
				<form onSubmit={handleSubmit} className="form-size">
					<div className="div-form">
						<label className="label-form">Email</label>
						<input
							className="input-form"
							type="email"
							placeholder="Ingrese su email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errores.email && <p className="input-error">{errores.email[0]}</p>}
					</div>
					<div className="div-form">
						<label className="label-form">Nombre</label>
						<input
							className="input-form"
							type="text"
							placeholder="Ingrese su nombre"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{errores.name && <p className="input-error">{errores.name[0]}</p>}
					</div>
					<div className="div-form">
						<label className="label-form">Contraseña</label>
						<input
							className="input-form"
							type="password"
							placeholder="Ingrese contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{errores.password && <p className="input-error">{errores.password[0]}</p>}
					</div>
					<div className="div-form">
						<label className="label-form">Confirmar contraseña</label>
						<input
							className="input-form"
							type="password"
							placeholder="Confirmar contraseña"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						{errores.confirmPassword && <p className="input-error">{errores.confirmPassword[0]}</p>}
					</div>
					<button className="button-form" type="submit" disabled={loading}>
						{loading ? (
							<div class="spinner-border" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
						) : (
							"Registrarse"
						)}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;

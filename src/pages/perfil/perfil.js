import { React } from "react";
import "./perfil.css";
import Navbar from "../../components/navbar/navbar";

function Perfil() {
	return (
		<div>
			<div className="main-perfil">
				<h1 className="h1-perfil">PERFIL</h1>
				<form className="form-size" onSubmit={console.log("Contraseña actualizada correctamente")}>
					<div className="div-form">
						<label className="label-form">Email</label>
						<h3 className="h3-form"> EMAIL@GMAIL.COM</h3>
					</div>
					<div className="div-form">
						<label className="label-form">Nombre</label>
						<h3 className="h3-form">JUAN PEREZ</h3>
					</div>
					<div className="div-form">
						<label className="label-form">Contraseña anterior</label>
						<input className="input-form" type="password" placeholder="Ingrese contraseña actual" />
					</div>
					<div className="div-form">
						<label className="label-form">Nueva contraseña</label>
						<input className="input-form" type="password" placeholder="Ingrese nueva contraseña" />
					</div>
					<div className="div-form">
						<label className="label-form">Confirmar contraseña</label>
						<input className="input-form" type="password" placeholder="Confirmar nueva contraseña" />
					</div>
					<button className="button-form" type="submit">
						GUARDAR
					</button>
				</form>
			</div>
		</div>
	);
}

export default Perfil;

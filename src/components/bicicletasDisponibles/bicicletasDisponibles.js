import { React } from "react";
import "./bicicletasDisponibles.css";

function BicicletasDisponibles({ alquilada, foto_url, id, marca, modelo, precio_por_hora }) {
	return (
		<div className="col-3">
			<div className="card my-3" style={{ width: "18rem", height: "400px" }}>
				<img className="card-img-top" src={`http://bicicletas-api-clone.test/${foto_url}`} alt="Bicicleta" />
				<div className="card-body">
					<h5 className="card-title">{modelo}</h5>
					<ul>
						<li>Marca: {marca}</li>
						<li>Precio por hora: ${precio_por_hora}</li>
					</ul>
				</div>
				<div className="card-footer">
					<button disabled={alquilada} className="btn btn-primary">
						{alquilada ? "ALQUILADA" : "ALQUILAR"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default BicicletasDisponibles;

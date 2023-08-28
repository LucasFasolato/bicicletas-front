import { React, useEffect, useState } from "react";
import "./home.css";
import BicicletasDisponibles from "../../components/bicicletasDisponibles/bicicletasDisponibles";
import axios from "axios";

function Home() {
	const [bicicletas, setBicicletas] = useState(null);

	useEffect(() => {
		axios
			.get("bicicletas", {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			})
			.then((response) => {
				console.log(response);
				setBicicletas(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="container">
			<h1 className="display-5 text-center my-5">BICICLETAS DISPONIBLES</h1>
			<div className="row">
				{!bicicletas && (
					<div class="d-flex justify-content-center">
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
				{bicicletas &&
					bicicletas.map((bicicleta, index) => {
						return (
							<BicicletasDisponibles
								key={index}
								alquilada={bicicleta.alquilada}
								foto_url={bicicleta.foto_url}
								id={bicicleta.id}
								marca={bicicleta.marca}
								modelo={bicicleta.modelo}
								precio_por_hora={bicicleta.precio_por_hora}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default Home;

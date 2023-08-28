import { React, useEffect, useState } from "react";
import "./home.css";
import BicicletasDisponibles from "../../components/bicicletasDisponibles/bicicletasDisponibles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
	const [bicicletas, setBicicletas] = useState(null);
	const [idBicicletaCargando, setIdBicicletaCargando] = useState(null);

	const navigate = useNavigate();

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

	const alquilarBicicleta = (id) => {
		setIdBicicletaCargando(id);
		axios
			.post(
				"alquileres/inicio",
				{
					bicicleta_id: id,
				},
				{
					headers: {
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
				}
			)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIdBicicletaCargando(null);
				navigate("/alquileres");
			});
	};

	return (
		<div className="container">
			<h1 className="display-5 text-center my-5">BICICLETAS DISPONIBLES</h1>
			<div className="row">
				{!bicicletas && (
					<div className="d-flex justify-content-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
				{bicicletas &&
					bicicletas.map((bicicleta, index) => {
						return (
							<BicicletasDisponibles
								idBicicletaCargando={idBicicletaCargando}
								key={index}
								alquilada={bicicleta.alquilada}
								foto_url={bicicleta.foto_url}
								id={bicicleta.id}
								marca={bicicleta.marca}
								modelo={bicicleta.modelo}
								precio_por_hora={bicicleta.precio_por_hora}
								alquilarBicicleta={alquilarBicicleta}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default Home;

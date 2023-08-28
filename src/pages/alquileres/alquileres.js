import { React } from "react";
import "./alquileres.css";
import Navbar from "../../components/navbar/navbar";
import MisAlquileres from "../../components/misAlquileres/misAlquileres";

function Alquileres() {
	const ITEMS = [
		{ title: "BICICLETA 1", description: "Modelo 2023" },
		{ title: "BICICLETA 2", description: "Modelo 2023" },
	];
	return (
		<div className="main-home">
			<h1 className="h1-home">MIS ALQUILERES</h1>
			<div className="bicicletas-disp-size">
				<div className="bicicletas-disp-container">
					{ITEMS.map((item, index) => {
						return <MisAlquileres key={index} title={item.title} description={item.description} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Alquileres;

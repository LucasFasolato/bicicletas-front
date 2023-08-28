import { React } from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import BicicletasDisponibles from "../../components/bicicletasDisponibles/bicicletasDisponibles";

function Home() {
	const ITEMS = [
		{ title: "BICICLETA 1", description: "Modelo 2023" },
		{ title: "BICICLETA 2", description: "Modelo 2023" },
		{ title: "BICICLETA 3", description: "Modelo 2023" },
		{ title: "BICICLETA 4", description: "Modelo 2023" },
	];
	return (
		<div className="main-home">
			<Navbar />
			<h1 className="h1-home">BICICLETAS DISPONIBLES</h1>
			<div className="bicicletas-disp-size">
				<div className="bicicletas-disp-container">
					{ITEMS.map((item, index) => {
						return <BicicletasDisponibles key={index} title={item.title} description={item.description} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;

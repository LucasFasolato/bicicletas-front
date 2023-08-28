import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import NotFound from "./pages/notFound/notFound";
import Register from "./pages/register/register";
import Perfil from "./pages/perfil/perfil";
import Alquileres from "./pages/alquileres/alquileres";
import Navbar from "./components/navbar/navbar";

function AppWrapper() {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsLogged(true);
		}
	}, []);

	return (
		<>
			<Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
				<Route path="/register" element={<Register setIsLogged={setIsLogged} />} />
				<Route path="/alquileres" element={<Alquileres />} />
				<Route path="/perfil" element={<Perfil />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

function App() {
	return (
		<Router>
			<AppWrapper />
		</Router>
	);
}
export default App;

import React from "react";
import Navigation from "./components/Navigation";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navigation />
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
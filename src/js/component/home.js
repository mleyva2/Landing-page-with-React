import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}

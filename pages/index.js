import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "./components/footer";
import Navbar1 from "./components/navbar1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Navbar1 />
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://www.w3schools.com/css/img_mountains.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

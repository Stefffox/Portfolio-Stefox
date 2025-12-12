import Navbar from "../components/navbar";

export default function App() {
	return (
		<div className="font-sans">
			<Navbar />

			{/* Section Hero */}
			<section
				id="home"
				className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center p-6"
			>
				<h1 className="text-5xl font-bold mb-4">Bienvenue sur ma Landing Page</h1>
				<p className="text-xl max-w-xl mb-6">
					Une belle page moderne réalisée avec React & Tailwind pour te montrer un exemple propre et réutilisable.
				</p>
				<button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition">
					Commencer
				</button>
			</section>

			{/* Section Features */}
			<section id="features" className="py-20 bg-gray-100 text-center">
				<h2 className="text-4xl font-bold mb-10">Fonctionnalités</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto p-6">
					<div className="p-6 bg-white rounded-2xl shadow">Simple</div>
					<div className="p-6 bg-white rounded-2xl shadow">Rapide</div>
					<div className="p-6 bg-white rounded-2xl shadow">Moderne</div>
				</div>
			</section>

			{/* Section Contact */}
			<section id="contact" className="py-20 text-center bg-white">
				<h2 className="text-4xl font-bold mb-6">Contact</h2>
				<p className="text-lg">Écris-moi si tu veux d'autres composants !</p>
			</section>
		</div>
	);
}

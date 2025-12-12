import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
			<div className="max-w-6xl mx-auto flex items-center justify-between p-4">
				<h1 className="text-2xl font-bold">MonSite</h1>

				<div className="hidden md:flex gap-6 text-lg">
					<a href="#home" className="hover:text-blue-500">Accueil</a>
					<a href="#features" className="hover:text-blue-500">Fonctionnalités</a>
					<a href="#contact" className="hover:text-blue-500">Contact</a>
				</div>

				<button className="md:hidden" onClick={() => setOpen(!open)}>
					{open ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{open && (
				<div className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg">
					<a href="#home" className="hover:text-blue-500" onClick={() => setOpen(false)}>Accueil</a>
					<a href="#features" className="hover:text-blue-500" onClick={() => setOpen(false)}>Fonctionnalités</a>
					<a href="#contact" className="hover:text-blue-500" onClick={() => setOpen(false)}>Contact</a>
				</div>
			)}
		</nav>
	);
}
export function Navbar() {
	return (
		<div className="h-20 bg-black flex text-white justify-between items-center px-10">
			<div className="text-4xl font-extrabold">SocioMart</div>
			<input
				className="bg-slate-600 focus:outline-none focus:ring focus:border-2 focus:border-cyan-500 rounded-md px-2 py-1 text-lg "
				type="text"
				placeholder="Search items"
			/>
			<div className="flex items-center gap-10">
				<div className="text-2xl underline font-bold">Orders</div>
				<div className="text-xl font-bold">My Cart</div>
			</div>
		</div>
	);
}

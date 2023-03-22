import { Navbar } from "./components/Navbar";
import { CartItem } from "./components/CartItem";
const items = [
	{
		id: 1,
		label: "Sleepyhead Fitted Queen Size Waterproof Mattress Cover  (Grey)",
		url: "https://rukminim1.flixcart.com/image/416/416/l1jmc280/mattress-protector/w/g/e/shmp723612gy-sleepyhead-original-imagd37rhpjqngzk.jpeg?q=70",
		price: 150,
		quantity: 1,
		description:
			"Made with highly absorbent bamboo terry fabric (200 GSM), the Sleepyhead mattress protector is eco-friendly, breathable and easy to maintain. It's been specially treated to stay soft and shiny for longer. Plus, it fits snugly onto your mattress, making your bed seem super-duper neat, always.",
	},
	{
		id: 2,
		label: "Sleepyhead Microfibre Geometric Sleeping Pillow Pack of 2  (White)",
		url: "https://rukminim1.flixcart.com/image/416/416/l51d30w0/pillow/l/f/e/43-microfiber-pillow-set-of-2-2-shp2717so2-sleepyhead-original-imagfsvag9hxsxyh.jpeg?q=70",
		price: 1000,
		quantity: 2,
		description:
			"Ever wake up feeling like your head has been doing hula hoops all night? Well, you’re not alone. Most people sleep on pillows that are either too soft, too hard or too pu?y or too memory-foamy! So we made a pillow that provides the right amount of support and just the right amount of ?u?ness that’s perfect, just like your Sleepyhead mattress",
	},
];

function App() {
	return (
		<div className="bg-slate-900">
			<Navbar />
			<CartItem items={items} />
		</div>
	);
}

export default App;

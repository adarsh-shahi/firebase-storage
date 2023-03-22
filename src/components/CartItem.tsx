import { ChangeEvent, useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

interface ICartItemProps {
	items: {
		id: number;
		label: string;
		url: string;
		price: number;
		quantity: number;
		description: string;
	}[];
}

export function CartItem({ items }: ICartItemProps) {
	const [imageUpload, setImageUpload] = useState<null | File>(null);

	const uploadImage = async () => {
		if (!imageUpload) return;
		const imageRef = ref(storage, `post-imgs/${uploadImage.name}${v4()}`);
		await uploadBytes(imageRef, imageUpload);
		const link = await getDownloadURL(imageRef);
		console.log(typeof link);
	};

	const renderedlist = items.map((item) => {
		return (
			<div
				key={item.id}
				className="flex gap-10 bg-black mx-20 mt-10 rounded-xl text-white p-5"
			>
				<img className="" src={item.url} alt="" />
				<div className="flex gap-10">
					<div className="flex flex-col gap-10">
						<div className="text-3xl font-bold">{item.label}</div>
						<div className="flex gap-20">
							<div className="text-2xl font-semibold">Price:{item.price}</div>
							<div className="text-2xl font-semibold">
								Quantity: {item.quantity}
							</div>
						</div>
						<div className="text-gray-400 text-xl">{item.description}</div>
					</div>
					<div className="self-center flex flex-col gap-8 items-center">
						<label htmlFor="file">Review item. Uplaod an Image.</label>
						<input
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setImageUpload(e.target!.files![0]);
							}}
							className="cursor-pointer border-dashed border-2 border-white self-end p-10 rounded-2xl w-max bg-gray-900 placeholder:text-blue-400 placeholder:text-lg"
							type="file"
							name="file"
							id="file"
						></input>
						<button
							onClick={uploadImage}
							className="bg-blue-500 px-3 py-1 rounded-xl font-bold text-lg"
						>
							UPLOAD
						</button>
					</div>
				</div>
			</div>
		);
	});
	return <div className="flex flex-col gap-1">{renderedlist}</div>;
}

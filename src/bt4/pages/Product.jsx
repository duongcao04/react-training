import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiCartDownload } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addCart } from '../../bt5/redux/cartSlice';

export default function Product() {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get('https://react-json-server-wo6r.onrender.com/api/products')
			.then((res) => setProducts(res.data))
			.finally(() => {
				setIsLoading(false);
			});
	}, []);
	const handleAddCart = (product) => {
		alert('Thêm sản phẩm vào giỏ hàng thành công');
		dispatch(addCart(product));
	};

	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Products</h2>
				{isLoading && <p>Loading...</p>}
				{!isLoading && (
					<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{products?.map((product) => (
							<a key={product.id} href={product.href}>
								<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 size-[200px] border'>
									<img
										alt={product.imageAlt}
										src={product.featureImage}
										className='h-full w-full py-5 object-contain object-center'
									/>
								</div>
								<div className='flex items-start justify-between'>
									<div>
										<h3 className='mt-4 font-semibold text-gray-700'>
											{product.name}
										</h3>
										<p className='mt-1 text-lg font-medium text-red-500'>
											{product.price.toLocaleString('it-IT', {
												style: 'currency',
												currency: 'VND',
											})}
										</p>
									</div>
									<button
										className='mt-5 mr-2 size-[50px] grid place-items-center bg-red-500 rounded-lg text-white hover:bg-red-400'
										onClick={() => {
											handleAddCart(product);
										}}
									>
										<BiCartDownload size={30} />
									</button>
								</div>
							</a>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

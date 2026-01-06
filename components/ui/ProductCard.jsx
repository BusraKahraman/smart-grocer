import Link from 'next/link';

export default function ProductCard({ product }) {
	return (
		<Link href={`/products/${product.id}`}>
			<div className='border border-gray-200 p-4 rounded hover:shadow-md transition cursor-pointer'>
				<h3 className='font-semibold'>{product.name}</h3>
				<p className='text-sm text-gray-500'>{product.category}</p>
				<strong className='mt-2 font-bold'>${product.price}</strong>
			</div>
		</Link>
	);
}

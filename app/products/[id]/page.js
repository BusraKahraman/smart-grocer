import { products } from '@/components/data/products';

export default function ProductDetailPage({ params }) {
	const productId = Number(params.id);

	const product = products.find((p) => p.id === productId);

	if (!product) {
		return <p className='p-6'>Product not found.</p>;
	}

	return (
		<main className='max-w-4xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
			<p className='text-gray-600 mb-4'>{product.category}</p>
			<p className='text-xl font-semibold'>${product.price}</p>
		</main>
	);
}
